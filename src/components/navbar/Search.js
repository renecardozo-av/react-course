import * as React from 'react';
import {
  Button,
  TextField,
  Autocomplete
} from '@mui/material';
import {blogList} from '../data/blogsData';

function AutocompleteSearch() {
  return (
   <>
    <Autocomplete
      disablePortal
      id='autocomplete-search'
      options={blogList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label='Blogs' />}
    />
    <Button variant='outlined'>Primary</Button>
   </>
  );
}
export default AutocompleteSearch;

