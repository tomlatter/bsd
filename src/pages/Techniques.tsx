import { Box } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import { Helmet } from 'react-helmet-async';
import ThickBackgroundDecor from '../components/BackgroundDecor';

export default function Techniques() {
  return (
        <>     
     <Helmet>
        <title>BSD Officiel | Techniques</title>
        <meta name="description" content="Une discipline martiale combinant 
          Bâton de Combat et Self-Défense. Approche moderne des techniques de défense à mains nues et au bâton." />
      </Helmet>
      
            <ThickBackgroundDecor />
    <Box sx={{ px: {xs: 0.3, md: 2}, py: 4, mt: {xs: -5, sm: 0}, mb: {xs: -12, sm: 0} }}>
       {/* <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
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
       Techniques
      </Typography> */}


      <ExpandableSection
        id="distances"
        title="Distances"
        mdPath="/officiel/src/content/techniques/distances.md"
        subtitle={'Distances et Techniques de combat en B.S-D.'}
        imagePath="/officiel/img/sections/distances.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir"
      />
      <ExpandableSection
        id="schema"
        title="Schéma"
        mdPath="/officiel/src/content/techniques/frappes-baton.md"
        subtitle={'Schéma des techniques de frappes au bâton.'}
        imagePath="/officiel/img/sections/schema.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir"
      />
      <ExpandableSection
        id="enchainements"
        title="Enchainements"
        mdPath="/officiel/src/content/techniques/enchainements.md"
        subtitle={'Les enchaînements techniques et codifés au bâton.'}
        imagePath="/officiel/img/sections/enchainements.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir"
      />
      <ExpandableSection
        id="enerigies"
        title="Energies"
        mdPath="/officiel/src/content/techniques/energies.md"
        subtitle={'Energie interne - Energie externe'}
        imagePath="/officiel/img/sections/energies.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir"
      />
    </Box>
    </>
  )
}
