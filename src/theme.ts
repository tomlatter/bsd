import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',        // violet
      light: '#e1bee7',       // light violet
      contrastText: '#fff',   // white text on selected
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
})

export default theme
