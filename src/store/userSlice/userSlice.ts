import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { firebaseApi, IUserLoginRequestPayload, IUserRegisterRequestPayload } from "firebaseApi";

interface UserState {
  name: string;
  email: string;
  isAuth?: boolean;
  error?: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  isAuth: undefined,
  error: undefined,
};

export const registerUser = createAsyncThunk<
  { name: string; email: string; uid: string },
  IUserRegisterRequestPayload,
  { rejectValue: string }
>("users/register", async (payload, { rejectWithValue }) => {
  try {
    const response = await firebaseApi.registerWithEmailAndPassword(payload);
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
      const response = await firebaseApi.logInWithEmailAndPassword(payload);
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
      await firebaseApi.logout();
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
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.error = undefined;
      state.isAuth = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { setAuthStatus, setUserName, setEmail } = userSlice.actions;
