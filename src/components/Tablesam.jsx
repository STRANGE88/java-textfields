// //import { StyledEngineProvider, Table, TableBody, TableCell,
//      TableContainer, TableHead, TableRow } from '@mui/material'
// //import React from 'react'
// import { styled } from '@mui/material/styles';
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));

// const Tablesam = () => {
//     var p=[{name:"Neerj",age:20,place:"ijk"},
//     {name:"DEEPAK",age:21,place:"valoor"},
//     {name:"NIKHIL",age:17,place:"kallur"}
// ] export default function CustomizedTables() {
//   return (
//     <TableContainer>
//           <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//         <TableRow>
//             <StyledTableCell>Name</StyledTableCell>
//             <TableCell align="right">Age</TableCell>
//             <TableCell align="right">Place</TableCell>
//         </TableRow>
        
//         </TableHead>
//         <TableBody>
//             {p.map((value,index)=>{
//                 return <TableRow>
//                    <TableCell key={index}>{value.name}</TableCell>,
//                    <TableCell key={index} align="left">{value.name}</TableCell>,
//                    <TableCell key={index} align="left">{value.name}</TableCell> 
//                 </TableRow>
//             })}
//         </TableBody>

//         </Table>
//     </TableContainer>
//   )
// }

// export default Tablesam
