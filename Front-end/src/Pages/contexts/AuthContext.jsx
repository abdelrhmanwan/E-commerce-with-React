import { createContext, useContext, useEffect, useState } from "react";
import api, { setAuthToken } from "../../api/Api";
import { toast } from "react-hot-toast";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

const userData = localStorage.getItem("auth_user");

export function AuthProvider({ children }) {
  const [user, setUser] = useState(userData ? JSON.parse(userData) : null);

  useEffect(() => {
    if (user?.accessToken) {
      setAuthToken(user.accessToken);
    } else {
      setAuthToken(null);
    }
  }, [user]);

  const login = async (username, password) => {
    const res = await api.post("/auth/login", { username, password });
    const authData = {
      id: res.data.id,
      email: res.data.email,
      username: res.data.username,
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      accessToken: res.data.accessToken,
    };
    setUser(authData);
    localStorage.setItem("auth_user", JSON.stringify(authData));
    toast.success("Login successful");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    toast.info("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export default AuthContext;