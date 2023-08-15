import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import UploadedImages from './UploadedImages'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box mb={5} mt={5}>
      <Typography
        sx={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
        mb={2}
      >
        Uploaded Photos
      </Typography>
      <Box
        sx={{
          display: 'flex',
          borderRadius: '15px',
          overflow: 'hidden',
        }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            background: '#eee',
            minWidth: 180,
            '.MuiTabs-indicator': {
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.1)',
            },
          }}
          textColor="inherit"
        >
          <Typography
            sx={{
              fontSize: 15,
            }}
            py={2}
            color="GrayText"
            textAlign="center"
          >
            Select Month
          </Typography>
          <Tab
            sx={{
              border: 'none',
              textAlign: 'center',
              maxWidth: '100%',
            }}
            label="Jun 2022"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              border: 'none',
              textAlign: 'center',
              maxWidth: '100%',
            }}
            label="Sep 2022"
            {...a11yProps(1)}
          />
        </Tabs>
        <Box flex={1} overflow="auto">
          <UploadedImages />
          {/* <TabPanel value={value} index={0}>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UploadedImages />
          </TabPanel> */}
        </Box>
      </Box>
    </Box>
  )
}
