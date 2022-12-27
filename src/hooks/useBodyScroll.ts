export const useBodyScroll = (isScrollEnabled: boolean) => {
  const bodyElement = document.querySelector("body");
  if (bodyElement) {
    if (isScrollEnabled) {
      bodyElement.style.overflow = "auto";
    } else {
      bodyElement.style.overflow = "hidden";
    }
  }
};
