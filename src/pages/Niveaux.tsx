import { Box } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import { Helmet } from 'react-helmet-async';
import UvPromoCard from  '../components/UvPromoCard'
import ThickBackgroundDecor from '../components/BackgroundDecor';

export default function Niveaux() {
  return (
        <>     
     <Helmet>
        <title>BSD Officiel | Niveaux</title>
        <meta name="description" content="Une discipline martiale combinant 
          Bâton de Combat et Self-Défense. Enseigné à Toulouse. Les ceintures, titres et protocoles." />
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
        Titres, niveaux et protocoles
      </Typography> */}

      <UvPromoCard />
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',  // 1 column on small screens
            // lg: '1fr 1fr', // 2 columns on large screens
          },
          gap: 2,
          mt: 3,
        }}
      >
        <ExpandableSection
          id="intro"
          title="Introduction"
          subtitle="Les termes, les couleurs et leur signification"
          mdPath="src/content/niveaux/intro.md"
          imagePath="img/sections/couleurs.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
        <ExpandableSection
          id="protocole"
          title="Protocole"
          subtitle="Les protocoles du B.S-D"
          mdPath="src/content/niveaux/protocole.md"
          imagePath="img/sections/protocole.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
        <ExpandableSection
          id="techniques"
          title="Niveaux 1 à 4"
          subtitle="Quatre niveaux Techniques"
          mdPath="src/content/niveaux/1-2-3-4.md"
          imagePath="img/sections/ceintures.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
        <ExpandableSection
          id="pedagogiques"
          title="Niveaux 4 à 6"
          subtitle="Trois niveaux Pédagogiques"
          mdPath="src/content/niveaux/4-5-6.md"
          imagePath="img/sections/prof.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
        <ExpandableSection
          id="recherche"
          title="Niveaux 7 à 8"
          subtitle="Deux niveaux de Recherche"
          mdPath="src/content/niveaux/7-8.md"
          imagePath="img/sections/recherche.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
        <ExpandableSection
          id="gardien-du-bsd"
          title="Niveau 9"
          subtitle="Gardien du B.S-D : Un niveau Technique, Pédagogique, Philosophique et de Recherche"
          mdPath="src/content/niveaux/9.md"
          imagePath="img/sections/corde_tricolore.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
        <ExpandableSection
          id="esprit-du-bsd"
          title="Niveau 10"
          subtitle="Gardien de la Voie : Un niveau Spirituel (Conseil des Sages)"
          mdPath="src/content/niveaux/10.md"
          imagePath="img/sections/corde_blanche.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
        <ExpandableSection
          id="evaluation"
          title="Evaluation et Niveaux"
          subtitle="Les Unités de Valeur du B.S-D"
          mdPath="src/content/niveaux/evaluation.md"
          imagePath="img/sections/certificat.png"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />
      </Box>
    </Box>
    </>
  )
}
