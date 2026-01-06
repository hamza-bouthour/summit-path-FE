import { Box, Container, Title, Text, Group, Avatar, SimpleGrid, Card, rem } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import { authors } from '../data/mockData';

function AboutPage() {
  return (
    <Box py={60} style={{ backgroundColor: 'var(--mantine-color-ivory-0)', minHeight: '80vh' }}>
      <Container size="lg">
        {/* Header */}
        <Box mb={60} ta="center">
          <Text
            size="sm"
            fw={600}
            c="bronze.6"
            tt="uppercase"
            mb="xs"
            style={{ letterSpacing: '0.1em' }}
          >
            About
          </Text>
          <Title
            order={1}
            mb="lg"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontSize: rem(48),
            }}
          >
            Our Philosophy
          </Title>
          <Text size="lg" c="slate.6" maw={700} mx="auto">
            Summit Path is a sanctuary for seekers of wisdom. We believe that ancient philosophical 
            traditions hold profound insights for navigating the complexities of modern life.
          </Text>
        </Box>

        {/* Quote */}
        <Card
          padding="xl"
          radius="lg"
          mb={60}
          style={{
            backgroundColor: 'var(--mantine-color-slate-9)',
            textAlign: 'center',
          }}
        >
          <IconQuote size={40} color="var(--mantine-color-bronze-5)" style={{ marginBottom: rem(16) }} />
          <Text
            size="xl"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontStyle: 'italic',
              color: 'var(--mantine-color-ivory-2)',
              lineHeight: 1.6,
            }}
            maw={600}
            mx="auto"
            mb="md"
          >
            "The unexamined life is not worth living."
          </Text>
          <Text size="sm" c="bronze.4" fw={500}>
            — Socrates
          </Text>
        </Card>

        {/* Mission */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mb={60}>
          <Box>
            <Title
              order={3}
              mb="md"
              style={{
                fontFamily: '"Crimson Pro", Georgia, serif',
                fontSize: rem(28),
              }}
            >
              Our Mission
            </Title>
            <Text size="md" c="slate.7" lh={1.8}>
              We curate and create content that bridges the gap between ancient wisdom 
              and contemporary challenges. Our articles, ebooks, and tutorials are designed 
              to be accessible to beginners while offering depth for serious students of philosophy.
            </Text>
          </Box>
          <Box>
            <Title
              order={3}
              mb="md"
              style={{
                fontFamily: '"Crimson Pro", Georgia, serif',
                fontSize: rem(28),
              }}
            >
              Our Community
            </Title>
            <Text size="md" c="slate.7" lh={1.8}>
              Summit Path is more than a publication—it's a community of thoughtful individuals 
              committed to personal growth and the pursuit of wisdom. Join our discussions, 
              attend our events, and connect with fellow seekers from around the world.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Authors */}
        <Box>
          <Title
            order={2}
            mb="xl"
            ta="center"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontSize: rem(36),
            }}
          >
            Our Contributors
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {authors.map((author) => (
              <Card
                key={author.id}
                padding="xl"
                radius="lg"
                ta="center"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--mantine-color-slate-1)',
                }}
              >
                <Avatar
                  src={author.avatar}
                  size={100}
                  radius={100}
                  mx="auto"
                  mb="md"
                  style={{
                    border: '4px solid var(--mantine-color-bronze-2)',
                  }}
                />
                <Title
                  order={4}
                  mb="xs"
                  style={{ fontFamily: '"Crimson Pro", Georgia, serif' }}
                >
                  {author.name}
                </Title>
                <Text size="sm" c="slate.6">
                  {author.bio}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutPage;
