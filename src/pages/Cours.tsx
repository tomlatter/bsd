import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Cours() {
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
        mdPath="/src/content/cours/initiation.md" subtitle={'Franchir la porte : premier pas vers la confiance et la maîtrise'}      />


      <ExpandableSection
        id="philosophie"
        title="Philosophie"
        subtitle="Plus qu'un sport, le BSD est un art de vivre."
        mdPath="/src/content/cours/philosophie.md"
      />

      <ExpandableSection
        id="cotisations"
        title="Cotisations"
        subtitle="Infos sur les paiements"
        mdPath="/src/content/cours/cotisations.md"
      />

      <ExpandableSection
        id="calendrier"
        title="Calendrier"
        subtitle="Horaires et dates d'entrainements"
        mdPath="/src/content/cours/calendrier.md"
      />

      <ExpandableSection
          id="etre-bien"
          title="Etre bien"
          subtitle="L'essentiel est d'être bien dans sa peau."
          mdPath="/src/content/cours/bien.md"
        />

      <ExpandableSection
        id="bsd-au-feminin"
        title="Le B.S-D au féminin"
        mdPath="/src/content/cours/bsd-au-feminin.md" subtitle={' Quand la technique surpasse la force : le B.S-D comme levier d’égalité '}      />

    </Box>
  )
}
