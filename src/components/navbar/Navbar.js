import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import AutocompleteSearch from './Search';

function NavBar({routes}) {

  const navigate = useNavigate();


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map(route => (
              <Button
                key={`${route.path}+${route.name}`}
                onClick={() => navigate(route.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {route.name}
              </Button>
            ))}
          </Box>

          <Box sx={
            {
              display:'flex',
              justifyItems: 'space-between',
              flexGrow: 0,
            }
          }>
            <AutocompleteSearch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;