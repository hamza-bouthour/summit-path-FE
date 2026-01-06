// Admin API Types and Handlers
// These will be implemented with Lovable Cloud Edge Functions

export interface DashboardStats {
  totalUsers: number;
  totalArticles: number;
  totalEbooks: number;
  totalTutorials: number;
  newsletterSubscribers: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'article_published' | 'user_registered' | 'ebook_purchased' | 'discussion_created';
  description: string;
  timestamp: string;
  userId?: string;
}

export interface UserListItem {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
  lastActive?: string;
}

export interface UpdateUserRoleRequest {
  userId: string;
  role: 'user' | 'admin';
}

// Placeholder for future Edge Function implementation
export const adminEndpoints = {
  /**
   * GET /api/admin/dashboard
   * Get dashboard statistics (admin only)
   */
  dashboard: 'GET /api/admin/dashboard',
  
  /**
   * GET /api/admin/users
   * List all users (admin only)
   */
  users: 'GET /api/admin/users',
  
  /**
   * PUT /api/admin/users/:id/role
   * Update a user's role (admin only)
   */
  updateRole: 'PUT /api/admin/users/:id/role',
  
  /**
   * GET /api/admin/analytics
   * Get site analytics (admin only)
   */
  analytics: 'GET /api/admin/analytics',
};
