import { useForm } from "react-hook-form";
import { SignInFormStyled } from "./styles";
import { loginUser, useTypedDispatch, useTypedSelector } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../router";
import { useEffect } from "react";

interface ISignInFormData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const serverError = useTypedSelector((state) => state.user.error);
  const isAuth = useTypedSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE.HOME);
    }
  }, [isAuth, navigate]);

  const onSubmit = (data: ISignInFormData) => {
    dispatch(loginUser(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormData>();

  return (
    <SignInFormStyled onSubmit={handleSubmit(onSubmit)}>
      {serverError && <span className={"server-errors"}>{serverError}</span>}

      <label>email</label>
      <input
        {...register("email", {
          required: true,
          validate: (value: string) => {
            const emailValidationMatches = value.toLowerCase().match(
              // eslint-disable-next-line max-len
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );

            if (emailValidationMatches === null) {
              return "Invalid email address";
            }

            return true;
          },
        })}
        placeholder={"Your email"}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <label>password</label>
      <input
        {...register("password", {
          required: true,
          validate: (value: string) => {
            if (value.match(/\s/g) !== null) {
              return "Invalid password";
            }

            return true;
          },
        })}
        placeholder={"Your password"}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Sign in</button>
      <div>
        <span>
          Don't have an account? <Link to={`${ROUTE.HOME}${ROUTE.SIGN_UP}`}>Sign Up</Link>
        </span>
      </div>
    </SignInFormStyled>
  );
};
