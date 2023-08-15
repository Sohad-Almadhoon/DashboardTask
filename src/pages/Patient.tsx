import React from 'react'
import PatientInfo from '../components/PatientPage/PatientInfo'
import ImagesTabs from '../components/PatientPage/ImagesTabs'
import FinishedEventsTable from '../components/PatientPage/FinishedEventsTable'
import DevicesTable from '../components/PatientPage/DevicesTable'
import Box from '@mui/material/Box'
const Patient = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <PatientInfo />
      <Box>
        <ImagesTabs />
        <DevicesTable />
        <FinishedEventsTable />
      </Box>
    </Box>
  )
}

export default Patient
