import { Box, Container, Title, Text, SimpleGrid, Card, Image, Badge, Avatar, Group, TextInput, Select, rem } from '@mantine/core';
import { IconSearch, IconClock } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { articles, categories } from '../data/mockData';

function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box py={60} style={{ backgroundColor: 'var(--mantine-color-ivory-0)', minHeight: '80vh' }}>
      <Container size="xl">
        {/* Header */}
        <Box mb={50}>
          <Text
            size="sm"
            fw={600}
            c="bronze.6"
            tt="uppercase"
            mb="xs"
            style={{ letterSpacing: '0.1em' }}
          >
            Articles
          </Text>
          <Title
            order={1}
            mb="md"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontSize: rem(48),
            }}
          >
            Philosophical Writings
          </Title>
          <Text size="lg" c="slate.6" maw={600}>
            Explore timeless wisdom through our collection of thoughtfully crafted articles 
            on philosophy, mindfulness, and the art of living well.
          </Text>
        </Box>

        {/* Filters */}
        <Group mb="xl" gap="md">
          <TextInput
            placeholder="Search articles..."
            leftSection={<IconSearch size={16} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            radius="md"
            style={{ flex: 1, maxWidth: 400 }}
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid var(--mantine-color-slate-2)',
              },
            }}
          />
          <Select
            placeholder="All Categories"
            data={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            clearable
            radius="md"
            w={200}
            styles={{
              input: {
                backgroundColor: 'white',
                border: '1px solid var(--mantine-color-slate-2)',
              },
            }}
          />
        </Group>

        {/* Articles Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {filteredArticles.map((article) => (
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

        {filteredArticles.length === 0 && (
          <Box ta="center" py={60}>
            <Text c="slate.5" size="lg">No articles found matching your criteria.</Text>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default ArticlesPage;
