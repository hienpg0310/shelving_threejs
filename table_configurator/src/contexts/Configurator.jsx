import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [shelfColor, setShelfColor] = useState("#2d1c12");
  const [shelfWidth, setShelfWidth] = useState(60);
  const [shelfHeight, setshelfHeight] = useState(150);
  const [shelfDetph, setShelfDetph] = useState(50);


  return (
    <ConfiguratorContext.Provider
      value={{
        shelfWidth,
        setShelfWidth,
        shelfHeight,
        setshelfHeight,
        shelfColor,
        setShelfColor,
        shelfDetph, 
        setShelfDetph
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
