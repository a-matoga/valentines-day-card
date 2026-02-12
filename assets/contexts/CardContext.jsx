import { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState(null);

  const clearCardData = () => {
    setCardData(null);
  };

  return (
    <CardContext.Provider value={{ cardData, setCardData, clearCardData }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCard musi być używany wewnątrz CardProvider");
  }

  return context;
};
