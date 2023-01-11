import { Button } from "components";
import { setIsOpen, useTypedDispatch, useTypedSelector } from "store";
import { BurgerIcon, TimesIcon } from "assets";

export const BurgerButton = () => {
  //FIXME isVisible (useDocumentHook)
  const isVisible = true;
  const isMobileMenuOpen = useTypedSelector((state) => state.mobileMenu.isOpen);
  const dispatch = useTypedDispatch();

  return (
    <Button
      className="grid"
      style={{ padding: 0 }}
      onClick={() => {
        dispatch(setIsOpen(!isMobileMenuOpen));
      }}
    >
      {isMobileMenuOpen ? <TimesIcon /> : <BurgerIcon />}
    </Button>
  );
};
