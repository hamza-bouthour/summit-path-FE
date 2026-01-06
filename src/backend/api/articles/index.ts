// Articles API Types and Handlers
// These will be implemented with Lovable Cloud Edge Functions

import { Article, Author } from '../../../frontend/types';

export interface CreateArticleRequest {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export interface UpdateArticleRequest extends Partial<CreateArticleRequest> {
  id: string;
}

export interface ArticlesListResponse {
  articles: Article[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ArticleFilters {
  category?: string;
  author?: string;
  featured?: boolean;
  search?: string;
  page?: number;
  pageSize?: number;
}

// Placeholder for future Edge Function implementation
export const articleEndpoints = {
  /**
   * GET /api/articles
   * List all articles with optional filters
   */
  list: 'GET /api/articles',
  
  /**
   * GET /api/articles/:id
   * Get a single article by ID
   */
  get: 'GET /api/articles/:id',
  
  /**
   * POST /api/articles
   * Create a new article (admin only)
   */
  create: 'POST /api/articles',
  
  /**
   * PUT /api/articles/:id
   * Update an existing article (admin only)
   */
  update: 'PUT /api/articles/:id',
  
  /**
   * DELETE /api/articles/:id
   * Delete an article (admin only)
   */
  delete: 'DELETE /api/articles/:id',
};
