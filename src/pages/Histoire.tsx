import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Origines() {
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
        L'histoire du B.S-D
      </Typography>

      <ExpandableSection
          id="presentation"
        title="Présentation du B.S-D"
        mdPath="/src/content/origines/presentation.md" subtitle={'Une discipline moderne nourrie d’héritages anciens'}      />
      <ExpandableSection
          id="origines"
        title="Origines du B.S-D"
        mdPath="/src/content/origines/presentation.md" subtitle={"D'où vient le B.S-D ?"}      />
      <ExpandableSection
          id="le-griot"
        title="Le Griot Fustigeur"
        mdPath="/src/content/origines/griot.md" subtitle={"Le livre autobiographique du fondateur du B.S-D"}      />
    </Box>
  )
}
