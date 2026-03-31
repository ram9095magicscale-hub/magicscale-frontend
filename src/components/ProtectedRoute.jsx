// // components/ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" />; // Optional
//   }

//   return children;
// };

// export default ProtectedRoute;












import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext/useAuth';

/**
 * ProtectedRoute component to secure routes that require authentication
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 * @param {Array<string>} [props.allowedRoles] - Optional roles allowed to access this route
 * @returns {React.ReactNode} - Either the protected component or redirect to login
 */
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // If user is not logged in
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If allowedRoles is specified, check if user has required role
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
      Access Denied. You do not have permission to view this page.
    </div>;
  }

  return children;
};

export default ProtectedRoute;
