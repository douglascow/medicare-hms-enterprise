import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";

import api from "../api/axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {

        const { data } = await api.post("/auth/login", {
            email,
            password
        });

        localStorage.setItem("token", data.token);

        setUser(data.user);

        return data;
    };

    const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
        };

    useEffect(() => {

        async function loadUser() {

            const token = localStorage.getItem("token");

            if (!token) {

                setLoading(false);

                return;
            }

            try {

                const { data } = await api.get("/auth/me");

                setUser(data.user);

            } catch {

                localStorage.removeItem("token");

                setUser(null);

            } finally {

                setLoading(false);

            }

        }

        loadUser();

    }, []);

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}