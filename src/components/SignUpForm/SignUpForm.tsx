import { Button, CustomLink, InputStyled, Label } from "components";
import { useForm } from "react-hook-form";
import { ROUTE } from "router";
import { registerUser, useTypedDispatch, useTypedSelector } from "store";
import { SignUpFormStyled, Title, Text, InputSection, Error } from "./styles";

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const dispatch = useTypedDispatch();
  const serverError = useTypedSelector((state) => state.user.error);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpFormData>();

  const onSubmit = (data: ISignUpFormData) => {
    dispatch(registerUser(data));
  };

  return (
    <SignUpFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign up</Title>
      <InputSection>
        <div>
          <Label>Name</Label>
          <InputStyled
            className={errors.name ? "error" : ""}
            {...register("name", {
              validate: (value) => {
                if (!value) {
                  return "Field is required";
                }

                return true;
              },
            })}
            placeholder={"Your name"}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>
        <div>
          <Label>Email</Label>
          <InputStyled
            className={errors.name ? "error" : ""}
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
            className={errors.name ? "error" : ""}
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
        <div>
          <Label>Confirm password</Label>
          <InputStyled
            className={errors.name ? "error" : ""}
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Your passwords do not match";
                }
              },
            })}
            placeholder={"Confirm password"}
          />
          {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}
        </div>
      </InputSection>

      <Button type="submit" className="primary">
        Sign up
      </Button>
      <Text>
        Already have an account? <CustomLink to={`${ROUTE.SIGN_IN}`}>Sign In</CustomLink>
      </Text>
    </SignUpFormStyled>
  );
};
