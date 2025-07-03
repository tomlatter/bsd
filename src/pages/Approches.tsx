import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Approches() {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Approches
      </Typography>

      <ExpandableSection
        title="Les approches"
        mdPath="/src/content/approches/origines.md" subtitle={''}      />
      <ExpandableSection
        title="L’évolution du bâton"
        mdPath="/src/content/approches/evolution.md" subtitle={''}      />
      <ExpandableSection
        title="L’école aujourd’hui"
        mdPath="/src/content/approches/ecole.md" subtitle={''}      />
    </Box>
  )
}
