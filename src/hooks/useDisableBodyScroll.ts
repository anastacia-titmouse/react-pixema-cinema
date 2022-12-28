import { useEffect, useRef } from "react";

export const useDisableBodyScroll = (isScrollEnabled: boolean) => {
  const isUnmounting = useRef(false);

  const toggleBodyScrollVisibility = (isScrollEnabled: boolean) => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      if (isScrollEnabled) {
        bodyElement.style.overflow = "auto";
        bodyElement.style.paddingRight = "0";
      } else {
        const bodyWidthWithScroll = bodyElement.clientWidth;
        bodyElement.style.overflow = "hidden";
        const scrollWidth = bodyElement.clientWidth - bodyWidthWithScroll;
        bodyElement.style.paddingRight = `${scrollWidth}px`;
      }
    }
  };

  useEffect(() => {
    toggleBodyScrollVisibility(isScrollEnabled);
    return () => {
      isUnmounting.current = true;
    };
  }, [isScrollEnabled]);

  useEffect(() => {
    return () => {
      if (isUnmounting) {
        toggleBodyScrollVisibility(false);
      }
    };
  }, []);
};
