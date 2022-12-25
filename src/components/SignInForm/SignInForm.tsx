import { useForm, SubmitHandler } from "react-hook-form";
import { CustomLink, FormStyled, Input, InputGroup, Label, Error, Title, Refer } from "./styles";
import { Button } from "../Button/Button";

interface ISignIn {
  email: string;
  password: string;
}
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignIn>();
  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    reset();
    return data;
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Title> Sign In </Title>
      <InputGroup>
        <Label>Email</Label>
        <Input
          {...register("email", {
            required: "Email is required field.",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter correct Email!",
            },
          })}
          type="text"
          placeholder="Your email"
        />
        <Error>{errors.email && errors.email.message}</Error>

        <Label> Password</Label>
        <Input
          {...register("password", {
            required: "Password is required field.",
            minLength: {
              value: 5,
              message: "You must enter at least 5 characters!",
            },
          })}
          type="password"
          placeholder="Your password"
        />
        <Error>{errors.password && errors.password.message}</Error>
        <CustomLink to="/">Foggot password?</CustomLink>
      </InputGroup>
      <Button type="submit">Sign in</Button>

      <CustomLink to="/">
        Don’t have an account? <Refer href="/">Sign Up</Refer>{" "}
      </CustomLink>
    </FormStyled>
  );
};
