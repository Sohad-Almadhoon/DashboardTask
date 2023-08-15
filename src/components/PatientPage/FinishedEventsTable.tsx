import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import data from '../../utils/data/eventsRows.json'
import { Events } from '../../types'
import { Typography } from '@mui/material'
export default function FinishedEventsTable() {
  //@ts-ignore
  const events: Events[] = data.eventsRows
  const columns: GridColDef[] = Object.keys(events[0]).map(column => ({
    field: column,
    headerName: column,
    flex: 1,
    minWidth: 150,
  }))
  return (
    <Box sx={{ height: 400, width: '100%' }} mb={5} mt={5}>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 'bold',
        }}
        mb={2}
      >
        Patient Finished Events
      </Typography>
      <DataGrid
        rows={events}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  )
}
