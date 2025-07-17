import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Sagesse() {
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
        Les paroles et principes qui guident le B.S-D
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
          id="fleur"
          title="Fleur d'Amandier"
          subtitle="La Fleur d'Amandier est le symbole du B.S-D."
          mdPath="/src/content/sagesse/fleur.md"
        />
        <ExpandableSection
          id="maitre-kano"
          title="Maître Kano"
          subtitle="Hommage à Jigoro KANO, fondateur du Judo."
          mdPath="/src/content/sagesse/kano.md"
        />
        <ExpandableSection
          id="etiquette"
          title="Etiquette"
          subtitle="Le salut et la tenue dans le B.S-D."
          mdPath="/src/content/sagesse/etiquette.md"
        />
        <ExpandableSection
          id="cortex"
          title="Le Cortex"
          subtitle="Pratiquer d’abord, comprendre ensuite."
          mdPath="/src/content/sagesse/cortex.md"
        />
        <ExpandableSection
          id="meditations"
          title="Méditations"
          subtitle="Réflexions et commentaire de Jean Louis Brinker."
          mdPath="/src/content/sagesse/meditations.md"
        />
        <ExpandableSection
          id="expressions"
          title="Expressions"
          subtitle="Entretien avec Fabrice Robert et Jean Louis Brinker."
          mdPath="/src/content/sagesse/expressions.md"
        />
      </Box>
    </Box>
  )
}
