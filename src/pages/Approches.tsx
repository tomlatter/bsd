import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Approches() {
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
        Les approches techniques et pédagogiques du B.S-D 
      </Typography>

      <ExpandableSection
        id="initiation"
        title="Initiation"
        mdPath="/src/content/approches/initiation.md" subtitle={''}      />

      <ExpandableSection
          id="etre-bien"
          title="Etre bien"
          subtitle="L'essentiel est d'être bien dans sa peau."
          mdPath="/src/content/approches/bien.md"
        />

      <ExpandableSection
        id="bsd-au-feminin"
        title="Le B.S-D au féminin"
        mdPath="/src/content/approches/bsd-au-feminin.md" subtitle={''}      />

      <ExpandableSection
        id="legitime-defense"
        title="Le Légitime Defense"
        mdPath="/src/content/approches/legitime-defense.md" subtitle={'Ce que dit la loi'}      />
    </Box>
  )
}
