import {
  Box,
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
    title: 'Cours',
    description: 'Le B.S-D est actuellement enseigné à Toulouse. Découvrez le site web du club!',
    external: 'https://baton-self.club',
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
    title: 'Archives',
    description: 'Photos, vidéos et souvenirs',
    path: '/archives',
    image: '/img/archives.png',
  },
]

export default function Accueil() {
  const navigate = useNavigate()

  const handleClick = (card: (typeof cards)[number]) => {
    if (card.external) {
      window.open(card.external, '_blank')
    } else if (card.path) {
      navigate(card.path)
    }
  }

  return (
    <Box sx={{ px: 2, maxWidth: 1400, mx: 'auto', mt: {
       xs: 1,
       md: 1
    }}}>
<Typography
  variant="h5"
  sx={{
     fontWeight: 700,
    fontSize: {
       xs: '1.3rem',
       md: '2rem'
    },
    mb: 1,
    textAlign: 'left',
    maxWidth: 1100,
    mx: 'auto',
    background: 'linear-gradient(90deg,rgb(89, 56, 89),rgb(153, 46, 172),rgb(112, 18, 79),rgb(94, 49, 101),rgb(110, 35, 123),rgb(112, 18, 79))',
    backgroundSize: '200% auto',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientText 4s ease-in-out infinite',
    '@keyframes gradientText': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  }}
>
  Site officiel du B.S-D
</Typography>
<Typography
  variant="h5"
  sx={{
     fontWeight: 700,
    fontSize: {
       xs: '1.3rem',
       md: '1.5rem'
    },
    mb: 4,
    textAlign: 'left',
    maxWidth: 1100,
    mx: 'auto',
    background: 'linear-gradient(90deg,rgb(89, 56, 89),rgb(153, 46, 172),rgb(112, 18, 79),rgb(94, 49, 101),rgb(110, 35, 123),rgb(112, 18, 79))',
    backgroundSize: '200% auto',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent'
  }}
>
Une discipline martiale française combinant deux approches&nbsp;:<br /> le Bâton de Combat et la Self-Défense

</Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
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
              height: 200,
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
            <Card
              sx={{
                height: '100%',
                position: 'relative',
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
            >
              <CardActionArea sx={{ height: '100%' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: '55%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                    zIndex: 1,
                  }}
                />

                <CardContent
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: '#fff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
