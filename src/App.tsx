import { useState, useCallback, createContext, useContext } from 'react';
import { MantineProvider, AppShell, Burger, Group, UnstyledButton, Text, Box, Drawer, Stack, ActionIcon, Container, rem, Flex } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { IconSun, IconMoon, IconBook, IconMenu2 } from '@tabler/icons-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { theme } from './theme/theme';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import EbooksPage from './pages/EbooksPage';
import TutorialsPage from './pages/TutorialsPage';
import AboutPage from './pages/AboutPage';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './styles/app.css';
import { IconBrandTabler } from '@tabler/icons-react';
import { clsx } from 'clsx';
import Dashboard from './pages/Dashboard';

// Read mode context
interface ReadModeContextType {
  isReadMode: boolean;
  toggleReadMode: () => void;
}

export const ReadModeContext = createContext<ReadModeContextType>({
  isReadMode: false,
  toggleReadMode: () => {},
});

export const useReadMode = () => useContext(ReadModeContext);

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Articles', path: '/articles' },
  { label: 'Ebooks', path: '/ebooks' },
  { label: 'Tutorials', path: '/tutorials' },
  { label: 'About', path: '/about' },
  { label: 'Dashboard', path: '/dashboard' }, // needs guard. Admin only allowed
];

function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Box
        component="header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(254, 253, 251, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--mantine-color-slate-1)',
        }}
      >
        <Container size="xl">
          <Group justify="space-between" h={70}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Group gap="xs">
                <IconBook size={28} color="var(--mantine-color-bronze-6)" />
                <Text
                  size="xl"
                  fw={700}
                  style={{
                    fontFamily: '"Crimson Pro", Georgia, serif',
                    color: 'var(--mantine-color-slate-9)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Summit Path
                </Text>
              </Group>
            </Link>

            {!isMobile ? (
              <Group gap="lg">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
                    <Text
                      size="sm"
                      fw={500}
                      style={{
                        color: location.pathname === link.path 
                          ? 'var(--mantine-color-bronze-6)' 
                          : 'var(--mantine-color-slate-7)',
                        transition: 'color 200ms ease',
                      }}
                      className="nav-link"
                    >
                      <Flex gap={5} className={clsx(link.path === '/dashboard' && 'dashboardLink')} align="center" px={link.path === '/dashboard' ? 8 : 0} py={link.path === '/dashboard' ? 4 : 0}>
                        {link.label}
                        {link.path === '/dashboard' && <IconBrandTabler size={20} color="#c99a4a" />}
                      </Flex>
                    </Text>
                  </Link>
                ))}
              </Group>
            ) : (
              <ActionIcon
                variant="subtle"
                color="slate"
                size="lg"
                onClick={toggleDrawer}
                aria-label="Toggle navigation"
              >
                <IconMenu2 size={22} />
              </ActionIcon>
            )}
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="xl"
        title={
          <Group gap="xs">
            <IconBook size={24} color="var(--mantine-color-bronze-6)" />
            <Text fw={700} style={{ fontFamily: '"Crimson Pro", Georgia, serif' }}>
              Summit Path
            </Text>
          </Group>
        }
        styles={{
          body: { paddingTop: rem(40) },
        }}
      >
        <Stack gap="xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ textDecoration: 'none' }}
              onClick={closeDrawer}
            >
              <Text
                size="xl"
                fw={500}
                style={{
                  color: location.pathname === link.path 
                    ? 'var(--mantine-color-bronze-6)' 
                    : 'var(--mantine-color-slate-7)',
                }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      py="xl"
      style={{
        backgroundColor: 'var(--mantine-color-slate-9)',
        color: 'var(--mantine-color-ivory-2)',
      }}
    >
      <Container size="xl">
        <Group justify="space-between" wrap="wrap" gap="xl">
          <Box>
            <Group gap="xs" mb="sm">
              <IconBook size={24} color="var(--mantine-color-bronze-5)" />
              <Text
                size="lg"
                fw={700}
                style={{ fontFamily: '"Crimson Pro", Georgia, serif' }}
              >
                Summit Path
              </Text>
            </Group>
            <Text size="sm" c="dimmed" maw={300}>
              Exploring timeless wisdom for modern minds. Join our community of philosophical seekers.
            </Text>
          </Box>

          <Group gap={50} align="flex-start">
            <Box>
              <Text size="sm" fw={600} mb="sm" c="ivory.3">
                Explore
              </Text>
              <Stack gap="xs">
                <Link to="/articles" style={{ textDecoration: 'none' }}>
                  <Text size="sm" c="dimmed" className="footer-link">Articles</Text>
                </Link>
                <Link to="/ebooks" style={{ textDecoration: 'none' }}>
                  <Text size="sm" c="dimmed" className="footer-link">Ebooks</Text>
                </Link>
                <Link to="/tutorials" style={{ textDecoration: 'none' }}>
                  <Text size="sm" c="dimmed" className="footer-link">Tutorials</Text>
                </Link>
              </Stack>
            </Box>

            <Box>
              <Text size="sm" fw={600} mb="sm" c="ivory.3">
                Connect
              </Text>
              <Stack gap="xs">
                <Text size="sm" c="dimmed">Newsletter</Text>
                <Text size="sm" c="dimmed">Community</Text>
                <Text size="sm" c="dimmed">Discord</Text>
              </Stack>
            </Box>
          </Group>
        </Group>

        <Box mt="xl" pt="xl" style={{ borderTop: '1px solid var(--mantine-color-slate-7)' }}>
          <Text size="xs" c="dimmed" ta="center">
            © {new Date().getFullYear()} Summit Path. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

function AppContent() {
  const [isReadMode, setIsReadMode] = useState(false);

  const toggleReadMode = useCallback(() => {
    setIsReadMode(prev => !prev);
  }, []);

  return (
    <ReadModeContext.Provider value={{ isReadMode, toggleReadMode }}>
      <Box
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: isReadMode ? '#1a1a2e' : 'var(--mantine-color-ivory-0)',
          color: isReadMode ? '#e8e8e8' : 'var(--mantine-color-slate-9)',
          transition: 'all 0.4s ease',
        }}
      >
        <Header />
        <Box style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticleDetailPage />} />
            <Route path="/ebooks" element={<EbooksPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ReadModeContext.Provider>
  );
}

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
