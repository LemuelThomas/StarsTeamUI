import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface IProfileSceenProps{

}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    name: string,
    UID: number,
    FN: string,
    LN: string,
  ) {
    return { name, UID, FN, LN};
  }
  
  const rows = [
    createData('User1', 1, 'Lemuel', 'Thomas'),
    createData('User2', 2, 'Josue', 'Luna'),
    createData('User3', 3, 'Gerard', 'Paul'),
    createData('User4', 4, 'Trevor', 'Mwangi'),
    createData('User5', 5, 'Andre', 'Jefferson'),
    createData('User6', 6, 'Colin', 'Buckley'),
  ];
function ProfileScreen(props: IProfileSceenProps) {

    return (
    <>
            
        <div className='profilescreen'>
            <div className="profileScreen_body">
                <div className="settings">
                <Stack direction="row" spacing={2}>
                    <Button href="#text-buttons">Settings</Button>
                </Stack>
                </div>
                <div className = "profileScreen_info">
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell align="right">Account ID</StyledTableCell>
            <StyledTableCell align="right">First Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Last Name&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.UID}</StyledTableCell>
              <StyledTableCell align="right">{row.FN}</StyledTableCell>
              <StyledTableCell align="right">{row.LN}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
                    
                </div>
            </div>
        </div>
                    </> 
    )
}

export default ProfileScreen