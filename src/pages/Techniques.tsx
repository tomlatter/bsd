import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Techniques() {
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
       Distances, Techniques et Enchaînements
      </Typography>


      <ExpandableSection
          id="distances"
        title="Distances et Techniques"
        mdPath="/src/content/techniques/distances.md" subtitle={'Distances et Techniques de combat en B.S-D.'}      />
      <ExpandableSection
          id="schema"
        title="Schéma des techniques"
        mdPath="/src/content/techniques/frappes-baton.md" subtitle={'Les techniques de frappes au bâton.'}      />
      <ExpandableSection
          id="enchainements"
        title="Mémo Enchainements"
        mdPath="/src/content/techniques/enchainements.md" subtitle={'Les enchaînements techniques et codifés au bâton.'}      />
      <ExpandableSection
          id="enerigies"
        title="Energies"
        mdPath="/src/content/techniques/energies.md" subtitle={'Energie interne - Energie externe'}      />
    </Box>
  )
}
