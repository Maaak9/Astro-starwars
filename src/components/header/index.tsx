import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
  useMediaQuery,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationLinks from './links';


const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #007BFF, #28A745)', py: 2 }}>
        <Container maxWidth={"xl"}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            {isDesktop ? (
              <List sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} component="nav" aria-labelledby="main navigation">
                <NavigationLinks />
              </List>
            ) : (
              <React.Fragment>
                <Drawer
                  anchor="right"
                  open={isDrawerOpen}
                  onClose={handleDrawerClose}
                >
                  <List>
                    <NavigationLinks />
                  </List>
                </Drawer>
                <MenuIcon
                  color="inherit"
                  onClick={handleDrawerOpen}
                  aria-label="menu"
                />
              </React.Fragment>
            )}
          </Toolbar>
      </Container>
        </AppBar>
    </Box>
  );
};

export default Header;