import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import { Helmet } from 'react-helmet-async';

export default function Sagesse() {
  return (
        <>     
     <Helmet>
        <title>BSD Officiel | Sagesse</title>
        <meta name="description" content="Une discipline martiale combinant 
          Bâton de Combat et Self-Défense. Enseigné à Toulouse. Les principes qui guident la pratique." />
      </Helmet>
    <Box sx={{ px: {xs: 0.3, md: 2}, py: 4 }}>
             <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: '1.5rem',
            md: '2.3rem',
          },
          mb: 3,
          textAlign: 'left',
          background: 'linear-gradient(90deg,rgb(112, 18, 79),rgb(110, 35, 123),rgb(112, 18, 79))',
          backgroundSize: '200% auto',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Les principes qui guident le B.S-D
      </Typography>


      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
          gap: 1,
          mt: 12,
          mb: 12,
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
          }}
        >
          “C'est par l'entraide et les concessions mutuelles qu'un organisme groupant des individus, 
          en nombre grand ou petit, peut trouver sa pleine harmonie et réaliser des progrès sérieux.”
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
          Jigoro Kano
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
          Fondateur du Judo
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',  // 1 column on small screens
            // lg: '1fr 1fr', // 2 columns on large screens
          },
          gap: 2,
          mt: 3,
        }}
      >
        <ExpandableSection
          id="fleur"
          title="Fleur d'Amandier"
          subtitle="La Fleur d'Amandier est le symbole du B.S-D."
          mdPath="/src/content/sagesse/fleur.md"
          imagePath="/img/sections/fleur.png"
        />
        <ExpandableSection
          id="maitre-kano"
          title="Maître Kano"
          subtitle="Hommage à Jigoro KANO, fondateur du Judo."
          mdPath="/src/content/sagesse/kano.md"
          imagePath="/img/sections/kano.jpg"
        />
        <ExpandableSection
          id="etiquette"
          title="Etiquette"
          subtitle="Le salut et la tenue dans le B.S-D."
          mdPath="/src/content/sagesse/etiquette.md"
          imagePath="/img/sections/etiquette.png"
        />
        <ExpandableSection
          id="cortex"
          title="Le Cortex"
          subtitle="Pratiquer d’abord, comprendre ensuite."
          mdPath="/src/content/sagesse/cortex.md"
          imagePath="/img/sections/cortex.png"
        />
        <ExpandableSection
          id="meditations"
          title="Méditations"
          subtitle="Réflexions et commentaire de Jean Louis Brinker."
          mdPath="/src/content/sagesse/meditations.md"
          imagePath="/img/sections/meditations.png"
        />
        <ExpandableSection
          id="expressions"
          title="Expressions"
          subtitle="Entretien avec Fabrice Robert et Jean Louis Brinker."
          mdPath="/src/content/sagesse/expressions.md"
          imagePath="/img/sections/expressions.png"
        />
      </Box>
    </Box>
    </>
  )
}
