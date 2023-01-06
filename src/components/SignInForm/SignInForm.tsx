import { InputSection, LinkStyled, SignInFormStyled, Text, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser, useTypedDispatch, useTypedSelector } from "store";
import { ROUTE } from "router";
import { useForm } from "react-hook-form";
import { Button, InputStyled, Label } from "components";

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
      <Title>Sign up</Title>
      <InputSection>
        <div>
          <Label>Email</Label>
          <InputStyled
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
        </div>
        <div>
          <Label>Password</Label>
          <InputStyled
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
        </div>
      </InputSection>

      <Button type="submit" className="primary">
        Sign in
      </Button>
      <Text>
        Don't have an account? <LinkStyled to={`${ROUTE.HOME}${ROUTE.SIGN_UP}`}>Sign Up</LinkStyled>
      </Text>
    </SignInFormStyled>
  );
};
