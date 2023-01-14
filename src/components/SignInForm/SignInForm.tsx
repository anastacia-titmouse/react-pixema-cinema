import { InputSection, SignInFormStyled, Text, Title, Error } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser, useTypedDispatch, useTypedSelector } from "store";
import { ROUTE } from "router";
import { useForm } from "react-hook-form";
import { Button, CustomLink, InputStyled, Label } from "components";

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
      <Title>Sign in</Title>
      <InputSection>
        <div>
          <Label>Email</Label>
          <InputStyled
            className={errors.email ? "error" : ""}
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
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>
        <div>
          <Label>Password</Label>
          <InputStyled
            className={serverError ? "error" : ""}
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
            type="password"
          />
          {errors.password && <Error>{errors.password.message}</Error>}
          {serverError && <Error className={"server-errors"}>{serverError}</Error>}
        </div>
        <CustomLink className="password" to={`${ROUTE.RESET_PASSWORD}`}>
          Forgot password?
        </CustomLink>
      </InputSection>

      <Button type="submit" className="primary">
        Sign in
      </Button>
      <Text>
        Don't have an account? <CustomLink to={`${ROUTE.SIGN_UP}`}>Sign Up</CustomLink>
      </Text>
    </SignInFormStyled>
  );
};
