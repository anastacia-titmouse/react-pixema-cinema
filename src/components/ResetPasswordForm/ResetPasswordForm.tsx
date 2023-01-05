import { ResetPasswordFormStyled, SuccessfulResetText } from "./styles";
import { Button, Input, Label, ServerError } from "components";
import { resetPassword, useTypedDispatch, useTypedSelector } from "store";
import { useState } from "react";

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
      <h1>Reset password</h1>
      {isResetFinished && !error && (
        <SuccessfulResetText>
          {`You will receive an email ${email} with a link to reset your password!`}
        </SuccessfulResetText>
      )}
      <Label>Email</Label>
      <Input
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        disabled={isFormDisabled}
      />

      <Button className="primary" disabled={isFormDisabled}>
        Reset
      </Button>
    </ResetPasswordFormStyled>
  );
};
