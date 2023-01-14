import { Switch, InputStyled, Label, Button, ServerError } from "components";
import {
  ButtonGroup,
  Caption,
  Header2,
  InputGroup,
  SettingsFieldset,
  SettingsFormStyled,
  ThemeSettingFieldset,
} from "./styles";
import { useEffect, useState } from "react";
import {
  resetChangeSettingsError,
  updateSettings,
  useTypedDispatch,
  useTypedSelector,
} from "store";

export const SettingsForm = () => {
  const dispatch = useTypedDispatch();
  const changeSettingsError = useTypedSelector((state) => state.user.changeSettingsError);
  const useDarkThemeStore = useTypedSelector((state) => state.user.useDarkTheme);
  const emailStore = useTypedSelector((state) => state.user.email);
  const nameStore = useTypedSelector((state) => state.user.name);

  const [useDarkTheme, setUseDarkTheme] = useState(!!useDarkThemeStore);
  const [email, setEmail] = useState(emailStore);
  const [name, setName] = useState(nameStore);
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    dispatch(updateSettings({ useDarkTheme: useDarkTheme, name, email, password }));
  };

  const resetForm = () => {
    setUseDarkTheme(!!useDarkThemeStore);
    setEmail(emailStore);
    setName(nameStore);
    setPassword("");
  };

  useEffect(() => {
    dispatch(resetChangeSettingsError());
  }, [dispatch]);

  return (
    <SettingsFormStyled>
      <ServerError text={changeSettingsError}></ServerError>
      <Header2>Profile</Header2>
      <SettingsFieldset>
        <InputGroup>
          <div>
            <Label>Name</Label>
            <InputStyled
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <Label>Email</Label>
            <InputStyled
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </InputGroup>
      </SettingsFieldset>

      <Header2>Password</Header2>
      <SettingsFieldset>
        <InputGroup>
          <div>
            <Label>New password</Label>
            <InputStyled
              placeholder="New password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <Label>Confirm password</Label>
            <InputStyled placeholder="Confirm password" type="password" />
          </div>
        </InputGroup>
      </SettingsFieldset>

      <Header2>Color mode</Header2>
      <ThemeSettingFieldset>
        <div>
          <Label style={{ display: "inline-block" }}>Dark</Label>
          <Caption>Use dark theme</Caption>
        </div>
        <Switch checked={useDarkTheme} onChange={() => setUseDarkTheme(!useDarkTheme)} />
      </ThemeSettingFieldset>
      <ButtonGroup>
        <Button
          onClick={(e) => {
            e.preventDefault();
            resetForm();
          }}
        >
          Cancel
        </Button>
        <Button
          className="primary"
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          Save
        </Button>
      </ButtonGroup>
    </SettingsFormStyled>
  );
};
