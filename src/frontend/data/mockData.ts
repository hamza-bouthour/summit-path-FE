import { Article, Author, Ebook, Tutorial } from '../types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Marcus Aurelius Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    bio: 'Philosophy professor and modern Stoic practitioner',
  },
  {
    id: '2',
    name: 'Sophia Nkemdi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    bio: 'Author and existentialist thinker',
  },
  {
    id: '3',
    name: 'Lao Wei',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    bio: 'Eastern philosophy scholar and meditation teacher',
  },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Art of Stillness: Finding Peace in a Chaotic World',
    excerpt: 'In our hyperconnected age, the ancient practice of stillness offers a radical form of resistance against the tyranny of constant stimulation.',
    content: `
# The Art of Stillness: Finding Peace in a Chaotic World

In our hyperconnected age, the ancient practice of stillness offers a radical form of resistance against the tyranny of constant stimulation.

## The Paradox of Modern Life

We live in an age of unprecedented connectivity, yet we feel more disconnected than ever. Our devices promise to bring us closer together, but they often serve as barriers to genuine human connection.

> "The soul becomes dyed with the color of its thoughts." — Marcus Aurelius

The Stoics understood something fundamental about human nature: that our peace comes not from external circumstances, but from our internal disposition toward them.

## Practicing Stillness

To practice stillness is not to escape from life, but to engage with it more fully. Consider these approaches:

1. **Morning Contemplation**: Before reaching for your phone, spend five minutes in quiet reflection.
2. **Nature Immersion**: Regular time in natural settings recalibrates our nervous system.
3. **Digital Sabbath**: One day per week without screens restores our capacity for deep thought.

## The Path Forward

The journey toward stillness is not a destination but a practice. Each moment offers us the choice between reaction and response, between noise and silence, between chaos and peace.

As Seneca wrote, "It is not that we have a short time to live, but that we waste a lot of it."

The art of stillness invites us to reclaim that time—not through productivity hacks or efficiency tools, but through the radical act of simply being present.
    `,
    author: authors[0],
    category: 'Stoicism',
    readTime: 8,
    publishedAt: '2024-01-15',
    coverImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&h=400&fit=crop',
    featured: true,
    tags: ['stoicism', 'mindfulness', 'peace'],
  },
  {
    id: '2',
    title: 'Existential Freedom: The Weight and Gift of Choice',
    excerpt: 'Sartre declared that we are "condemned to be free." But what does it truly mean to embrace the radical responsibility of existence?',
    content: `
# Existential Freedom: The Weight and Gift of Choice

Sartre declared that we are "condemned to be free." But what does it truly mean to embrace the radical responsibility of existence?

## The Burden of Freedom

Freedom, in the existentialist sense, is not merely the absence of constraints. It is the recognition that at every moment, we are choosing who we become.

> "Man is nothing else but what he makes of himself." — Jean-Paul Sartre

This realization can be terrifying. Without predetermined essence, we face the abyss of infinite possibility.

## Authenticity and Bad Faith

To live authentically is to acknowledge our freedom fully. Bad faith—the denial of our freedom—takes many forms:

- Blaming circumstances for our choices
- Hiding behind social roles and expectations
- Refusing to acknowledge our power to change

## Creating Meaning

The absence of inherent meaning is not cause for despair. It is an invitation to become artists of our own existence, crafting meaning through our choices and commitments.
    `,
    author: authors[1],
    category: 'Existentialism',
    readTime: 10,
    publishedAt: '2024-01-10',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    featured: true,
    tags: ['existentialism', 'freedom', 'sartre'],
  },
  {
    id: '3',
    title: 'The Tao of Letting Go: Wu Wei in Daily Life',
    excerpt: 'The Taoist concept of wu wei—non-action—does not mean passivity. It means aligning with the natural flow of existence.',
    content: `
# The Tao of Letting Go: Wu Wei in Daily Life

The Taoist concept of wu wei—non-action—does not mean passivity. It means aligning with the natural flow of existence.

## Understanding Wu Wei

Wu wei is often translated as "non-doing" or "effortless action." But these translations miss the subtlety of this profound concept.

> "Nature does not hurry, yet everything is accomplished." — Lao Tzu

Wu wei is about acting in harmony with the Tao—the natural order of things.

## Applying Wu Wei

In practical terms, wu wei invites us to:

- Release our grip on outcomes
- Trust the process of life
- Act when action is needed, rest when rest is needed
- Let go of the illusion of control

## The Watercourse Way

Like water, we can learn to flow around obstacles rather than forcing our way through them. This is not weakness—water, over time, carves canyons through solid rock.
    `,
    author: authors[2],
    category: 'Taoism',
    readTime: 7,
    publishedAt: '2024-01-05',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    featured: false,
    tags: ['taoism', 'mindfulness', 'eastern philosophy'],
  },
  {
    id: '4',
    title: 'The Ethics of Care: Rethinking Moral Philosophy',
    excerpt: 'Beyond abstract principles, an ethics of care grounds morality in relationships and the concrete needs of others.',
    content: `
# The Ethics of Care: Rethinking Moral Philosophy

Traditional ethical theories often emphasize abstract principles and universal rules. The ethics of care offers a different approach—one grounded in relationships, empathy, and the concrete needs of particular others.

## Beyond Abstraction

Kant asked us to act according to universal maxims. Utilitarians calculate aggregate happiness. But these approaches can feel disconnected from the texture of our moral lives.

The ethics of care suggests that morality begins not with abstract reasoning, but with attentiveness to the needs of those around us.

## The Practice of Care

Caring is both a disposition and a practice. It involves:

- **Attentiveness**: Noticing the needs of others
- **Responsibility**: Feeling moved to respond
- **Competence**: Having the skill to care well
- **Responsiveness**: Being open to feedback

## Implications

An ethics of care has profound implications for how we structure society, from healthcare to education to economic policy.
    `,
    author: authors[1],
    category: 'Ethics',
    readTime: 9,
    publishedAt: '2024-01-01',
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop',
    featured: false,
    tags: ['ethics', 'care', 'relationships'],
  },
];

export const ebooks: Ebook[] = [
  {
    id: '1',
    title: 'Meditations for the Modern Stoic',
    author: authors[0],
    description: 'A contemporary guide to applying Stoic wisdom in the 21st century',
    price: 14.99,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
    pages: 256,
    category: 'Stoicism',
  },
  {
    id: '2',
    title: 'The Existentialist Handbook',
    author: authors[1],
    description: 'Understanding and embracing existentialist philosophy',
    price: 19.99,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
    pages: 312,
    category: 'Existentialism',
  },
  {
    id: '3',
    title: 'Tao Te Ching: A Modern Interpretation',
    author: authors[2],
    description: 'Ancient wisdom made accessible for contemporary seekers',
    price: 12.99,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
    pages: 192,
    category: 'Taoism',
  },
];

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Introduction to Stoic Philosophy',
    description: 'A comprehensive overview of Stoic principles and practices',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 45,
    category: 'Stoicism',
    instructor: authors[0],
  },
  {
    id: '2',
    title: 'Meditation Fundamentals',
    description: 'Learn the basics of meditation from various philosophical traditions',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 30,
    category: 'Mindfulness',
    instructor: authors[2],
  },
];

export const categories = [
  'Stoicism',
  'Existentialism',
  'Taoism',
  'Ethics',
  'Mindfulness',
  'Eastern Philosophy',
  'Western Philosophy',
  'Ancient Wisdom',
];
