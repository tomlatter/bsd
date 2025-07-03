import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Archives() {
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
        Les Archives du B.S-D
      </Typography>

      <ExpandableSection
          id=""
        title="Les origines"
        mdPath="/src/content/archives/origines.md" subtitle={''}      />
    </Box>
  )
}
