import { Box, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import { Helmet } from 'react-helmet-async';

export default function Origines() {
  return (
        <>     
     <Helmet>
        <title>BSD Officiel | Origines</title>
        <meta name="description" content="<Les origines du BSD - 
          Bâton de Combat et Self-Défense. Enseigné à Toulouse." />
      </Helmet>
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
        Origines de la discipline
      </Typography>

      <ExpandableSection
          id="presentation"
        title="Présentation"
        mdPath="/src/content/origines/presentation.md" subtitle={'Une discipline moderne nourrie d’héritages anciens'}
          imagePath="/img/sections/presentation.jpg"      />
      <ExpandableSection
          id="origines"
        title="Origines du B.S-D"
        mdPath="/src/content/origines/origines.md" subtitle={"D'où vient le B.S-D ?"}
          imagePath="/img/sections/origines.jpg"      />
      <ExpandableSection
          id="le-griot"
        title="Le Griot Fustigeur"
        mdPath="/src/content/origines/griot.md" subtitle={"Le livre autobiographique du fondateur du B.S-D"} 
          imagePath="/img/sections/livre.png"     />
      <ExpandableSection
        id="legitime-defense"
        title="La Légitime Defense"
        mdPath="/src/content/origines/legitime-defense.md" subtitle={'Ce que dit la loi'}
          imagePath="/img/sections/self.png"      />
      <ExpandableSection
        id="brevets"
        title="Brevets"
        mdPath="brevets.pdf" subtitle={"Les brevets au 19ème siècle de Maître d'Armes et de Prévôt d'Armes"}
          imagePath="/img/sections/brevet.png"      />
    </Box>
    </>
  )
}
