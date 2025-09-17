import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import self_img from "img/self.png";
import baton_img from "img/baton.png";
import { Helmet } from 'react-helmet-async';


const cards = [
  {
    title: 'Origines',
    description: 'Découvrez les origines de la discipline et de son fondateur.',
    path: '/officiel/origines',
    image: 'img/histoire.jpg',
  },
  {
    title: 'Cours',
    description: "Le B.S-D est actuellement enseigné à Toulouse avec cours d'essai gratuits.",
    path: '/officiel/cours',
    image: 'img/cours.jpg',
  },
  {
    title: 'Techniques',
    description: 'Approche moderne des techniques de défense à mains nues et au bâton.',
    path: '/officiel/techniques',
    image: 'img/techniques.jpg',
  },
  {
    title: 'Niveaux',
    description: 'Les ceintures, titres et protocoles.',
    path: '/officiel/niveaux',
    image: 'img/niveaux.png',
  },
  {
    title: 'Sagesse',
    description: 'Principes qui guident la pratique.',
    path: '/officiel/sagesse',
    image: 'img/sagesse.jpg',
  },
  {
    title: 'Photos',
    description: 'Plus de 40 ans de souvenirs.',
    path: '/officiel/photos',
    image: 'img/archives.png',
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
    <>     
     <Helmet>
        <title>BSD Officiel | Acceuil</title>
        <meta name="description" content="La discipline martiale française 
          Bâton de Combat et Self-Défense. Enseigné à Toulouse." />
      </Helmet>

      <BackgroundDecor />
      
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
            pt: { xs: 0, md: 8 },
            fontSize: {
              xs: '1.6rem',
              md: '2.3rem',
            },
            mb: 1,
            textAlign: 'center',
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
        color: 'text.primary',
        mb: 2,
            textAlign: 'center',
        fontSize: { xs: '1.2rem', md: '1.6rem' },
        fontWeight: 500,
      }}
    >
      La discipline martiale française <br />
      <strong>Bâton de Combat</strong>. <strong>Self-Défense</strong>
    </Typography>

<Typography
  variant="body1"
  sx={{
    display: "inline-block",
    fontSize: { xs: "1.4rem", md: "1.6rem" },
    fontWeight: 400,
    color: " #70124f",
    textAlign: 'center',
    py: 1,
    px: 3,
    mt: 9,
    mx: { xs: "auto", md: 0 },
    textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
  }}
>
  Développez votre confiance, améliorez vos capacités techniques
  et découvrez une approche moderne du combat et de la défense.
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
                    backgroundImage: `url(${'img/front.png'})`,
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
                      backgroundColor: '#fff', 
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
<Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center", mt: 10, px: {xs: 0, sm: 2} }}>
  {/* Heading */}
  <Typography
    variant="h5"
    sx={{
      fontWeight: 600,
      mb: 3,
        background: 'linear-gradient(90deg,rgb(112, 18, 79),rgb(110, 35, 123),rgb(112, 18, 79))',
        backgroundSize: '200% auto',
      fontSize: { xs: "1.2rem", md: "1.6rem" },
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
    }}
  >
    Une Tradition Ancienne, Une Discipline Moderne
  </Typography>

  {/* First paragraph */}
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: "1.1rem", md: "1.3rem" },
      lineHeight: 1.8,
      color: "#2a2a2a",
      mb: 3,
    }}
  >
    <Box component="span" sx={{ fontWeight: 600, color: "#2a2a2a" }}>
      Le combat au bâton long
    </Box>{" "}
    existe partout dans le monde depuis que l’Homme existe. En France, dans les
    périodes violentes comme au moyen-âge, c’était un fidèle compagnon. Il aidait
    à marcher, descendre à flanc de montagne, gauler des fruits, passer à gué des
    rivières et surtout se défendre. Enseigné dans{" "}
    <Box component="span" sx={{ fontWeight: 600, color: "#2a2a2a" }}>
      l’armée napoléonienne
    </Box>
    , il a traversé les siècles grâce à des maîtres passionnés.
  </Typography>

  {/* Divider for visual break */}
  <Box sx={{ width: 80, height: 3, backgroundColor: "primary.main", mx: "auto", my: 4, borderRadius: 2 }} />

  {/* Second paragraph */}
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: "1.1rem", md: "1.3rem" },
      lineHeight: 1.8,
      color: "#2a2a2a",
    }}
  >
    Créé à{" "}
    <Box component="span" sx={{ fontWeight: 600, color: "#2a2a2a" }}>
      Toulouse
    </Box>{" "}
    par{" "}
    <Box component="span" sx={{ fontWeight: 600, color: "#2a2a2a" }}>
      Jean Louis Brinker
    </Box>{" "}
    en 1980, le B.S-D s’inscrit dans cette tradition française tout en y intègrant{" "}
    <Box component="span" sx={{ fontWeight: 600, color: "#2a2a2a" }}>
      la self-défense à mains nues.
    </Box>{" "}
     Cette discipline s’adresse aux femmes, hommes,
    ados et adultes, en proposant des techniques réalistes, efficaces et
    accessibles.
  </Typography>
</Box>
 <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
        gap: 3,
        mt: 8,
        justifyContent: "center",
      }}
    >
      <Card
  sx={{
    flex: 1,
    maxWidth: 400,
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: 3,
    position: "relative",
    backgroundColor: "#6b1ca0", // Bottom purple
    color: "#fff",
  }}
>
  {/* Top Section with Off White and Rounded Bottom */}
  <Box
    sx={{
      backgroundColor: "#fff3e4", 
      height: "55%",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      borderBottomLeftRadius: "50% 30%",
      borderBottomRightRadius: "50% 30%",
      zIndex: 1,
    }}
  />

  <CardContent
    sx={{
      textAlign: "center",
      p: 3,
      position: "relative",
      zIndex: 2, // To stay above the background layer
    }}
  >
    <Box
      component="img"
      src={baton_img}
      alt="Bâton de Combat"
      sx={{
        width: 200,
        height: "auto",
        mb: 6,
        mx: "auto",
      }}
    />
    <Typography
      variant="h5"
      sx={{
        color: "#fff3e4", 
        fontWeight: 700,
        mb: 2,
      }}
    >
      Bâton de Combat
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "0.95rem", md: "1.05rem" },
        color: "#fff3e4", 
        lineHeight: 1.6,
      }}
    >
      Art martial, recherche de la perfection technique en combat au Bâton
      long et à la Canne de défense.
    </Typography>
  </CardContent>
</Card>


  {/* Card 2: Self-Défense */}
<Card
  sx={{
    flex: 1,
    maxWidth: 400,
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: 3,
    border: "none",
    position: "relative",
    backgroundColor: "#6b1ca0", // Bottom purple
    color: "#fff3e4",
  }}
>
  <Box
    sx={{
      backgroundColor: "#fff3e4", 
      height: "55%",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      borderBottomLeftRadius: "50% 30%",
      borderBottomRightRadius: "50% 30%",
      zIndex: 1,
    }}
  />

    <CardContent
      sx={{
        textAlign: "center",
      p: 3,
      position: "relative",
      zIndex: 2, 
      }}
    >
      <Box
        component="img"
        src={self_img}
        alt="Self-Défense"
        sx={{
          width: 200,
          height: "auto",
          mb: 8.5,
          px: "20px",
          mt: "20px",
          mx: "auto",
        }}
      />
      <Typography
        variant="h5"
        sx={{
          color: "#fff3e4",
          fontWeight: 700,
          mb: 2,
        }}
      >
        Self-Défense
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.95rem", md: "1.05rem" },
        color: "#fff3e4", 
          lineHeight: 1.6,
        }}
      >
        Apprendre à se défendre pour se protéger soi et les autres afin de
        stopper la violence, ou au moins ne pas la subir.
      </Typography>
    </CardContent>
  </Card>
    </Box>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
      gap: 1,
      mt: 16,
      mb: 16,
      px: 2,
      maxWidth: 650,
      mx: "auto",
      // textAlign: "center",
    }}
  >
    {/* Quote */}
    <Typography
      sx={{
        color: "#70124f",
        // fontFamily: "'Lora', serif",
        fontSize: { xs: "1.3rem", md: "2rem" },
        fontWeight: 400,
        lineHeight: 1.75,
        mb: 1,
        maxWidth: 900,
        textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
      }}
    >
      “Eduquer le corps aux techniques martiales, c'est éveiller l'esprit à la
      non-violence sous toutes ses formes.”
    </Typography>

    {/* Author */}
    <Typography
      sx={{
        color: "#1a1a1aff",
        letterSpacing: "3px",
        textTransform: "uppercase",
        fontFamily: "'Lato', sans-serif",
        fontSize: { xs: "1.1rem", md: "1.3rem" },
        fontWeight: 400,
        mt: 2,
      }}
    >
      JEAN LOUIS BRINKER
    </Typography>

    {/* Title */}
    <Typography
      sx={{
        color: "#4a4a4aff",
        fontFamily: "'Lato', sans-serif",
        fontSize: { xs: "1rem", md: "1.1rem" },
        fontWeight: 300,
        mt: 0.5,
      }}
    >
      Fondateur du B.S-D
    </Typography>
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
            <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%', position: 'relative' }}>
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
                    backgroundColor: {xs: '#fff9f2ff', sm: '#fff9ebff'},
                    padding: 2,
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h6" sx={{fontWeight: 600}} color="text.primary">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text"
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1.05rem" }
                    }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}

      </Box>

    </Box>
    </>
  )
}

function BackgroundDecor() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -3,
        backgroundColor: '#fff9f2', // base cream
        // TOP MAIN DIAGONAL
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          width: '150%',
          height: {xs: '40vh', sm:'40vh'},
          background:
            'linear-gradient(90deg, #28d0f2 0%, #6c1aa5 55%, #70124f 100%)',
          transform: 'rotate(-6deg) translate(-10%, -22%)',
          transformOrigin: 'top left',
          opacity: 0.12,
          pointerEvents: 'none',
          filter: 'saturate(120%)',
        },
        // LOWER SOFT RIBBON (very subtle, opposite angle)
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '-20%',
          bottom: '-12vh',
          width: '160%',
          height: '36vh',
          background:
            'linear-gradient(90deg, rgba(40,208,242,0.12), rgba(108,26,165,0.12) 55%, rgba(112,18,79,0.12))',
          transform: 'rotate(5deg)',
          transformOrigin: 'bottom left',
          pointerEvents: 'none',
          // Feather the top edge so it blends into cream
          maskImage:
            'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        },
      }}
    />
  );
}

