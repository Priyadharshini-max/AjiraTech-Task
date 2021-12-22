import { createContext, useState } from "react";
export const mycontext = createContext();

export default function DataProvider({ children }) {
    const [User, changeUser] = useState("profile");

    return (
        <mycontext.Provider
            value={{
                User,
                changeUser
            }}>
            {children}
        </mycontext.Provider>

    )
}