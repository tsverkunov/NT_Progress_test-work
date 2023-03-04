import React, { useState } from 'react';
import { FormControl, InputBase, InputLabel, MenuItem, Select, styled } from '@mui/material';

const Ticker = () => {
  const [instrument, setInstrument] = useState('')
  const [amount, setAmount] = useState('')

  const handleChange = (e) => {
    setInstrument(e.target.value)
  }

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));



  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        {/*<InputLabel id="demo-simple-select-autowidth-label">Instrument</InputLabel>*/}
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={instrument}
          onChange={handleChange}
          autoWidth
          label="Instrument"
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

      {/*<FormControl sx={{ m: 1, minWidth: 180 }}>*/}

      {/*  /!*<InputLabel id="demo-simple-select-label">Amount</InputLabel>*!/*/}
      {/*  <Select*/}
      {/*    labelId="demo-simple-select-label"*/}
      {/*    id="demo-simple-select"*/}
      {/*    value={amount}*/}
      {/*    onChange={handleChange}*/}
      {/*    autoWidth*/}
      {/*    label="Amount"*/}
      {/*  >*/}
      {/*    <MenuItem value="">*/}
      {/*      <em>None</em>*/}
      {/*    </MenuItem>*/}
      {/*    <MenuItem value={10}>Twenty</MenuItem>*/}
      {/*    <MenuItem value={21}>Twenty one</MenuItem>*/}
      {/*    <MenuItem value={22}>Twenty one and a half</MenuItem>*/}
      {/*  </Select>*/}
      {/*</FormControl>*/}
    </div>
  );
};

export default Ticker;