import { useEffect, useState } from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'
import ReactMarkdown from 'react-markdown'

export default function Techniques() {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch('/src/content/techniques.md')
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('Erreur lors du chargement des techniques.'))
  }, [])

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Techniques
      </Typography>

      {content ? (
        <Box sx={{ mt: 2 }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  )
}
