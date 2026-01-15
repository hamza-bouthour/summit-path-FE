import { Box, Container, Title, Text, SimpleGrid, Card, Image, Badge, Group, Button, rem } from '@mantine/core';
import { IconBook, IconShoppingCart } from '@tabler/icons-react';
import { ebooks } from '../data/mockData';

function EbooksPage() {
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
            Library
          </Text>
          <Title
            order={1}
            mb="md"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontSize: rem(48),
            }}
          >
            Essential Ebooks
          </Title>
          <Text size="lg" c="slate.6" maw={600}>
            Curated philosophical texts and contemporary explorations of timeless wisdom. 
            Download and start your journey today.
          </Text>
        </Box>

        {/* Ebooks Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {ebooks.map((book) => (
            <Card
              key={book.id}
              padding="xl"
              radius="lg"
              className="article-card"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--mantine-color-slate-1)',
              }}
            >
              <Box ta="center" mb="lg">
                <Image
                  src={book.coverImage}
                  h={280}
                  w="auto"
                  mx="auto"
                  radius="md"
                  alt={book.title}
                  style={{
                    objectFit: 'cover',
                    boxShadow: '0 8px 24px rgba(61, 79, 102, 0.15)',
                  }}
                />
              </Box>

              <Badge color="sage" variant="light" mb="md">
                {book.category}
              </Badge>

              <Title
                order={3}
                mb="xs"
                style={{
                  fontFamily: '"Crimson Pro", Georgia, serif',
                  fontSize: rem(24),
                }}
              >
                {book.title}
              </Title>

              <Text size="sm" c="slate.6" mb="xs">
                by {book.author.name}
              </Text>

              <Text size="sm" c="slate.5" mb="md" lineClamp={3}>
                {book.description}
              </Text>

              <Group gap="xs" mb="lg">
                <IconBook size={14} color="var(--mantine-color-slate-5)" />
                <Text size="xs" c="slate.5">{book.pages} pages</Text>
              </Group>

              <Group justify="space-between" align="center">
                <Text
                  size="xl"
                  fw={700}
                  style={{
                    color: 'var(--mantine-color-bronze-7)',
                    fontFamily: '"Crimson Pro", Georgia, serif',
                  }}
                >
                  ${book.price.toFixed(2)}
                </Text>
                <Button
                  color="bronze"
                  radius="md"
                  leftSection={<IconShoppingCart size={16} />}
                  styles={{
                    root: {
                      backgroundColor: 'var(--mantine-color-bronze-6)',
                    },
                  }}
                >
                  Purchase
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default EbooksPage;
