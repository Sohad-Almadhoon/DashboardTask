import { Grid } from '@mui/material'
import ImageCard from './ImageCard'
const UploadedImages = () => {
  return (
    <Grid
      flexWrap="nowrap"
      width="100%"
      overflow="auto"
      spacing={0}
      container
      sx={{ display: 'flex' }}
    >
      {['front', 'Back', 'Top', 'Left', 'Right'].map(dir => (
        <ImageCard text={dir} />
      ))}
    </Grid>
  )
}

export default UploadedImages
