import Box from "@mui/material/Box";

export default function ThickBackgroundDecor() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -3,
        backgroundColor: '#fff9f3ff', // base cream
        // TOP MAIN DIAGONAL
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          width: '150%',
          height: {xs: '24vh', sm:'90vh'},
          background:
            'linear-gradient(90deg, #28d0f2 0%, #6c1aa5 55%, #70124f 100%)',
          transform: 'rotate(-6deg) translate(-10%, -22%)',
          transformOrigin: 'top left',
          opacity: 0.12,
          pointerEvents: 'none',
          filter: 'saturate(120%)',
        },
        // LOWER SOFT RIBBON (very subtle, opposite angle)
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '-20%',
          bottom: '-12vh',
          width: '160%',
          height: {xs: '0vh', sm: '66vh'},
          background:
            'linear-gradient(90deg, rgba(40,208,242,0.12), rgba(108,26,165,0.12) 55%, rgba(112,18,79,0.12))',
          transform: 'rotate(5deg)',
          transformOrigin: 'bottom left',
          pointerEvents: 'none',
          // Feather the top edge so it blends into cream
          maskImage:
            'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
        },
      }}
    />
  );
}