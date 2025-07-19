import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import ExpandableSection from '../components/ExpandableSection'

export default function Niveaux() {
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
        Titres, niveaux et protocoles
      </Typography>

      <Card sx={{ borderRadius: 3, overflow: 'hidden', height: '100%', mb:3 }}>
        
          <CardActionArea sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}
                  onClick={() => window.open("https://uv.baton-self.fr", '_blank')}>
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
              Découvrez l’espace dédié aux Unités de Valeurs pour suivre votre progression de façon simple et ludique.{" "}<br />
              
            </Typography>
              <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 0 }}
                  size="large"
                  href="https://uv.baton-self.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accèder
                </Button>
            </CardContent>
          </CardActionArea>
      </Card>
      
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
          mdPath="/src/content/niveaux/intro.md"
          imagePath="/img/sections/couleurs.png"
        />
        <ExpandableSection
          id="protocole"
          title="Protocole"
          subtitle="Les protocoles du B.S-D"
          mdPath="/src/content/niveaux/protocole.md"
          imagePath="/img/sections/protocole.png"
        />
        <ExpandableSection
          id="techniques"
          title="Niveaux 1 à 4"
          subtitle="Quatre niveaux Techniques"
          mdPath="/src/content/niveaux/1-2-3-4.md"
          imagePath="/img/sections/ceintures.png"
        />
        <ExpandableSection
          id="pedagogiques"
          title="Niveaux 4 à 6"
          subtitle="Trois niveaux Pédagogiques"
          mdPath="/src/content/niveaux/4-5-6.md"
          imagePath="/img/sections/prof.png"
        />
        <ExpandableSection
          id="recherche"
          title="Niveaux 7 à 8"
          subtitle="Deux niveaux de Recherche"
          mdPath="/src/content/niveaux/7-8.md"
          imagePath="/img/sections/recherche.png"
        />
        <ExpandableSection
          id="gardien-du-bsd"
          title="Niveau 9"
          subtitle="Gardien du B.S-D : Un niveau Technique, Pédagogique, Philosophique et de Recherche"
          mdPath="/src/content/niveaux/9.md"
          imagePath="/img/sections/corde_tricolore.png"
        />
        <ExpandableSection
          id="esprit-du-bsd"
          title="Niveau 10"
          subtitle="Gardien de la Voie : Un niveau Spirituel (Conseil des Sages)"
          mdPath="/src/content/niveaux/10.md"
          imagePath="/img/sections/corde_blanche.png"
        />
        <ExpandableSection
          id="evaluation"
          title="Evaluation et Niveaux"
          subtitle="Les Unités de Valeur du B.S-D"
          mdPath="/src/content/niveaux/evaluation.md"
          imagePath="/img/sections/certificat.png"
        />
      </Box>
    </Box>
  )
}
