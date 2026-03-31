





import { createContext, useState, useEffect } from 'react';
import { authAPI } from "../../../services/api";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user');
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsLoading(false);
        return;
      }

      // 🕒 Add 5s safety timeout to prevent stuck loader
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Auth check timed out")), 5000)
      );

      try {
        console.log("-> Initializing Auth verified check...");
        const userData = await Promise.race([
          authAPI.getProfile(),
          timeoutPromise
        ]);

        if (userData && (userData._id || userData.email)) {
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(userData));
          console.log("-> Auth check success.");
        }
      } catch (error) {
        console.error('Auth verification failed or timed out:', error.message);
        // We DO NOT call logout() here! api.js already handles 401 Unauthorized securely.
        // If it's just a timeout or a 500, we let the user stay "pseudo-authenticated" 
        // using their local storage data if possible.
      } finally {
        setIsLoading(false);
      }

    };

    verifyToken();
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    // Clear both user and token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Optionally notify server (if using server sessions)
    authAPI.logout?.(); // safe call if exists

    // Clear state
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
