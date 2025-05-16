import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
  Link
} from '@mui/material'
import Icon from 'src/@core/components/icon'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  customScrollbar: {
    '&::-webkit-scrollbar': {
      width: '8px' // Scrollbar width
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px grey',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgb(120 126 255 / 70%)',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'rgb(120 126 255 / 50%)'
    }
  }
})

const MostViewedPost = ({ theme }) => {
  const classes = useStyles()

  const rows = [
    {
      image: 'https://via.placeholder.com/150',
      caption:
        'A leather jacket can last several years or even decades if properly maintained lorem lipsum A leather jacket can last several years or even decades if properly maintained lorem lipsumA leather jacket can last several years or even decades if properly maintained lorem lipsum jacket can last several years or even decades if properly maintained lorem lipsumA leather jacket can last several years or even decades if properly maintained lorem lipsum',
      date: 'Friday, 15 December 2023',
      views: '163,809,394',
      likes: '1,534,513',
      comments: '25,301'
    },
    {
      image: 'https://via.placeholder.com/150',
      caption: 'A leather jacket can last several years or even decades if properly maintained...',
      date: 'Friday, 15 December 2023',
      views: '163,809,394',
      likes: '1,534,513',
      comments: '25,301'
    },
    {
      image: 'https://via.placeholder.com/150',
      caption: 'A leather jacket can last several years or even decades if properly maintained...',
      date: 'Friday, 15 December 2023',
      views: '163,809,394',
      likes: '1,534,513',
      comments: '25,301'
    },
    {
      image: 'https://via.placeholder.com/150',
      caption: 'A leather jacket can last several years or even decades if properly maintained...',
      date: 'Friday, 15 December 2023',
      views: '163,809,394',
      likes: '1,534,513',
      comments: '25,301'
    },
    {
      image: 'https://via.placeholder.com/150',
      caption: 'A leather jacket can last several years or even decades if properly maintained...',
      date: 'Friday, 15 December 2023',
      views: '163,809,394',
      likes: '1,534,513',
      comments: '25,301'
    },
    {
      image: 'https://via.placeholder.com/150',
      caption: 'A leather jacket can last several years or even decades if properly maintained...',
      date: 'Friday, 15 December 2023',
      views: '163,809,394',
      likes: '1,534,513',
      comments: '25,301'
    },
    {
      image: 'https://via.placeholder.com/150',
      caption: 'A leather jacket can last several years or even decades if properly maintained...',
      date: 'Friday, 15 December 2023',
      views: '163,809,394',
      likes: '1,534,513',
      comments: '25,301'
    }
  ]

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer className={classes.customScrollbar} sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: 'center' }}>Image</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>Caption</TableCell>
              <TableCell sx={{ textAlign: 'center', borderLeft: '1px solid #EAEAFF30' }}>Views</TableCell>
              <TableCell
                sx={{ textAlign: 'center', borderRight: '1px solid #EAEAFF30', borderLeft: '1px solid #EAEAFF30' }}
              >
                Likes
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                <TableCell sx={{ width: '20%', textAlign: 'center' }}>
                  <Box
                    component='img'
                    sx={{
                      height: '100%',
                      width: 'auto',
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 450 }
                    }}
                    alt={`Image ${index + 1}`}
                    src={row.image}
                  />
                </TableCell>
                <TableCell sx={{ width: '50%' }}>
                  <Box display='flex' flexDirection='column'>
                    <Box className={classes.customScrollbar} sx={{ maxHeight: '100px', overflowY: 'auto' }}>
                      {row.caption}
                    </Box>
                    <Box
                      display='flex'
                      flexDirection='row'
                      justifyContent='space-between'
                      sx={{ borderTop: '1px solid #EAEAFF20', borderBottom: '1px solid #EAEAFF20', py: 3, my: 3 }}
                    >
                      <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>by Jeevesindonesia</Typography>
                      <Typography sx={{ fontSize: '12px', color: '#EAEAFF60' }}>Friday, 29 December 2023</Typography>
                    </Box>
                    <Box display='flex' flexDirection='row' justifyContent='space-between'>
                      <Box
                        display='flex'
                        alignItems='center'
                        sx={{
                          color: '#DF9F23'
                        }}
                      >
                        <Icon icon='mdi:crown' />
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#DF9F23',
                            fontWeight: 'bold',
                            padding: '3px 0 0 3px'
                          }}
                        >
                          {index + 1}
                        </Typography>
                      </Box>
                      <Link sx={{ fontSize: '12px', color: '#EAEAFF60' }} href='https://instagram.com'>
                        See Instagram Posts
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ width: '10%', textAlign: 'center', borderLeft: '1px solid #EAEAFF30' }}>
                  {row.views}
                </TableCell>
                <TableCell
                  sx={{
                    width: '10%',
                    textAlign: 'center',
                    borderRight: '1px solid #EAEAFF30',
                    borderLeft: '1px solid #EAEAFF30'
                  }}
                >
                  {row.likes}
                </TableCell>
                <TableCell sx={{ width: '10%', textAlign: 'center' }}>{row.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default MostViewedPost
