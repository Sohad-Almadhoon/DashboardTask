import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function ImageCard({ src, text }: { src: string; text: string }) {
  return (
    <Grid sx={{ minWidth: 250 }} item xs={2}>
      <Card sx={{ width: 250, px: 3, py: 2, border: '1px solid #eee', boxShadow: 2 }}>
        <CardMedia
          sx={{ height: 180, width: 180, mx: 'auto' }}
          image="https://source.unsplash.com/random"
        />
        <Typography mt={2} textAlign="center" variant="body1">
          {text}
        </Typography>
      </Card>
    </Grid>
  )
}
