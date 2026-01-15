import { Box, Container, Title, Text, Badge, Avatar, Group, ActionIcon, Tooltip, Divider, rem } from '@mantine/core';
import { IconMoon, IconSun, IconClock, IconArrowLeft, IconShare, IconBookmark } from '@tabler/icons-react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useReadMode } from '../App';
import { articles } from '../data/mockData';
import ReactMarkdown from 'react-markdown';

function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { isReadMode, toggleReadMode } = useReadMode();
  
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <Box
      py={60}
      className="read-mode-transition"
      style={{
        backgroundColor: isReadMode ? '#1a1a2e' : 'var(--mantine-color-ivory-0)',
        minHeight: '100vh',
      }}
    >
      <Container size="md">
        {/* Back button and actions */}
        <Group justify="space-between" mb="xl">
          <Link to="/articles" style={{ textDecoration: 'none' }}>
            <Group gap="xs">
              <IconArrowLeft 
                size={18} 
                color={isReadMode ? '#a0a0a0' : 'var(--mantine-color-slate-6)'} 
              />
              <Text 
                size="sm" 
                c={isReadMode ? 'gray.5' : 'slate.6'}
              >
                Back to Articles
              </Text>
            </Group>
          </Link>

          <Group gap="sm">
            <Tooltip label="Share">
              <ActionIcon
                variant="subtle"
                size="lg"
                radius="md"
                color={isReadMode ? 'gray' : 'slate'}
              >
                <IconShare size={18} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Bookmark">
              <ActionIcon
                variant="subtle"
                size="lg"
                radius="md"
                color={isReadMode ? 'gray' : 'slate'}
              >
                <IconBookmark size={18} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label={isReadMode ? 'Light Mode' : 'Read Mode'}>
              <ActionIcon
                variant="light"
                size="lg"
                radius="md"
                color="bronze"
                onClick={toggleReadMode}
                styles={{
                  root: {
                    backgroundColor: isReadMode 
                      ? 'rgba(201, 154, 74, 0.2)' 
                      : 'var(--mantine-color-bronze-0)',
                  },
                }}
              >
                {isReadMode ? <IconSun size={18} /> : <IconMoon size={18} />}
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>

        {/* Article Header */}
        <Box mb="xl">
          <Badge
            color="bronze"
            variant={isReadMode ? 'filled' : 'light'}
            mb="lg"
            size="lg"
            styles={{
              root: isReadMode ? {
                backgroundColor: 'rgba(201, 154, 74, 0.3)',
                color: 'var(--mantine-color-bronze-3)',
              } : {},
            }}
          >
            {article.category}
          </Badge>

          <Title
            order={1}
            mb="lg"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.2,
              color: isReadMode ? '#e8e8e8' : 'var(--mantine-color-slate-9)',
            }}
          >
            {article.title}
          </Title>

          <Text
            size="xl"
            mb="xl"
            style={{
              color: isReadMode ? '#a0a0a0' : 'var(--mantine-color-slate-6)',
              lineHeight: 1.6,
            }}
          >
            {article.excerpt}
          </Text>

          <Group gap="lg">
            <Group gap="sm">
              <Avatar src={article.author.avatar} size="md" radius="xl" />
              <Box>
                <Text 
                  size="sm" 
                  fw={500}
                  c={isReadMode ? 'gray.3' : 'slate.8'}
                >
                  {article.author.name}
                </Text>
                <Text size="xs" c={isReadMode ? 'gray.6' : 'slate.5'}>
                  {article.author.bio}
                </Text>
              </Box>
            </Group>
            <Divider orientation="vertical" />
            <Group gap={4}>
              <IconClock size={14} color={isReadMode ? '#888' : 'var(--mantine-color-slate-5)'} />
              <Text size="sm" c={isReadMode ? 'gray.5' : 'slate.5'}>
                {article.readTime} min read
              </Text>
            </Group>
            <Text size="sm" c={isReadMode ? 'gray.6' : 'slate.5'}>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          </Group>
        </Box>

        <Divider 
          my="xl" 
          color={isReadMode ? 'dark.4' : 'slate.2'} 
        />

        {/* Article Content */}
        <Box
          className={`article-content ${isReadMode ? 'read-mode' : ''}`}
          style={{
            color: isReadMode ? '#e0e0e0' : 'var(--mantine-color-slate-8)',
            fontSize: rem(18),
          }}
        >
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </Box>

        {/* Tags */}
        <Group gap="xs" mt={60}>
          {article.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              color={isReadMode ? 'gray' : 'slate'}
              radius="md"
              size="lg"
              styles={{
                root: isReadMode ? {
                  borderColor: '#444',
                  color: '#999',
                } : {},
              }}
            >
              #{tag}
            </Badge>
          ))}
        </Group>
      </Container>
    </Box>
  );
}

export default ArticleDetailPage;
