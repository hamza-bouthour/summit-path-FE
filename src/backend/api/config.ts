// API Configuration
// This file contains the base API configuration for connecting frontend to backend

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const apiConfig = {
  baseUrl: API_BASE_URL,
  endpoints: {
    // Auth
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    googleAuth: '/auth/google',
    facebookAuth: '/auth/facebook',
    me: '/auth/me',
    
    // Articles
    articles: '/articles',
    article: (id: string) => `/articles/${id}`,
    
    // Ebooks
    ebooks: '/ebooks',
    ebook: (id: string) => `/ebooks/${id}`,
    purchaseEbook: '/ebooks/purchase',
    
    // Tutorials
    tutorials: '/tutorials',
    tutorial: (id: string) => `/tutorials/${id}`,
    
    // Discussions
    discussions: '/discussions',
    discussion: (id: string) => `/discussions/${id}`,
    discussionReply: (id: string) => `/discussions/${id}/reply`,
    
    // Newsletter
    subscribe: '/newsletter/subscribe',
    unsubscribe: '/newsletter/unsubscribe',
    
    // Admin
    adminDashboard: '/admin/dashboard',
    adminUsers: '/admin/users',
    adminUserRole: (id: string) => `/admin/users/${id}/role`,
  },
};

// API Helper functions
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${apiConfig.baseUrl}${endpoint}`;
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  // Add auth token if available
  const token = localStorage.getItem('auth_token');
  if (token) {
    (defaultHeaders as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'API request failed');
  }
  
  return response.json();
}

// Convenience methods
export const api = {
  get: <T>(endpoint: string) => apiRequest<T>(endpoint, { method: 'GET' }),
  
  post: <T>(endpoint: string, data?: unknown) =>
    apiRequest<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),
  
  put: <T>(endpoint: string, data?: unknown) =>
    apiRequest<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),
  
  delete: <T>(endpoint: string) => apiRequest<T>(endpoint, { method: 'DELETE' }),
};

export default api;
