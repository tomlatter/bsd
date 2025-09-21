import { Box } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import { Helmet } from 'react-helmet-async';
import ThickBackgroundDecor from '../components/BackgroundDecor';

export default function Origines() {
  return (
        <>     
     <Helmet>
        <title>BSD Guide Officiel | Origines</title>
        <meta name="description" content="<Les origines du BSD - 
          Bâton de Combat et Self-Défense. Enseigné à Toulouse." />
      </Helmet>
      
            <ThickBackgroundDecor />
    <Box sx={{ px: {xs: 0.3, md: 2}, py: 4, mt: {xs: -5, sm: 0}, mb: {xs: -12, sm: 0} }}>
      {/* <Typography
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
      </Typography> */}

      <ExpandableSection
        id="presentation"
        title="Présentation"
        mdPath={`${import.meta.env.BASE_URL}src/content/origines/presentation.md`}
        subtitle={'Une discipline moderne nourrie d’héritages anciens'}
        imagePath={`${import.meta.env.BASE_URL}img/sections/presentation.jpg`}    
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
       />
      <ExpandableSection
        id="origines"
        title="Origines du B.S-D"
        mdPath={`${import.meta.env.BASE_URL}src/content/origines/origines.md`} 
        subtitle={"D'où vient le B.S-D ?"}
        imagePath={`${import.meta.env.BASE_URL}img/sections/origines.jpg`}   
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
      />
      <ExpandableSection
        id="le-griot"
        title="Le Griot Fustigeur"
        mdPath={`${import.meta.env.BASE_URL}src/content/origines/griot.md`}
        subtitle={"Le livre autobiographique du fondateur du B.S-D"} 
        imagePath={`${import.meta.env.BASE_URL}img/sections/livre.png`}   
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
       />
      <ExpandableSection
        id="legitime-defense"
        title="La Légitime Defense"
        mdPath={`${import.meta.env.BASE_URL}src/content/origines/legitime-defense.md`} 
        subtitle={'Ce que dit la loi'}
        imagePath={`${import.meta.env.BASE_URL}img/sections/self.png`}   
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
      />
      <ExpandableSection
        id="brevets"
        title="Brevets"
        mdPath="/officiel/brevets.pdf" 
        subtitle={"Les brevets au 19ème siècle de Maître d'Armes et de Prévôt d'Armes"}
        imagePath={`${import.meta.env.BASE_URL}img/sections/brevet.png`}    
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
      />
    </Box>
    </>
  )
}
