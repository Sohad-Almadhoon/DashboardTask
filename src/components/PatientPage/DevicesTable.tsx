import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import data from '../../utils/data/devicesRows.json'
import { Device } from '../../types'
import { Typography } from '@mui/material'

export default function DevicesTable() {
  const devices: Device[] = data.devicesRows
  const columns: GridColDef[] = Object.keys(devices[0]).map(column => ({
    field: column,
    headerName: column,
    flex: 1,
    minWidth: 150,
  }))

  return (
    <Box sx={{ height: 400, width: '100%' }} mb={8} mt={5}>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 'bold',
        }}
        mb={2}
      >
        Devices
      </Typography>
      <DataGrid
        sx={{
          maxWidth: '100%',
          overflowX: 'auto',
        }}
        getRowId={Math.random}
        rows={devices}
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
