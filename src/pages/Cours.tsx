import { Box } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import ClubPromoCard from '../components/ClubPromoCard'
import { Helmet } from 'react-helmet-async';
import ThickBackgroundDecor from '../components/BackgroundDecor';

export default function Cours() {
  return (
     <>     
     <Helmet>
        <title>BSD Officiel | Cours</title>
        <meta name="description" content="Cours de  
          Bâton de Combat et Self-Défense. Le B.S-D est actuellement enseigné à Toulouse avec cours d'essai gratuits." />
      </Helmet>

      <ThickBackgroundDecor />
    <Box sx={{ px: {xs: 0.3, md: 2}, py: 4, mt: {xs: -5, sm: 0}, mb: {xs: -12, sm: 0} }}>
       

      <ClubPromoCard/>

      <ExpandableSection
        id="initiation"
        title="Initiation"
        mdPath="/officiel/src/content/cours/initiation.md"
        subtitle={'Franchir la porte : premier pas vers la confiance et la maîtrise'}
        imagePath="/officiel/img/sections/initiation.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
       />


      <ExpandableSection
        id="philosophie"
        title="Philosophie"
        subtitle="Plus qu'un sport, le BSD est un art de vivre."
        mdPath="/officiel/src/content/cours/philosophie.md"
        imagePath="/officiel/img/sections/philosophie.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
      />

      <ExpandableSection
        id="cotisations"
        title="Cotisations"
        subtitle="Infos sur les paiements"
        mdPath="/officiel/src/content/cours/cotisations.md"
        imagePath="/officiel/img/sections/cotisations.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
      />

      <ExpandableSection
        id="calendrier"
        title="Calendrier"
        subtitle="Horaires et dates d'entrainements"
        mdPath="/officiel/src/content/cours/calendrier.md"
        imagePath="/officiel/img/sections/calendrier.png"  
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
      />

      <ExpandableSection
          id="etre-bien"
          title="Etre bien"
          subtitle="L'essentiel est d'être bien dans sa peau."
          mdPath="/officiel/src/content/cours/bien.md"
          imagePath="/officiel/img/sections/bien.jpg"  
          imgBgColor="#fedad6"
          bgColor="#fff3e4"
          chipText="Découvrir" 
        />

      <ExpandableSection
        id="bsd-au-feminin"
        title="Le B.S-D au féminin"
        mdPath="/officiel/src/content/cours/bsd-au-feminin.md" 
        subtitle={' Quand la technique surpasse la force : le B.S-D comme levier d’égalité '}
        imagePath="/officiel/img/sections/self.png"   
        imgBgColor="#fedad6"
        bgColor="#fff3e4"
        chipText="Découvrir" 
       />

    </Box>
    </>
  )
}

