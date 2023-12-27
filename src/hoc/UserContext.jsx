import { createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({ value, children }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
