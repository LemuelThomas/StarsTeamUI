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
import {Link, Navigate } from 'react-router-dom';
import { createContext } from 'react';
import { LoggedInUserType } from '../models/logged-in-user';


export interface IProfileSceenProps{
    UID: number,
    username: string
}

interface IProfileProps {
  currentUser: LoggedInUserType | undefined
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
    UID: number,
    username: string,
  ) {
    return {UID, username};
  }
  

  export type makeData={
    UID: number,
    username: string
  }

 

let rows = new Array<makeData>();  //<makeData>[];  
function ProfileScreen(props: IProfileProps) {
  console.log(props.currentUser?.authAccUsers)
  
  // const rows = [
    // while(props.currentUser?.authAccUsers != undefined){
    if (props.currentUser && props.currentUser.authAccUsers) {
      let i = 0;
      for(let loopUser of props.currentUser.authAccUsers){
        rows.push({UID:i++,username:loopUser}as makeData); // cast loopUser as makeData and push to add it to array
        // rows = [
        //   //createData()
        // ]
        
      }
    }
  
  // createData(1, 'Brother-D'),
    // createData(2, 'Aunty')
  // ];
    return (
      !props.currentUser ? <Navigate to="/login"/> :
    <>
            
        <div className='profilescreen'>
            <div className="profileScreen_body">
                <div className="settings">
                <Stack direction="row" spacing={2}>
                  <Link to={'/Settings'} >
                    <Button href="#text-buttons">Settings</Button>
                  </Link>
                    
                </Stack>
                </div>
                <div className = "profileScreen_info">
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell align="left">Username</StyledTableCell>
            {/* <StyledTableCell align="right">First Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Last Name&nbsp;</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <StyledTableRow key={row.UID}>
              <StyledTableCell component="th" scope="row">
                {row.UID}
              </StyledTableCell>
                {/* <StyledTableCell align="right">{row.UID}</StyledTableCell> */}
                <StyledTableCell align="left">{row.username}</StyledTableCell>
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