// /**
//  * API service for making authenticated requests
//  * This centralizes all API calls and handles token management
//  */

// const API_URL = 'http://localhost:3000/api';

// /**
//  * Make an authenticated API request
//  * @param {string} endpoint - API endpoint (without base URL)
//  * @param {Object} options - Fetch options (method, body, etc.)
//  * @returns {Promise} - Fetch promise
//  */
// export const apiRequest = async (endpoint, options = {}) => {
//   // Get token from localStorage
//   const token = localStorage.getItem('token');
  
//   // Set default headers
//   const headers = {
//     'Content-Type': 'application/json',
//     ...options.headers,
//   };
  
//   // Add authorization header if token exists
//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }
  
//   // Build request URL
//   const url = `${API_URL}${endpoint}`;
  
//   // Make the request
//   try {
//     const response = await fetch(url, {
//       ...options,
//       headers,
//     });
    
//     // Parse JSON response
//     const data = await response.json();
    
//     // If response is not ok, throw error
//     if (!response.ok) {
//       // Handle token expiration
//       if (response.status === 401) {
//         // Clear token and user data if unauthorized
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         // Redirect to login if needed
//         if (window.location.pathname !== '/login') {
//           window.location.href = '/login';
//         }
//       }
      
//       throw new Error(data.message || 'Something went wrong');
//     }
    
//     return data;
//   } catch (error) {
//     console.error('API request error:', error);
//     throw error;
//   }
// };

// /**
//  * Auth-related API calls
//  */
// export const authAPI = {
//   login: async (credentials) => {
//     const response = await fetch(`${API_URL}/auth/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(credentials),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Login failed');
//     }
    
//     // Store token and user data
//     if (data.token) localStorage.setItem('token', data.token);
//     if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
    
//     return data;
//   },
  
//   register: async (userData) => {
//     const response = await fetch(`${API_URL}/auth/register`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(userData),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Registration failed');
//     }
    
//     return data;
//   },
  
//   logout: () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   },
  
//   checkToken: async () => {
//     return apiRequest('/auth/check-token');
//   },
  
//   getProfile: async () => {
//     return apiRequest('/auth/profile');
//   }
// };

// /**
//  * Protected API calls for sellers
//  */
// export const sellerAPI = {
//   uploadFood: async (foodData) => {
//     return apiRequest('/seller/upload', {
//       method: 'POST',
//       body: JSON.stringify(foodData),
//     });
//   },
  
//   getSellerDashboard: async () => {
//     return apiRequest('/seller-only');
//   }
// };

// /**
//  * Protected API calls for general users
//  */
// export const userAPI = {
//   getProtectedData: async () => {
//     return apiRequest('/protected');
//   }
// };

// export default {
//   apiRequest,
//   authAPI,
//   sellerAPI,
//   userAPI
// };














/**
 * API service for making authenticated requests
 * This centralizes all API calls and handles token management
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Make an authenticated API request
 * @param {string} endpoint - API endpoint (e.g., '/user/profile')
 * @param {Object} options - Fetch options (method, headers, body)
 * @returns {Promise} - Resolved response data or thrown error
 */
export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');

  const headers = {
    ...options.headers,
  };

  if (!headers['Content-Type'] && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
      throw new Error(data.message || 'API error');
    }

    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};











/**
 * Auth-related API calls
 */
export const authAPI = {
  login: async (credentials) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Login failed');

    if (data.token) localStorage.setItem('token', data.token);
    if (data.user) localStorage.setItem('user', JSON.stringify(data.user));

    return data;
  },

  register: async (userData) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Registration failed');

    return data;
  },

  verifyOTP: async (verifyData) => {
    return apiRequest('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify(verifyData),
    });
  },

  resendOTP: async (emailData) => {
    return apiRequest('/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify(emailData),
    });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  checkToken: async () => {
    return apiRequest('/user/profile'); // ✅ validate token via profile fetch
  },

  getProfile: async () => {
    return apiRequest('/user/profile');
  },
};






export const sellerAPI = {
  uploadFood: async (foodData) => {
    return apiRequest('/seller/upload', {
      method: 'POST',
      body: JSON.stringify(foodData),
    });
  },

  getSellerDashboard: async () => {
    return apiRequest('/seller-only');
  },
};




export const userAPI = {
  getProtectedData: async () => {
    return apiRequest('/protected');
  },
};

export const contactAPI = {
  submitMessage: async (formData) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};






export default {
  apiRequest,
  authAPI,
  sellerAPI,
  userAPI,
  contactAPI,
};
