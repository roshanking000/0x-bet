import { createContext, useContext, useEffect, useState } from "react";
import isBrowser from "../helpers/is-browser";
import isSmallScreen from "../helpers/is-small-screen";

const SidebarContext = createContext(undefined);

export function SidebarProvider({ children }) {
  const location = isBrowser() ? window.location.pathname : "/";
  const [isOpen, setOpen] = useState(
    isBrowser()
      ? window.localStorage.getItem("isSidebarOpen") === "true"
      : false
  );

  // Save latest state to localStorage
  useEffect(() => {
    window.localStorage.setItem("isSidebarOpen", isOpen.toString());
  }, [isOpen]);

  // Close Sidebar on page change on mobile
  useEffect(() => {
    if (isSmallScreen()) {
      setOpen(false);
    }
  }, [location]);

  // Close Sidebar on mobile tap inside main content
  useEffect(() => {
    function handleMobileTapInsideMain(event) {
      const main = document.querySelector("main");
      const isClickInsideMain = main?.contains(event.target);

      if (isSmallScreen() && isClickInsideMain) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleMobileTapInsideMain);
    return () => {
      document.removeEventListener("mousedown", handleMobileTapInsideMain);
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isOpenOnSmallScreens: isOpen,
        isPageWithSidebar: true,
        setOpenOnSmallScreens: setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (typeof context === "undefined") {
    throw new Error(
      "useSidebarContext should be used within the SidebarContext provider!"
    );
  }

  return context;
}
