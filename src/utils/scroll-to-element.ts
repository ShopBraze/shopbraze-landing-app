export const ScrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element?.getBoundingClientRect()?.top;
    const offsetPosition = elementPosition + window?.scrollY - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.error(`Element with ID '${elementId}' not found.`);
  }
};

