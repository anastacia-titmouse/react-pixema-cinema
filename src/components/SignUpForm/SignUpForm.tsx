import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router";
import { SignUpFormStyled } from "./styles";
import { registerWithEmailAndPassword } from "../../firebase/firebase";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const onSubmit = (data: SignUpFormData) => {
    const { name, email, password } = data;
    registerWithEmailAndPassword(name, email, password);
    //TODO handle {
    //     "error": {
    //         "code": 400,
    //         "message": "EMAIL_EXISTS",
    //         "errors": [
    //             {
    //                 "message": "EMAIL_EXISTS",
    //                 "domain": "global",
    //                 "reason": "invalid"
    //             }
    //         ]
    //     }
    // }
  };

  return (
    <SignUpFormStyled onSubmit={handleSubmit(onSubmit)}>
      <label>name</label>
      <input
        {...register("name", {
          validate: (value) => {
            if (!value) {
              return "Field is required";
            }

            //TODO

            return true;
          },
        })}
        placeholder={"Your name"}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <label>email</label>
      <input
        {...register("email", {
          required: true,
          validate: (value: string) => {
            const emailValidationMatches = value.toLowerCase().match(
              // eslint-disable-next-line max-len
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );

            console.log("****", emailValidationMatches);
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

      <label>confirm password</label>
      <input
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

      <button type="submit">Sign up</button>
      <div>
        <span>
          Already have an account? <Link to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`}>Sign In</Link>
        </span>
      </div>
    </SignUpFormStyled>
  );
};
