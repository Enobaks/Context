import { useContext, useState, createContext } from "react";

const initialValues = {
  page_1: false,
  page_2: false,
  page_3: false,
};

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialValues);

  const handleClick = (click) => {
    setIsClicked({ ...initialValues, [click]: true });
  };

  return (
    <TestContext.Provider
      value={{
        handleClick,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useStateContext = () => useContext(TestContext);
