import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [shelfColor, setShelfColor] = useState("#1e1e1e");
  const [shelfWidth, setShelfWidth] = useState(60);
  const [shelfHeight, setshelfHeight] = useState(150);
  // const [legs, setLegs] = useState(0);
  // const [legsColor, setLegsColor] = useState("#777777");
  // const [tableWidth, setTableWidth] = useState(100);
  // const [tableThickness, settableThickness] = useState(10);
  // const [plateColor, setPlateColor] = useState("#ECECEC");

  return (
    <ConfiguratorContext.Provider
      value={{
        // legs,
        // setLegs,
        // legsColor,
        // setLegsColor,
        shelfWidth,
        setShelfWidth,
        shelfHeight,
        setshelfHeight,
        // setTableWidth,
        shelfColor,
        setShelfColor,
        // tableThickness, 
        // settableThickness,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
