import { Card, CardActionArea, CardContent, Typography, Button, Box } from "@mui/material";

export default function UvPromoCard() {
  return (
    <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%", mb: 3, position: "relative" }}>
      <CardActionArea
        onClick={() => window.open("https://uv.baton-self.fr", "_blank")}
        sx={{
          // Background image
          position: "relative",
          minHeight: { xs: 240, sm: 300, md: 560 },
          display: "flex",
          alignItems: "stretch",
          // put your file in /publicimg/uv-promo-bg.png (the one you liked)
          backgroundImage: `url("img/uv_banner.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "center", md: "left center" },
          // dark overlay for text readability
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.55) 35%, rgba(0,0,0,.25) 65%, rgba(0,0,0,0) 100%)",
            pointerEvents: "none",
          },
        }}
      >
        <CardContent
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
            px: { xs: 3, sm: 5 },
            py: { xs: 3, sm: 5 },
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: "58%" } }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: ".5px",
                color: "#fff",
                textTransform: "uppercase",
                textShadow: "0 6px 24px rgba(0,0,0,.6)",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
              }}
            >
              Découvrez l’espace Unités de Valeur
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 1,
                color: "rgba(255,255,255,.92)",
                fontSize: { xs: "1rem", md: "1.55rem" },
                maxWidth: 700,
              }}
            >
              Vidéos, suivi de progression, et plus encore.
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://uv.baton-self.fr"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: { xs: "flex-start", md: "center" },
              fontWeight: 800,
              fontSize: { xs: "1rem", md: "1.05rem" },
              px: { xs: 2.8, md: 3.6 },
              py: { xs: 1.2, md: 1.4 },
              borderRadius: 3,
              boxShadow: "0 12px 28px rgba(0,0,0,.35)",
            }}
          >
            Accéder
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
