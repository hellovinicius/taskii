import React, {createContext, ReactNode, useState} from 'react';

type PropsDateContext = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const DEFAULT_VALUE = {
  date: new Date(),
  setDate: () => {},
};

export const DateContext = createContext<PropsDateContext>(DEFAULT_VALUE);

export default function DateProvider({children}: {children: ReactNode}) {
  const [date, setDate] = useState(DEFAULT_VALUE.date);

  return (
    <DateContext.Provider
      value={{
        setDate: setDate,
        date: date,
      }}>
      {children}
    </DateContext.Provider>
  );
}
