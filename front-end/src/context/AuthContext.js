import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (credentials) => {
        // Your login logic here
        console.log('Logging in with:', credentials);
        setUser(credentials); // You might want to store user info in state
    };

    const logout = () => {
        setUser(null); // Clear user info on logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

