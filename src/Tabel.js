import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(date, For, Amount) {
  return { date, For, Amount};
}

const rows = [
  createData('Sep 04, 2018', 'Funds Pending Clearance(view order)', "$6"),
  createData('Sep 03, 2018', 'Funds Pending Clearance(view order)', "$9"),
  createData('Sep 03, 2018', 'Funds Pending Clearance(view order)', "$16"),
  createData('Sep 03, 2018', 'Funds Pending Clearance(view order)', "$3"),
  createData('Sep 02, 2018', 'Funds Pending Clearance(view order)', "$16"),
];

export const Tabel = () => {
  const classes = useStyles();

  return (
    <div className = 'main-table' style = {{marginTop: '28px'}}>    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style = {{width: '110px'}}>Date</TableCell>
            <TableCell>For</TableCell>
            <TableCell align = 'right'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell><button className = 'clearing'>CLEARING</button> {row.For}</TableCell>
              <TableCell align = 'right' style = {{color: '#1dbf73', fontWeight: 'bolder'}}>{row.Amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>  
  );
}
