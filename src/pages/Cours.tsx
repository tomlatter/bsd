import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import ClubPromoCard from '../components/ClubPromoCard'
import { Helmet } from 'react-helmet-async';

export default function Cours() {
  return (
     <>     
     <Helmet>
        <title>BSD Officiel | Cours</title>
        <meta name="description" content="Cours de  
          Bâton de Combat et Self-Défense. Le B.S-D est actuellement enseigné à Toulouse avec cours d'essai gratuits." />
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
        Cours
      </Typography>

      <ClubPromoCard/>


      <ExpandableSection
        id="initiation"
        title="Initiation"
        mdPath="/src/content/cours/initiation.md" subtitle={'Franchir la porte : premier pas vers la confiance et la maîtrise'}
          imagePath="/img/sections/initiation.png"      />


      <ExpandableSection
        id="philosophie"
        title="Philosophie"
        subtitle="Plus qu'un sport, le BSD est un art de vivre."
        mdPath="/src/content/cours/philosophie.md"
          imagePath="/img/sections/philosophie.png"
      />

      <ExpandableSection
        id="cotisations"
        title="Cotisations"
        subtitle="Infos sur les paiements"
        mdPath="/src/content/cours/cotisations.md"
          imagePath="/img/sections/cotisations.png"
      />

      <ExpandableSection
        id="calendrier"
        title="Calendrier"
        subtitle="Horaires et dates d'entrainements"
        mdPath="/src/content/cours/calendrier.md"
          imagePath="/img/sections/calendrier.png"
      />

      <ExpandableSection
          id="etre-bien"
          title="Etre bien"
          subtitle="L'essentiel est d'être bien dans sa peau."
          mdPath="/src/content/cours/bien.md"
          imagePath="/img/sections/bien.jpg"
        />

      <ExpandableSection
        id="bsd-au-feminin"
        title="Le B.S-D au féminin"
        mdPath="/src/content/cours/bsd-au-feminin.md" subtitle={' Quand la technique surpasse la force : le B.S-D comme levier d’égalité '}
          imagePath="/img/sections/self.png"      />

    </Box>
    </>
  )
}
