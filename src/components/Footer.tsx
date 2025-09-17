import { Box, Container, Typography, IconButton, Link as MuiLink } from "@mui/material";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const logo = `${import.meta.env.BASE_URL}img/logo.png`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: "#1a1a1a", color: "white", mt: 6 }}>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            py: 6,
            gap: 4,
          }}
        >
          {/* Logo & Social Icons */}
          <Box>
            <Box component="img" src={logo} alt="Logo B.S-D" sx={{ width: 80, mb: 2 }} />
            <Typography variant="body2" sx={{ mb: 2, color: "grey.400" }}>
              Bâton de Combat et Self-Défense
            </Typography>
            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: 1 }}>
              {[
                { icon: <FaFacebookF />, url: "https://www.facebook.com/Baton.Self" },
                { icon: <FaInstagram />, url: "#" },
                { icon: <FaWhatsapp />, url: "#" },
                { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/jean-brinker-a9624284/" },
                { icon: <FaYoutube />, url: "https://www.youtube.com/channel/UCnCFm5OJKFVqnmXFGvGWcnA" },
              ].map(({ icon, url }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    bgcolor: "#333",
                    color: "white",
                    "&:hover": { bgcolor: "primary.main" },
                    width: 36,
                    height: 36,
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, fontSize: "0.9rem" }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <FaMapMarkerAlt color="#b388ff" />
                <Typography>
                  Gymnase Anatole France<br />21 Bd de la Méditerranée<br />31400 Toulouse
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaPhoneAlt color="#b388ff" />
                <MuiLink href="tel:0769237677" underline="hover" color="inherit">
                  07 69 23 76 77
                </MuiLink>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaEnvelope color="#b388ff" />
                <MuiLink href="mailto:bsd.selfdefense@gmail.com" underline="hover" color="inherit">
                  bsd.selfdefense@gmail.com
                </MuiLink>
              </Box>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Liens rapides
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, fontSize: "0.9rem" }}>
              <MuiLink href="https://www.baton-self.club" target="_blank" underline="hover" sx={{ color: "grey.300", "&:hover": { color: "primary.light" } }}>
                B.S-D à Toulouse
              </MuiLink>
              <MuiLink href="/officiel/cours#cotisations"  underline="hover" sx={{ color: "grey.300", "&:hover": { color: "primary.light" } }}>
                Cotisations
              </MuiLink>
              <MuiLink href="/officiel/cours#bsd-au-feminin" underline="hover" sx={{ color: "grey.300", "&:hover": { color: "primary.light" } }}>
                B.S-D au Féminin
              </MuiLink>
              <MuiLink href="/officiel/origines#le-griot" underline="hover" sx={{ color: "grey.300", "&:hover": { color: "primary.light" } }}>
                Le Griot Fustigeur
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Bottom Bar */}
      <Box sx={{ borderTop: "1px solid #333", textAlign: "center", py: 2, fontSize: "0.8rem", color: "grey.500" }}>
        B.S-D BÂTON DE COMBAT. SELF-DÉFENSE © {year} | N° de déclaration : 03106ET0029
      </Box>
    </Box>
  );
};

export default Footer;
