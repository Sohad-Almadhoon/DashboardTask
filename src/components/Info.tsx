import { Typography } from '@mui/material'

interface InfoProps {
  title: string
  info: string | number
}

const Info = ({ title, info }: InfoProps) => {
  return (
    <Typography
      sx={{
        fontSize: 15,
        fontWeight: 500,
      }}
      variant="body1"
      mb={1}
      mt={1}
    >
      {title}:
      <span
        style={{
          fontSize: 13,
          fontWeight: 200,
          color: '#999',
          marginLeft: '5px',
        }}
      >
        {info}
      </span>
    </Typography>
  )
}

export default Info
