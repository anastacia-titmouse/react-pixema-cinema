import { ResetPasswordFormStyled, SuccessfulResetText, Title } from "./styles";
import { Button, CustomLink, InputStyled, Label, ServerError } from "components";
import { resetPassword, useTypedDispatch, useTypedSelector } from "store";
import { useState } from "react";
import { ROUTE } from "router";

export const ResetPasswordForm = () => {
  const dispatch = useTypedDispatch();
  const error = useTypedSelector((state) => state.user.resetPasswordError);
  const [email, setEmail] = useState("");
  const [isResetFinished, setIsResetFinished] = useState(false);
  const loading = useTypedSelector((state) => state.user.isResetPasswordLoading);

  const isFormDisabled = loading || (isResetFinished && !error);

  return (
    <ResetPasswordFormStyled
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(resetPassword(email)).then(() => setIsResetFinished(true));
      }}
    >
      {error && <ServerError text={error} />}
      <Title>Reset password</Title>
      {isResetFinished && !error && (
        <SuccessfulResetText>
          {`You will receive an email ${email} with a link to reset your password! Return to `}
          <CustomLink to={`${ROUTE.SIGN_IN}`}>Sign In</CustomLink>
        </SuccessfulResetText>
      )}
      <div>
        <Label>Email</Label>
        <InputStyled
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={isFormDisabled}
        />
      </div>
      <Button className="primary" disabled={isFormDisabled}>
        Reset
      </Button>
    </ResetPasswordFormStyled>
  );
};
