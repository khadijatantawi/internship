import { createContext, useState } from "react";

const AuthContext = createContext({});

//children represent the components that are inside of the author provider 
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;