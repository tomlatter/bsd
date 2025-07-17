import { useState, useEffect, useRef } from 'react'
import {
  Card,
  Collapse,
  Typography,
  IconButton,
  CircularProgress,
  Box,
  Link
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
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const next = !expanded
    setExpanded(next)
    if (next) {
      window.history.pushState(null, '', `#${id}`)
    }
  }

  // Fetch content
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

  // Auto-expand if URL hash matches
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash === id) {
      setExpanded(true)
    }
  }, [id])

  // Scroll only after expand + loading
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (expanded && !loading && hash === id && cardRef.current) {
      setTimeout(() => {
        const top = cardRef.current!.getBoundingClientRect().top + window.scrollY - 79
        window.scrollTo({ top, behavior: 'smooth' })
      }, 300)
    }
  }, [expanded, loading, id])


  return (
    <Card
      ref={cardRef}
      id={id}
      sx={{
        mb: 2,
        border: !expanded ? '1px solid #ccc' : '3px solid #70124f',
        maxHeight: !expanded ? '120px' : undefined,
        cursor: 'pointer',
        position: 'relative',
        px: { xs: 3, md: 4 },
        pt: 5,
        pb: 2,
        '&:hover': { backgroundColor: !expanded ? 'rgba(0,0,0,0.02)' : '#fff' },
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

      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ mt: -3, fontSize: { xs: '1.1rem', md: '1.5rem' } }}
      >
        {title}
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ mb: 1 }}>
          <ReactMarkdown>{subtitle}</ReactMarkdown>
        </Box>
      )}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2 }}>
          {/* If it's a PDF show a button and embed it */}
          {mdPath.endsWith(".pdf") ? (
            <><Link
              href={mdPath}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-block',
                fontWeight: 'bold',
                color: 'primary.main',
                textDecoration: 'none',
                p: 2,
                border: '1px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
              }}
            >
              📄 Voir / Télécharger le document
            </Link>
            <Box
              component="iframe"
              src={mdPath}
              sx={{
                width: '100%',
                height: '600px',
                border: 'none',
                borderRadius: 2,
                mt:2
              }}
            />
            </>
          ) : (
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold' }} {...props} />
              ),
              h2: ({ node, ...props }) => (
                <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 600, color: 'primary.main' }} {...props} />
              ),
              h3: ({ node, ...props }) => (
                <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 1.5, fontWeight: 500 }} {...props} />
              ),
              p: ({ node, ...props }) => (
                <Typography variant="body1" paragraph sx={{ mt: 1.5 }} {...props} />
              ),
              ul: ({ node, ...props }) => (
                <Box component="ul" sx={{ pl: 4, mt: 1.5, mb: 2, listStyleType: 'disc' }} {...props} />
              ),
              ol: ({ node, ...props }) => (
                <Box component="ol" sx={{ pl: 4, mt: 1.5, mb: 2, listStyleType: 'decimal' }} {...props} />
              ),
              li: ({ node, ...props }) => (
                <Box component="li" sx={{ mb: 1 }} {...props} />
              ),
              a: ({ node, ...props }) => (
                <Link href={props.href} target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.dark', fontWeight: 500 }}>
                  {props.children}
                </Link>
              ),
              img: ({ node, ...props }) => (
                <Box component="img" {...props} sx={{ display: 'block', margin: '1rem auto', maxWidth: '100%', borderRadius: 2 }} />
              ),
              blockquote: ({ node, ...props }) => (
                <Box
                  component="blockquote"
                  sx={{
                    fontStyle: 'italic',
                    borderLeft: '4px solid',
                    borderColor: 'primary.light',
                    pl: 2,
                    my: 3,
                    color: 'text.secondary',
                  }}
                >
                  {props.children}
                </Box>
              ),
              /** ✅ Table Support */
              table: ({ node, ...props }) => (
                <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', my: 3 }} {...props} />
              ),
              thead: ({ node, ...props }) => (
                <Box component="thead" sx={{ backgroundColor: 'grey.100' }} {...props} />
              ),
              tbody: ({ node, ...props }) => <Box component="tbody" {...props} />,
              tr: ({ node, ...props }) => (
                <Box
                  component="tr"
                  sx={{
                    '&:nth-of-type(even)': { backgroundColor: 'grey.50' },
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                  {...props}
                />
              ),
              th: ({ node, ...props }) => (
                <Box
                  component="th"
                  sx={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    border: '1px solid',
                    borderColor: 'divider',
                    p: 1,
                  }}
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <Box
                  component="td"
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    p: 1,
                  }}
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
          )}
        </Box>
      </Collapse>
    </Card>
  )
}
