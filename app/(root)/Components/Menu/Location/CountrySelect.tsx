import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 170,
      backgroundColor:'#f5cf9c',
      border:'#ec8923',
     
    
    },
  },
};

const names = [
  'Egypt',
  'Ksa',
  'USA',
  'Emirate',
  'China',
  'Kanda',
  'India',
  'Jordan',
  'Gaza',
  'Newsland',
];

function getStyles(name: string, personName: string, theme: Theme) {
  return {
    fontWeight: personName === name ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

export default function SingleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value as string);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 170, mt: 3 ,border:'#ec8923'}}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
      className=' bg-[#fbc580]  hover:bg-[#dd9f4f] duration-20 focus:bg-[#e9862391] hover:text-white transition-all ease-in'
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <em className='text-sm' >Choose a Location</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="Choose a Location">
            <em className='text-sm'>Choose a Location</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              className='text-sm'
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
