import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { green, red } from '@mui/material/colors';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  table: {
    maxWidth: 850,
  },
});

function createData(ID, CreationTime, ChangeTime, Status, Side, Price, Amount, Instrument) {
  return { ID, CreationTime, ChangeTime, Status, Side, Price, Amount, Instrument };
}

const rows = [
  createData(
    1,
    Date.now(),
    Date.now(),
    'Active',
    'Buy',
    8,
    111,
    'CNH/RUB',
  ),
  createData(
    2,
    Date.now(),
    Date.now(),
    'Active',
    'Sell',
    8.1144,
    111222,
    'CNH/RUB',
  ),
];

const titles = [
  'ID',
  'Creation time',
  'Change time',
  'Status',
  'Side',
  'Price',
  'Amount',
  'Instrument',
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ border: 'black', borderStyle: 'solid' }}>
            {titles.map(title => (
              <TableCell
                // key={title}
                style={{ border: 'black', borderStyle: 'solid' }}
                sx={{ fontWeight: 'bold' }}
                align="center"
              >
                <Box sx={{ fontWeight: 'bold' }}>{title}</Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow style={{ border: 'black', borderStyle: 'solid', fontWeight: 'bold' }} key={row.ID}
                      color={green[50]}>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                {row.ID}
              </TableCell>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                {row.CreationTime}
              </TableCell>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                {row.ChangeTime}
              </TableCell>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                {row.Status}
              </TableCell>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                <Box sx={row.Side === 'Buy' ? { color: green[500] } : { color: red[500] }}>
                  {row.Side}
                </Box>
              </TableCell>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                {
                  <Box sx={row.Side === 'Buy' ? { color: green[500] } : { color: red[500] }}>
                    {row.Price}
                  </Box>
                }
              </TableCell>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                <Box sx={row.Side === 'Buy' ? { color: green[500] } : { color: red[500]}}>
                  {row.Amount}
                </Box>
              </TableCell>
              <TableCell
                // key={row.ID}
                component="th" scope="row"
                style={{ borderStyle: 'solid' }}
                align="center"
              >
                {row.Instrument}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}