// Authentication API Types and Handlers
// These will be implemented with Lovable Cloud Edge Functions

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
  };
  token: string;
}

export interface OAuthConfig {
  provider: 'google' | 'facebook';
  redirectUrl: string;
}

// Placeholder for future Edge Function implementation
export const authEndpoints = {
  /**
   * POST /api/auth/register
   * Register a new user with email and password
   */
  register: 'POST /api/auth/register',
  
  /**
   * POST /api/auth/login
   * Login with email and password
   */
  login: 'POST /api/auth/login',
  
  /**
   * POST /api/auth/google
   * Initiate Google OAuth flow
   */
  googleAuth: 'POST /api/auth/google',
  
  /**
   * POST /api/auth/facebook
   * Initiate Facebook OAuth flow
   */
  facebookAuth: 'POST /api/auth/facebook',
  
  /**
   * POST /api/auth/logout
   * Logout current user
   */
  logout: 'POST /api/auth/logout',
  
  /**
   * GET /api/auth/me
   * Get current authenticated user
   */
  me: 'GET /api/auth/me',
};
