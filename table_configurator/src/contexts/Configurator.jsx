import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [tuColor, setTuColor] = useState("#ECECEC");
  // const [shelfWidth, setShelfWidth] = useState(60);
  // const [shelfHeight, setshelfHeight] = useState(150);
  // const [shelfDetph, setShelfDetph] = useState(50);


  return (
    <ConfiguratorContext.Provider
      value={{
        tuColor,
        setTuColor,
        // shelfHeight,
        // setshelfHeight,
        // shelfColor,
        // setShelfColor,
        // shelfDetph, 
        // setShelfDetph
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
