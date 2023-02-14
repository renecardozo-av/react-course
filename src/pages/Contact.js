import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  TablePagination,
  Typography
} from '@mui/material';
import {useState} from 'react';
import {usersData} from '../components/data/usersData';

function Contact() {
  const [userList, setUserList] = useState(usersData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: '25px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label='users table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='center'>Username</TableCell>
                  <TableCell align='center'>Email</TableCell>
                  <TableCell align='center'>Phone</TableCell>
                  <TableCell align='center'>Company</TableCell>
                  <TableCell align='center'>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(user => {
                  return (
                    <TableRow
                      key={user.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      
                      <TableCell component='th' scope='row'>{user.name}</TableCell>
                      <TableCell align='center'>{user.username}</TableCell>
                      <TableCell align='center'>{user.email}</TableCell>
                      <TableCell align='center'>{user.phone}</TableCell>
                      <TableCell align='center'>{user.company.name}</TableCell>
                      <TableCell align='center'>
                        <Link href='#'>more...</Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component='div'
            count={userList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;