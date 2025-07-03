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
  id: string
  title: string
  mdPath: string
  subtitle: string
}

export default function ExpandableSection({ title, mdPath, subtitle, id }: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const next = !expanded
    setExpanded(next)

    if (next) {
      window.history.pushState(null, '', `#${id}`)
    }
  }

  useEffect(() => {
    fetch(mdPath)
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
        setLoading(false)

        // Auto-expand if hash matches this section's ID
        if (window.location.hash === `#${id}`) {
          setExpanded(true)
          // Scroll to this section (optional)
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }
      })
      .catch(() => {
        setContent('Erreur lors du chargement du contenu.')
        setLoading(false)
      })
  }, [mdPath, id])


  const firstParagraph = subtitle
  
  return (
    <Card
      id={id}
      sx={{
        mb: 2,
        border: !expanded ? '1px solid #ccc' : '3px solid #70124f',
        maxHeight: !expanded ? '120px' : null,
        cursor: 'pointer',
        position: 'relative',
        px: {xs: 3, md: 4},
        pt: 5,
        pb: 2,
        '&:hover': { backgroundColor: !expanded ? 'rgba(0,0,0,0.02)' : '#fff'},
      }}
      onClick={() => {
        const next = !expanded
        setExpanded(next)
        if (next) {
          window.history.pushState(null, '', `#${id}`)
        }
      }}
    >
      <ExpandMore
        expand={expanded}
        onClick={handleToggle}
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

      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: -3, fontSize: {xs: '1.1rem', md: '1.5rem'}, }}>
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
