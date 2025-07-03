import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Niveaux() {
  return (
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
        Titres, niveaux et protocoles
      </Typography>
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
          id="intro"
          title="Introduction"
          subtitle="Les termes, les couleurs et leur signification"
          mdPath="/src/content/niveaux/intro.md"
        />
        <ExpandableSection
          id="protocole"
          title="Protocole"
          subtitle="Les protocoles du B.S-D"
          mdPath="/src/content/niveaux/protocole.md"
        />
        <ExpandableSection
          id="techniques"
          title="Niveaux 1 à 4"
          subtitle="Quatre niveaux Techniques"
          mdPath="/src/content/niveaux/1-2-3-4.md"
        />
        <ExpandableSection
          id="pedagogiques"
          title="Niveaux 4 à 6"
          subtitle="Trois niveaux Pédagogiques"
          mdPath="/src/content/niveaux/4-5-6.md"
        />
        <ExpandableSection
          id="recherche"
          title="Niveaux 7 à 8"
          subtitle="Deux niveaux de Recherche"
          mdPath="/src/content/niveaux/7-8.md"
        />
        <ExpandableSection
          id="gardien-du-bsd"
          title="Niveau 9 : Gardien du B.S-D"
          subtitle="Un niveau Technique, Pédagogique, Philosophique et de Recherche"
          mdPath="/src/content/niveaux/9.md"
        />
        <ExpandableSection
          id="esprit-du-bsd"
          title="Niveau 10 : Esprit du B.S-D "
          subtitle="Un niveau Spirituel (Conseil des Sages)"
          mdPath="/src/content/niveaux/10.md"
        />
      </Box>
    </Box>
  )
}
