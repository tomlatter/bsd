import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from './Footer'

const logo = `${import.meta.env.BASE_URL}img/logo_noir.png`;

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Origines', path: '/origines' },
  { label: 'Cours', path: '/cours' },
  { label: 'Techniques', path: '/techniques' },
  { label: 'Niveaux', path: '/niveaux' },
  { label: 'Sagesse', path: '/sagesse' },
  { label: 'Photos', path: '/photos' },
]

export default function Layout() {
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
    {/* Background image layer */}
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        // backgroundImage: 'url(img/foret.png)',
        backgroundColor: {xs: 'white', sm: '#ffefd3'},
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.2,
        pointerEvents: 'none',
      }}
    />
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          bgcolor: 'black',
          color: 'white',
        }}
      >
       <Toolbar
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    position: 'relative',
    px: 2,
  }}
>
  {isMobile && (
    <IconButton
      edge="start"
      color="inherit"
      onClick={handleDrawerToggle}
      sx={{ position: 'absolute', left: 24 }}
    >
      <MenuIcon />
    </IconButton>
  )}

  {isMobile && (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontWeight: 600,
        fontSize: '1.2rem',
        fontFamily: 'Montserrat',
      }}
    >
      {
        navItems.find((item) => item.path === location.pathname)?.label ??
        'Bâton-Self'
      }
    </Box>
  )}

  {isMobile && (
    <Box
      component="img"
      src={logo}
      alt="Logo"
      sx={{
        position: 'absolute',
        right: 14,
        height: 46,
      }}
    />
  )}

  {!isMobile && (
    <>
      <Box
        component="img"
        src={logo}
        alt="Bâton-Self Logo"
        sx={{
          height: 46,
          position: 'absolute',
          left: 20
        }}
      />
      <Box>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              mx: 1,
              fontSize: '1.1rem',
              borderRadius: 999,
              bgcolor: location.pathname === item.path ? 'primary.main' : 'transparent',
              color: location.pathname === item.path ? 'primary.contrastText' : 'inherit',
              px: 2,
              py: 0.5,
              '&:hover': {
                bgcolor: location.pathname === item.path ? 'primary.light' : 'action.hover'
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </>
  )}
</Toolbar>

      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250, mt: 2 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
            >
              {item.label}
            </MenuItem>
          ))}
        </Box>
      </Drawer>

      <Container sx={{ py: 4 }}>
        <Outlet />
      </Container>
      <Footer />
  </Box>
  )
}
