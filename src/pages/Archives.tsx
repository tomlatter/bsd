import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Archives() {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Archives
      </Typography>

      <ExpandableSection
        title="Les origines"
        mdPath="/src/content/histoire/origines.md" subtitle={''}      />
      <ExpandableSection
        title="L’évolution du bâton"
        mdPath="/src/content/histoire/evolution.md" subtitle={''}      />
      <ExpandableSection
        title="L’école aujourd’hui"
        mdPath="/src/content/histoire/ecole.md" subtitle={''}      />
    </Box>
  )
}
