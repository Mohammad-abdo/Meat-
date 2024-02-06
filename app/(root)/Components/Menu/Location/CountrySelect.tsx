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
      width: 190,
      backgroundColor:'#f5cf9c',
      border:'white'
    
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
      <FormControl sx={{ m: 1, width: 190, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
      className=' bg-[#f5cf9c] focus:border-none'
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <em >Choose a Location</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em >Choose a Location</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
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
