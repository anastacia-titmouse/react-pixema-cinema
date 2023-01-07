import { Button, CustomNavLink, InputStyled, Label } from "components";
import { useForm } from "react-hook-form";
import { ROUTE } from "router";
import { registerUser, useTypedDispatch, useTypedSelector } from "store";
import { SignUpFormStyled, Title, Text, InputSection } from "./styles";

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
      {serverError && <span className={"server-errors"}>{serverError}</span>}
      <Title>Sign up</Title>
      <InputSection>
        <div>
          <Label>Name</Label>
          <InputStyled
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
          {errors.name && <span>{errors.name.message}</span>}
        </div>
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
        <div>
          <Label>Confirm password</Label>
          <InputStyled
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Your passwords do no match";
                }
              },
            })}
            placeholder={"Confirm password"}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
      </InputSection>

      <Button type="submit" className="primary">
        Sign up
      </Button>
      <Text>
        Already have an account? <CustomNavLink to={`${ROUTE.SIGN_IN}`}>Sign In</CustomNavLink>
      </Text>
    </SignUpFormStyled>
  );
};
