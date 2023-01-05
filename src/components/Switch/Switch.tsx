import { SwitchStyled, SwitchTrack } from "./styles";

export const Switch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
  return (
    <SwitchStyled className={checked ? "switch-checked" : ""} onClick={onChange}>
      <SwitchTrack className="switch-track" />
    </SwitchStyled>
  );
};
