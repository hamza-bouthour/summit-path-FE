import { Box, Container, Title, Text, SimpleGrid, Card, Badge, Avatar, Group, AspectRatio, rem } from '@mantine/core';
import { IconClock, IconPlayerPlay } from '@tabler/icons-react';
import { tutorials } from '../data/mockData';

function TutorialsPage() {
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
            Learn
          </Text>
          <Title
            order={1}
            mb="md"
            style={{
              fontFamily: '"Crimson Pro", Georgia, serif',
              fontSize: rem(48),
            }}
          >
            Video Tutorials
          </Title>
          <Text size="lg" c="slate.6" maw={600}>
            Guided lessons on philosophy, meditation, and contemplative practices. 
            Learn from expert instructors at your own pace.
          </Text>
        </Box>

        {/* Tutorials Grid */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              padding={0}
              radius="lg"
              className="article-card"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--mantine-color-slate-1)',
                overflow: 'hidden',
              }}
            >
              <AspectRatio ratio={16 / 9}>
                <Box
                  style={{
                    position: 'relative',
                    backgroundColor: 'var(--mantine-color-slate-8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201, 154, 74, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 200ms ease, background-color 200ms ease',
                    }}
                    className="play-button"
                  >
                    <IconPlayerPlay size={32} color="white" style={{ marginLeft: 4 }} />
                  </Box>
                </Box>
              </AspectRatio>

              <Box p="lg">
                <Group justify="space-between" mb="sm">
                  <Badge color="slate" variant="light">
                    {tutorial.category}
                  </Badge>
                  <Group gap={4}>
                    <IconClock size={14} color="var(--mantine-color-slate-5)" />
                    <Text size="xs" c="slate.5">{tutorial.duration} min</Text>
                  </Group>
                </Group>

                <Title
                  order={3}
                  mb="sm"
                  style={{
                    fontFamily: '"Crimson Pro", Georgia, serif',
                    fontSize: rem(24),
                  }}
                >
                  {tutorial.title}
                </Title>

                <Text size="sm" c="slate.6" mb="lg">
                  {tutorial.description}
                </Text>

                <Group gap="sm">
                  <Avatar src={tutorial.instructor.avatar} size="sm" radius="xl" />
                  <Box>
                    <Text size="sm" fw={500} c="slate.8">
                      {tutorial.instructor.name}
                    </Text>
                    <Text size="xs" c="slate.5">
                      Instructor
                    </Text>
                  </Box>
                </Group>
              </Box>
            </Card>
          ))}
        </SimpleGrid>

        {tutorials.length === 0 && (
          <Box ta="center" py={60}>
            <Text c="slate.5" size="lg">More tutorials coming soon.</Text>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default TutorialsPage;
