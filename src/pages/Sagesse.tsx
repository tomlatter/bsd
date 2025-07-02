import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Sagesse() {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Les paroles et principes qui guident le B.S-D
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
          title="Fleur d'Amandier"
          subtitle="La Fleur d'Amandier est le symbole du B.S-D."
          mdPath="/src/content/sagesse/fleur.md"
        />
        <ExpandableSection
          title="Maître Kano"
          subtitle="Hommage à Jigoro KANO, fondateur du Judo."
          mdPath="/src/content/sagesse/kano.md"
        />
        <ExpandableSection
          title="Etiquette"
          subtitle="Le salut et la tenue dans le B.S-D."
          mdPath="/src/content/sagesse/etiquette.md"
        />
        <ExpandableSection
          title="Le Cortex"
          subtitle="Pratiquer d’abord, comprendre ensuite."
          mdPath="/src/content/sagesse/cortex.md"
        />
        <ExpandableSection
          title="Philosophie"
          subtitle="Plus qu'un sport, le BSD est un art de vivre."
          mdPath="/src/content/sagesse/philosophie.md"
        />
        <ExpandableSection
          title="Méditations"
          subtitle="Réflexions et commentaire de Jean Louis Brinker."
          mdPath="/src/content/sagesse/meditations.md"
        />
        <ExpandableSection
          title="Expressions"
          subtitle="Entretien avec Fabrice Robert et Jean Louis Brinker."
          mdPath="/src/content/sagesse/expressions.md"
        />
        <ExpandableSection
          title="Etre bien"
          subtitle="L'essentiel est d'être bien dans sa peau."
          mdPath="/src/content/sagesse/bien.md"
        />
        <ExpandableSection
          title="Le Griot Fustigeur"
          subtitle="Le livre sur l'histoire du B.S-D et de son fondateur."
          mdPath="/src/content/sagesse/griot.md"
        />
      </Box>
    </Box>
  )
}
