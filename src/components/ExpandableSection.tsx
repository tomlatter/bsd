import { useState, useEffect } from 'react'
import {
  Card,
  Collapse,
  Typography,
  IconButton,
  CircularProgress,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/material/styles'

const ExpandMore = styled((props: any) => {
  const { expand, sx, ...other } = props
  return <IconButton {...other} sx={sx} />
})(({ theme, expand }: any) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

interface ExpandableSectionProps {
  title: string
  mdPath: string
  subtitle: string
}

export default function ExpandableSection({ title, mdPath, subtitle }: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(mdPath)
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch(() => {
        setContent('Erreur lors du chargement du contenu.')
        setLoading(false)
      })
  }, [mdPath])

  const firstParagraph = subtitle
  
  return (
    <Card
      sx={{
        mb: 3,
        border: '1px solid #ccc',
        cursor: 'pointer',
        position: 'relative',
        px: 4,
        pt: 5,
        pb: 2,
        '&:hover': { backgroundColor: 'rgba(0,0,0,0.02)' },
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <ExpandMore
        expand={expanded}
        onClick={(e: { stopPropagation: () => void }) => {
          e.stopPropagation()
          setExpanded(!expanded)
        }}
        aria-expanded={expanded}
        aria-label="expand"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 48,
          height: 48,
        }}
      >
        <ExpandMoreIcon sx={{ fontSize: 32 }} />
      </ExpandMore>

      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: -3 }}>
        {title}
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Box sx={{ mb: 1 }}>
            <ReactMarkdown>{firstParagraph}</ReactMarkdown>
          </Box>
        </>
      )}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2 }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      </Collapse>
    </Card>
  )
}
