import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const cards = [
  {
    title: 'Histoire',
    description: 'Découvrez les origines du Bâton de Combat. Self-Défense et de son fondateur.',
    path: '/histoire',
    image: '/img/histoire.jpg',
  },
  {
    title: 'Approches',
    description: 'Le B.S-D est actuellement enseigné à Toulouse. Découvrez le site web du club!',
    path: '/approches',
    image: '/img/cours.jpg',
  },
  {
    title: 'Techniques',
    description: 'Approche moderne des techniques de défense à mains nues et au bâton.',
    path: '/techniques',
    image: '/img/techniques.jpg',
  },
  {
    title: 'Niveaux',
    description: 'Les ceintures, titres et protocoles.',
    path: '/niveaux',
    image: '/img/niveaux.png',
  },
  {
    title: 'Sagesse',
    description: 'Paroles et principes qui guident la pratique.',
    path: '/sagesse',
    image: '/img/sagesse.jpg',
  },
  {
    title: 'Photos',
    description: 'Plus de 40 ans de photos et souvenirs',
    path: '/photos',
    image: '/img/archives.png',
  },
]

export default function Accueil() {
  const navigate = useNavigate()

  const handleClick = (card: (typeof cards)[number]) => {
    if (card.path) {
      navigate(card.path)
    }
  }

  return (
    <Box sx={{ px: 2, maxWidth: 1400, mx: 'auto', mt: {
       xs: 1,
       md: 1
    }}}>
<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    maxWidth: 1200,
    mx: 'auto',
    px: { xs: 0, md: 2 },
    py: { xs: 0, md: 4 },
  }}
>
  {/* Left Side: Text */}
  <Box sx={{ flex: 1 }}>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        fontSize: {
          xs: '1.6rem',
          md: '2.3rem',
        },
        mb: 1,
        textAlign: 'left',
        background: 'linear-gradient(90deg,rgb(112, 18, 79),rgb(110, 35, 123),rgb(112, 18, 79))',
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Site officiel du B.S-D
    </Typography>

    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        fontSize: {
          xs: '1rem',
          md: '1.5rem',
        },
        textAlign: 'left',
        background: 'linear-gradient(90deg,rgb(112, 18, 79),rgb(110, 35, 123),rgb(112, 18, 79))',
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Une discipline martiale française combinant deux approches&nbsp;:<br />
      le Bâton de Combat et la Self-Défense
    </Typography>
  </Box>

  {/* Right Side: Image */}
  <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Box
            sx={{
              width: {xs:'100%', lg: '90%'},
              ml: {xs:'0%', lg: '10%'},
              borderRadius: 3,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: 3,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 6,
              },
            }}
            onClick={() => window.open("https://baton-self.club", '_blank')}
          >
            <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%' }}>
              <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Image section */}
                <Box
                  sx={{
                    width: '100%',
                    height: {xs: 280, md: 400},
                    backgroundImage: `url(${'/img/front.png'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Text section */}
                <CardContent
                  sx={{
                    width: '100%',
                    backgroundColor: '#6c1aa5',
                    padding: 2,
                    pl: 5,
                    pr: 5,
                    flexGrow: 1,
                  }}
                >
                  <Typography 
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      fontSize: {
                        xs: '1.3rem',
                        md: '1.5rem'
                      },
                      color:"#28d0f2",
                      mb: 3
                      }}>
                    Le B.S-D est actuellement enseigné à Toulouse !
                  </Typography>
                  <Button
                    variant="contained"
                    href="https://baton-self.club"
                    target="_blank"
                    rel="noopener"
                    size="large"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 500,
                      backgroundColor: '#ffffff',
                      borderRadius: 0,
                      px: 3,
                      mb: 2,
                      fontSize: {
                        xs: '1.1rem',
                        md: '1.3rem'
                      },
                      color: "#70124f"
                    }}
                  >
                    Visitez le site du club
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
  </Box>
</Box>


      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
          mt: 6
        }}
      >
        {cards.map((card) => (
          <Box
            key={card.title}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 16px)',
                md: 'calc(33.333% - 16px)',
              },
              borderRadius: 3,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: 3,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 6,
              },
            }}
            onClick={() => handleClick(card)}
          >
            <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%' }}>
              <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Image section */}
                <Box
                  sx={{
                    width: '100%',
                    height: 250,
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Text section */}
                <CardContent
                  sx={{
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: 2,
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" color="text.primary">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}

      </Box>
    </Box>
  )
}
