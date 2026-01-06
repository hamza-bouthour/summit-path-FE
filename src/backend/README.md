# Backend API Documentation

This folder contains the backend API structure for Summit Path.

## Structure

```
backend/
├── api/
│   ├── auth/           # Authentication endpoints
│   ├── articles/       # Article CRUD operations
│   ├── ebooks/         # Ebook management & purchases
│   ├── tutorials/      # Tutorial management
│   ├── discussions/    # Community discussions
│   ├── newsletter/     # Newsletter subscriptions
│   └── admin/          # Admin operations
├── middleware/         # Auth, validation middleware
├── models/             # Data models/schemas
└── utils/              # Helper functions
```

## API Endpoints (Planned)

### Authentication
- `POST /api/auth/register` - Register with email
- `POST /api/auth/login` - Login
- `POST /api/auth/google` - Google OAuth
- `POST /api/auth/facebook` - Facebook OAuth
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### Articles
- `GET /api/articles` - List articles
- `GET /api/articles/:id` - Get article
- `POST /api/articles` - Create article (admin)
- `PUT /api/articles/:id` - Update article (admin)
- `DELETE /api/articles/:id` - Delete article (admin)

### Ebooks
- `GET /api/ebooks` - List ebooks
- `GET /api/ebooks/:id` - Get ebook
- `POST /api/ebooks/purchase` - Purchase ebook
- `POST /api/ebooks` - Create ebook (admin)
- `PUT /api/ebooks/:id` - Update ebook (admin)
- `DELETE /api/ebooks/:id` - Delete ebook (admin)

### Tutorials
- `GET /api/tutorials` - List tutorials
- `GET /api/tutorials/:id` - Get tutorial
- `POST /api/tutorials` - Create tutorial (admin)
- `PUT /api/tutorials/:id` - Update tutorial (admin)
- `DELETE /api/tutorials/:id` - Delete tutorial (admin)

### Discussions
- `GET /api/discussions` - List discussions
- `GET /api/discussions/:id` - Get discussion with replies
- `POST /api/discussions` - Create discussion
- `POST /api/discussions/:id/reply` - Reply to discussion
- `DELETE /api/discussions/:id` - Delete discussion (admin/author)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe
- `POST /api/newsletter/unsubscribe` - Unsubscribe

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/users` - List users
- `PUT /api/admin/users/:id/role` - Update user role

## Implementation Note

To implement this backend with real functionality, enable Lovable Cloud which provides:
- PostgreSQL database
- Authentication system
- File storage
- Edge functions for server-side logic
