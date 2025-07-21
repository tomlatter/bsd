import { Box, Typography, Button, Card, CardActionArea, CardContent } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'
import { Helmet } from 'react-helmet-async';

export default function Cours() {
  return (
     <>     
     <Helmet>
        <title>BSD Officiel | Cours</title>
        <meta name="description" content="Cours de  
          Bâton de Combat et Self-Défense. Le B.S-D est actuellement enseigné à Toulouse avec cours d'essai gratuits." />
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
        Cours
      </Typography>

<Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%', mb:3 }}>
  
    <CardActionArea sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}
            onClick={() => window.open("https://baton-self.club", '_blank')}>
       <CardContent
          sx={{
          width: "100%",
          backgroundColor: "#eeeee1",
          padding: 3,
          pl: 5,
          pr: 5,
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // column on mobile, row on large
          alignItems: "center", // vertically center content when row
          justifyContent: "flex-start",
          gap: 3, // space between button and text
        }}
     >
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "1rem", md: "1.5rem" },
          maxWidth: 500,
          mx: { xs: "auto", md: 0 },
        }}
      >
        Le B.S-D est actuellement enseigné à Toulouse les lundis et jeudis soirs.{" "}<br />
        
      </Typography>
        <Button
            variant="contained"
            color="primary"
            sx={{ mt: 0 }}
            size="large"
            href="https://www.baton-self.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitez le site du club
          </Button>
      </CardContent>
    </CardActionArea>
</Card>


      <ExpandableSection
        id="initiation"
        title="Initiation"
        mdPath="/src/content/cours/initiation.md" subtitle={'Franchir la porte : premier pas vers la confiance et la maîtrise'}
          imagePath="/img/sections/initiation.png"      />


      <ExpandableSection
        id="philosophie"
        title="Philosophie"
        subtitle="Plus qu'un sport, le BSD est un art de vivre."
        mdPath="/src/content/cours/philosophie.md"
          imagePath="/img/sections/philosophie.png"
      />

      <ExpandableSection
        id="cotisations"
        title="Cotisations"
        subtitle="Infos sur les paiements"
        mdPath="/src/content/cours/cotisations.md"
          imagePath="/img/sections/cotisations.png"
      />

      <ExpandableSection
        id="calendrier"
        title="Calendrier"
        subtitle="Horaires et dates d'entrainements"
        mdPath="/src/content/cours/calendrier.md"
          imagePath="/img/sections/calendrier.png"
      />

      <ExpandableSection
          id="etre-bien"
          title="Etre bien"
          subtitle="L'essentiel est d'être bien dans sa peau."
          mdPath="/src/content/cours/bien.md"
          imagePath="/img/sections/bien.jpg"
        />

      <ExpandableSection
        id="bsd-au-feminin"
        title="Le B.S-D au féminin"
        mdPath="/src/content/cours/bsd-au-feminin.md" subtitle={' Quand la technique surpasse la force : le B.S-D comme levier d’égalité '}
          imagePath="/img/sections/self.png"      />

    </Box>
    </>
  )
}
