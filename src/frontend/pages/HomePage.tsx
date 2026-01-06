import { Box, Container, Title, Text, Button, Group, Stack, TextInput, Card, Image, Badge, Avatar, SimpleGrid, rem } from '@mantine/core';
import { IconArrowRight, IconClock, IconMail, IconPlayerPlay, IconBook } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { articles, ebooks, tutorials } from '../data/mockData';
import heroImage from '../../assets/hero-philosophy.jpg';

function HeroSection() {
  return (
    <Box
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <Box
        className="hero-gradient"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        <Box maw={700}>
          <Badge
            size="lg"
            variant="light"
            color="bronze"
            mb="lg"
            className="fade-in"
            styles={{
              root: {
                backgroundColor: 'rgba(201, 154, 74, 0.2)',
                color: 'var(--mantine-color-bronze-3)',
              },
            }}
          >
            Philosophical Exploration
          </Badge>
          
          <Title
            order={1}
            className="fade-in-delay-1"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: 1.1,
              color: 'var(--mantine-color-ivory-1)',
              marginBottom: rem(24),
            }}
          >
            Discover the wisdom that shapes humanity
          </Title>
          
          <Text
            size="xl"
            className="fade-in-delay-2"
            style={{
              color: 'var(--mantine-color-ivory-3)',
              lineHeight: 1.6,
              marginBottom: rem(40),
            }}
          >
            Explore timeless philosophical teachings, from Stoicism to Eastern wisdom. 
            Join a community dedicated to the pursuit of knowledge and inner peace.
          </Text>

          <Group gap="md" className="fade-in-delay-3">
            <Button
              component={Link}
              to="/articles"
              size="lg"
              color="bronze"
              radius="md"
              rightSection={<IconArrowRight size={18} />}
              className="btn-glow"
              styles={{
                root: {
                  backgroundColor: 'var(--mantine-color-bronze-5)',
                  '&:hover': {
                    backgroundColor: 'var(--mantine-color-bronze-6)',
                  },
                },
              }}
            >
              Start Reading
            </Button>
            <Button
              component={Link}
              to="/tutorials"
              size="lg"
              variant="outline"
              radius="md"
              leftSection={<IconPlayerPlay size={18} />}
              styles={{
                root: {
                  borderColor: 'var(--mantine-color-ivory-4)',
                  color: 'var(--mantine-color-ivory-2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'var(--mantine-color-ivory-2)',
                  },
                },
              }}
            >
              Watch Tutorials
            </Button>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}

function FeaturedArticles() {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  return (
    <Box py={80} style={{ backgroundColor: 'var(--mantine-color-ivory-0)' }}>
      <Container size="xl">
        <Group justify="space-between" align="flex-end" mb="xl">
          <Box>
            <Text
              size="sm"
              fw={600}
              c="bronze.6"
              tt="uppercase"
              mb="xs"
              style={{ letterSpacing: '0.1em' }}
            >
              Featured
            </Text>
            <Title
              order={2}
              style={{
                fontFamily: '"Crimson Pro", Georgia, serif',
                fontSize: rem(36),
              }}
            >
              Latest Philosophical Insights
            </Title>
          </Box>
          <Button
            component={Link}
            to="/articles"
            variant="subtle"
            color="slate"
            rightSection={<IconArrowRight size={16} />}
          >
            View All
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {featuredArticles.map((article) => (
            <Card
              key={article.id}
              padding="lg"
              radius="lg"
              className="article-card"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--mantine-color-slate-1)',
              }}
            >
              <Card.Section>
                <Image
                  src={article.coverImage}
                  height={200}
                  alt={article.title}
                />
              </Card.Section>

              <Badge
                color="bronze"
                variant="light"
                mt="md"
                className="category-badge"
              >
                {article.category}
              </Badge>

              <Title
                order={3}
                mt="md"
                mb="sm"
                style={{
                  fontFamily: '"Crimson Pro", Georgia, serif',
                  fontSize: rem(22),
                  lineHeight: 1.3,
                }}
              >
                <Link
                  to={`/articles/${article.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {article.title}
                </Link>
              </Title>

              <Text size="sm" c="slate.6" lineClamp={3} mb="md">
                {article.excerpt}
              </Text>

              <Group justify="space-between" mt="auto">
                <Group gap="xs">
                  <Avatar src={article.author.avatar} size="sm" radius="xl" />
                  <Text size="sm" c="slate.7">{article.author.name}</Text>
                </Group>
                <Group gap={4}>
                  <IconClock size={14} color="var(--mantine-color-slate-5)" />
                  <Text size="xs" c="slate.5">{article.readTime} min</Text>
                </Group>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function NewsletterSection() {
  return (
    <Box
      py={100}
      style={{
        background: 'linear-gradient(135deg, var(--mantine-color-slate-8) 0%, var(--mantine-color-slate-9) 100%)',
      }}
    >
      <Container size="sm" ta="center">
        <IconMail size={48} color="var(--mantine-color-bronze-5)" style={{ marginBottom: rem(24) }} />
        
        <Title
          order={2}
          mb="sm"
          style={{
            fontFamily: '"Crimson Pro", Georgia, serif',
            fontSize: rem(36),
            color: 'var(--mantine-color-ivory-1)',
          }}
        >
          Join Our Philosophical Journey
        </Title>
        
        <Text size="lg" c="ivory.4" mb="xl" maw={500} mx="auto">
          Receive weekly insights, exclusive articles, and meditation guides 
          directly in your inbox.
        </Text>

        <Group gap="sm" justify="center" maw={450} mx="auto">
          <TextInput
            placeholder="Enter your email"
            size="lg"
            radius="md"
            className="newsletter-input"
            style={{ flex: 1 }}
            styles={{
              input: {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid var(--mantine-color-slate-6)',
                color: 'var(--mantine-color-ivory-2)',
                '&::placeholder': {
                  color: 'var(--mantine-color-slate-4)',
                },
              },
            }}
          />
          <Button
            size="lg"
            color="bronze"
            radius="md"
            className="btn-glow"
            styles={{
              root: {
                backgroundColor: 'var(--mantine-color-bronze-5)',
              },
            }}
          >
            Subscribe
          </Button>
        </Group>

        <Text size="xs" c="slate.5" mt="md">
          No spam, ever. Unsubscribe anytime.
        </Text>
      </Container>
    </Box>
  );
}

function EbooksPreview() {
  return (
    <Box py={80} style={{ backgroundColor: 'var(--mantine-color-ivory-1)' }}>
      <Container size="xl">
        <Group justify="space-between" align="flex-end" mb="xl">
          <Box>
            <Text
              size="sm"
              fw={600}
              c="bronze.6"
              tt="uppercase"
              mb="xs"
              style={{ letterSpacing: '0.1em' }}
            >
              Library
            </Text>
            <Title
              order={2}
              style={{
                fontFamily: '"Crimson Pro", Georgia, serif',
                fontSize: rem(36),
              }}
            >
              Essential Readings
            </Title>
          </Box>
          <Button
            component={Link}
            to="/ebooks"
            variant="subtle"
            color="slate"
            rightSection={<IconArrowRight size={16} />}
          >
            Browse All
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {ebooks.map((book) => (
            <Card
              key={book.id}
              padding="lg"
              radius="lg"
              className="article-card"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--mantine-color-slate-1)',
              }}
            >
              <Group align="flex-start" gap="lg">
                <Image
                  src={book.coverImage}
                  w={100}
                  h={140}
                  radius="md"
                  alt={book.title}
                  style={{ objectFit: 'cover' }}
                />
                <Box style={{ flex: 1 }}>
                  <Badge color="sage" variant="light" mb="xs">
                    {book.category}
                  </Badge>
                  <Title
                    order={4}
                    mb="xs"
                    style={{ fontFamily: '"Crimson Pro", Georgia, serif' }}
                  >
                    {book.title}
                  </Title>
                  <Text size="sm" c="slate.6" mb="sm">
                    by {book.author.name}
                  </Text>
                  <Group gap="xs">
                    <IconBook size={14} color="var(--mantine-color-slate-5)" />
                    <Text size="xs" c="slate.5">{book.pages} pages</Text>
                  </Group>
                  <Text fw={600} c="bronze.7" mt="sm">
                    ${book.price.toFixed(2)}
                  </Text>
                </Box>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function HomePage() {
  return (
    <Box>
      <HeroSection />
      <FeaturedArticles />
      <EbooksPreview />
      <NewsletterSection />
    </Box>
  );
}

export default HomePage;
