import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  Box,
  Container,
} from '@mui/material';
import NavigationLinks from './links';


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #007BFF, #28A745)', py: 2 }}>
        <Container maxWidth={"xl"}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} component="nav" aria-labelledby="main navigation">
              <NavigationLinks />
            </List>
          </Toolbar>
      </Container>
        </AppBar>
    </Box>
  );
};

export default Header;