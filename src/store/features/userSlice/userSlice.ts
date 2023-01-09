import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import {
  logout,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  IUserLoginRequestPayload,
  IUserRegisterRequestPayload,
  IUserModel,
  updateUserSettings,
  getFirebaseErrorMessage,
  sendResetPasswordEmail,
} from "services/firebaseApi";
import { RootState } from "store";

interface UserState {
  name: string;
  email: string;
  isAuth?: boolean;
  error?: string;
  uid: string | null;
  useDarkTheme: boolean | null;
  changeSettingsError: string | null;
  isResetPasswordLoading: boolean;
  resetPasswordError: string | null;
}

const initialState: UserState = {
  name: "",
  email: "",
  isAuth: undefined,
  error: undefined,
  uid: null,
  useDarkTheme: null,
  changeSettingsError: null,
  isResetPasswordLoading: false,
  resetPasswordError: null,
};

export const resetPassword = createAsyncThunk<void, string, { rejectValue: string }>(
  "users/resetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      await sendResetPasswordEmail(payload);
    } catch (error) {
      return rejectWithValue(getFirebaseErrorMessage(error));
    }
  },
);

export const updateSettings = createAsyncThunk<
  { useDarkTheme: boolean; name: string; email?: string },
  { useDarkTheme: boolean; email: string; name: string; password: string },
  { rejectValue: string; state: RootState }
>("users/updateSettings", async (payload, { rejectWithValue, getState }) => {
  const state = getState();
  const { uid, email: storeEmail } = state.user;

  if (!uid) {
    throw new Error("Unauthorized");
  }

  try {
    return await updateUserSettings({
      uid,
      useDarkTheme: payload.useDarkTheme,
      name: payload.name,
      email: storeEmail === payload.email ? undefined : payload.email,
      password: payload.password,
    });
  } catch (error) {
    return rejectWithValue(getFirebaseErrorMessage(error));
  }
});

export const registerUser = createAsyncThunk<
  Omit<IUserModel, "authProvider">,
  IUserRegisterRequestPayload,
  { rejectValue: string }
>("users/register", async (payload, { rejectWithValue }) => {
  try {
    const response = await registerWithEmailAndPassword(payload);
    return response;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
          return rejectWithValue("Invalid password");
      }
    }

    return rejectWithValue("Unknown error");
  }
});

export const loginUser = createAsyncThunk<void, IUserLoginRequestPayload, { rejectValue: string }>(
  "users/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await logInWithEmailAndPassword(payload);
      return response;
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case AuthErrorCodes.INVALID_PASSWORD:
            return rejectWithValue("Invalid password");
        }
      }

      return rejectWithValue("Unknown error");
    }
  },
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "users/logout",
  async (payload, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue("Unknown error");
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    setAuthStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    setUid: (state, { payload }: PayloadAction<string>) => {
      state.uid = payload;
    },
    setUseDarkTheme: (state, { payload }: PayloadAction<boolean>) => {
      state.useDarkTheme = payload;
    },
    resetChangeSettingsError: (state) => {
      state.changeSettingsError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.error = undefined;
      state.isAuth = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.useDarkTheme = !!action.payload.useDarkTheme;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(updateSettings.fulfilled, (state, action) => {
      state.changeSettingsError = null;
      state.useDarkTheme = action.payload.useDarkTheme;
      state.name = action.payload.name;

      if (action.payload.email) {
        state.email = action.payload.email;
      }
    });

    builder.addCase(updateSettings.rejected, (state, action) => {
      state.changeSettingsError = action.payload as string;
    });

    builder.addCase(resetPassword.pending, (state) => {
      state.isResetPasswordLoading = true;
    });

    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isResetPasswordLoading = false;
    });

    builder.addCase(resetPassword.rejected, (state, action) => {
      state.resetPasswordError = action.payload as string;
    });
  },
});

export default userSlice.reducer;
export const {
  setAuthStatus,
  setUserName,
  setEmail,
  setUid,
  setUseDarkTheme,
  resetChangeSettingsError,
} = userSlice.actions;
