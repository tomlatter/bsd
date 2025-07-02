import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Niveaux() {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Niveaux
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',  // 1 column on small screens
            lg: '1fr 1fr', // 2 columns on large screens
          },
          gap: 2,
          mt: 3,
        }}
      >
        <ExpandableSection
          title="Intro"
          subtitle="Test protocoloe subtitle"
          mdPath="/src/content/niveaux/intro.md"
        />
        <ExpandableSection
          title="Protocole"
          subtitle="Test protocoloe subtitle"
          mdPath="/src/content/niveaux/protocole.md"
        />
        <ExpandableSection
          title="Niveaux 1 à 4"
          subtitle="Quatre niveaux Techniques"
          mdPath="/src/content/niveaux/1-2-3-4.md"
        />
        <ExpandableSection
          title="Niveaux 4 à 6"
          subtitle="Trois niveaux Pédagogiques"
          mdPath="/src/content/niveaux/4-5-6.md"
        />
        <ExpandableSection
          title="Niveaux 7 à 8"
          subtitle="Deux niveaux de Recherche"
          mdPath="/src/content/niveaux/7-8.md"
        />
        <ExpandableSection
          title="Niveau 9 : Gardien du B.S-D"
          subtitle="Un niveau Technique, Pédagogique, Philosophique et de Recherche"
          mdPath="/src/content/niveaux/9.md"
        />
        <ExpandableSection
          title="Niveau 10 : Esprit du B.S-D "
          subtitle="Un niveau Spirituel (Conseil des Sages)"
          mdPath="/src/content/niveaux/10.md"
        />
      </Box>
    </Box>
  )
}
