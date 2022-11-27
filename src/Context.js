import React, { useState, useEffect } from "react";
import { fetchAPI } from "./services/fetchAPI";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const width = window.screen.width;
  const [appState, setAppState] = useState({
    navIsOpen: false,
    input: "",
    data: [],
    error: false,
    screenWidth: width,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.screen.width;
      console.log(width);
      width >= 900
        ? setAppState((oldState) => ({
            ...oldState,
            navIsOpen: true,
            screenWidth: width,
          }))
        : setAppState((oldState) => ({
            ...oldState,
            navIsOpen: false,
            screenWidth: width,
          }));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setAppState((oldState) => ({
      ...oldState,
      navIsOpen: !oldState.navIsOpen,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appState.input.length > 0) {
      fetchAPI(appState.input)
        .then((res) => res.json())
        .then((data) => {
          setAppState((oldData) => ({
            input: "",
            error: false,
            data: [
              ...oldData.data,
              {
                ogUrl: data.result.original_link,
                shortUrl: data.result.short_link,
                code: data.result.code,
              },
            ],
          }));
        });
    } else {
      const input = e.target.previousSibling;
      input.classList.add("error-input");
      setAppState((oldData) => ({
        input: "",
        error: true,
        data: [...oldData.data],
      }));
    }
  };

  const handleChange = (e) => {
    const input = e.target;
    input.classList.add("input");
    setAppState((oldData) => ({ ...oldData, input: input.value }));
  };

  return (
    <Context.Provider
      value={{
        handleChange,
        handleSubmit,
        setAppState,
        toggleNav,
        navIsOpen: appState.navIsOpen,
        data: appState.data,
        input: appState.input,
        error: appState.error,
        screenWidth: appState.screenWidth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
