import { useState } from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Card,
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  FileInput,
  rem,
  Stack,
  Modal,
  Flex,
} from "@mantine/core";
import {
  IconUpload,
  IconX,
  IconCheck,
  IconBrandTabler,
  IconArrowNarrowRight,
  IconArrowRight,
} from "@tabler/icons-react";
// import { useCreateArticleMutation } from '../store/apis/articlesApi';
import { categories } from "../data/mockData";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";

interface ArticleFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: File | null;
  tags: string;
}

function Dashboard() {
  //   const [createArticle, { isLoading }] = useCreateArticleMutation();
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState<ArticleFormData>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    coverImage: null,
    tags: "",
  });

  const handleInputChange = (
    field: keyof ArticleFormData,
    value: string | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      coverImage: null,
      tags: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.excerpt ||
      !formData.content ||
      !formData.category
    ) {
      notifications.show({
        title: "Error",
        message: "Please fill in all required fields",
        color: "red",
      });
      return;
    }

    try {
      // Convert tags string to array
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      // For now, we'll use a placeholder image URL since we can't actually upload files
      // In a real implementation, you'd upload the file and get back a URL
      const coverImageUrl = formData.coverImage
        ? URL.createObjectURL(formData.coverImage)
        : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop";

      //   await createArticle({
      //     title: formData.title,
      //     excerpt: formData.excerpt,
      //     content: formData.content,
      //     category: formData.category,
      //     coverImage: coverImageUrl,
      //     tags: tagsArray,
      //     featured: false, // Default to false
      //   }).unwrap();

      notifications.show({
        title: "Success",
        message: "Article created successfully!",
        color: "green",
      });

      handleClearForm();
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Failed to create article. Please try again.",
        color: "red",
      });
    }
  };

  return (
    <Box
      py={60}
      style={{
        backgroundColor: "var(--mantine-color-ivory-0)",
        minHeight: "100vh",
      }}
    >
      <Container size="lg">
        {/* Header */}
        <Box mb={50}>
          <Text
            size="sm"
            fw={600}
            c="bronze.6"
            tt="uppercase"
            mb="xs"
            style={{ letterSpacing: "0.1em" }}
          >
            Dashboard
          </Text>
          <Flex align="center" mb="md" gap="md">
            <Title
              order={1}
             
              style={{
                fontFamily: '"Crimson Pro", Georgia, serif',
                fontSize: rem(48),
              }}
            >
              Hello Ramy,
            </Title>
           <Button
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
              onClick={open}
            >
              Write an Article
            </Button>
          </Flex>
          <Text size="lg" c="slate.6" maw={600}>
            Share your philosophical insights and wisdom with our community.
          </Text>
        </Box>

        <Modal
          opened={opened}
          onClose={close}
          title="Create New Article"
          size="lg"
          styles={{
            header: {
              backgroundColor: 'var(--mantine-color-ivory-0)',
            },
            body: {
              backgroundColor: 'var(--mantine-color-ivory-0)',
            },
          }}
        >
          <Card
            shadow="md"
            padding="xl"
            radius="lg"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--mantine-color-slate-1)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack gap="lg">
                {/* Title Input */}
                <TextInput
                  label="Title"
                  placeholder="Enter article title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid var(--mantine-color-slate-2)',
                    },
                  }}
                  rightSection={
                    formData.title && (
                      <IconX
                        size={16}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleInputChange("title", "")}
                      />
                    )
                  }
                />

                {/* Subtitle Input */}
                <TextInput
                  label="Subtitle"
                  placeholder="Enter article subtitle or excerpt"
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  required
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid var(--mantine-color-slate-2)',
                    },
                  }}
                  rightSection={
                    formData.excerpt && (
                      <IconX
                        size={16}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleInputChange("excerpt", "")}
                      />
                    )
                  }
                />

                {/* Category Dropdown */}
                <Select
                  label="Category"
                  placeholder="Select a category"
                  data={categories}
                  value={formData.category}
                  onChange={(value) =>
                    handleInputChange("category", value || "")
                  }
                  required
                  size="md"
                  clearable
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid var(--mantine-color-slate-2)',
                    },
                  }}
                />

                {/* Tags Input */}
                <TextInput
                  label="Tags"
                  placeholder="Enter tags separated by commas"
                  value={formData.tags}
                  onChange={(e) => handleInputChange("tags", e.target.value)}
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid var(--mantine-color-slate-2)',
                    },
                  }}
                  rightSection={
                    formData.tags && (
                      <IconX
                        size={16}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleInputChange("tags", "")}
                      />
                    )
                  }
                />

                {/* Thumbnail Upload */}
                <FileInput
                  label="Thumbnail"
                  placeholder="Upload article thumbnail"
                  accept="image/*"
                  value={formData.coverImage}
                  onChange={(file) => handleInputChange("coverImage", file)}
                  size="md"
                  leftSection={<IconUpload size={16} />}
                  clearable
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid var(--mantine-color-slate-2)',
                    },
                  }}
                />

                {/* Content Textarea */}
                <Textarea
                  label="Content"
                  placeholder="Write your article content here..."
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  required
                  size="md"
                  minRows={10}
                  autosize
                  styles={{
                    input: {
                      backgroundColor: 'white',
                      border: '1px solid var(--mantine-color-slate-2)',
                    },
                  }}
                  rightSection={
                    formData.content && (
                      <IconX
                        size={16}
                        style={{
                          cursor: "pointer",
                          alignSelf: "flex-start",
                          marginTop: "8px",
                        }}
                        onClick={() => handleInputChange("content", "")}
                      />
                    )
                  }
                />

                {/* Action Buttons */}
                <Group justify="space-between" mt="xl">
                  <Button
                    variant="outline"
                    color="slate"
                    size="md"
                    onClick={handleClearForm}
                    leftSection={<IconX size={16} />}
                    styles={{
                      root: {
                        borderColor: 'var(--mantine-color-slate-3)',
                        color: 'var(--mantine-color-slate-7)',
                        '&:hover': {
                          backgroundColor: 'var(--mantine-color-slate-0)',
                        },
                      },
                    }}
                  >
                    Clear All Fields
                  </Button>

                  <Button
                    type="submit"
                    size="md"
                    //   loading={isLoading}
                    leftSection={<IconCheck size={16} />}
                    styles={{
                      root: {
                        backgroundColor: '#51841e',
                        borderColor: '#51841e',
                        '&:hover': {
                          backgroundColor: '#456e19',
                        },
                      },
                    }}
                  >
                    {/* {isLoading ? 'Publishing...' : 'Publish Article'} */}
                  </Button>
                </Group>
              </Stack>
            </form>
          </Card>
        </Modal>
      </Container>
    </Box>
  );
}

export default Dashboard;
