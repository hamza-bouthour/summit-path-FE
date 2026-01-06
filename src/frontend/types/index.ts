export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  readTime: number;
  publishedAt: string;
  coverImage: string;
  featured: boolean;
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Ebook {
  id: string;
  title: string;
  author: Author;
  description: string;
  price: number;
  coverImage: string;
  pages: number;
  category: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  category: string;
  instructor: Author;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
}

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  replies: DiscussionReply[];
  category: string;
}

export interface DiscussionReply {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}
