import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './NavBar.css';

const pages = ['Home', 'About', 'Services', 'Staff', 'Testimonials'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    // <div className="max-sm:pl-0 max-sm:pr-0 pl-[4px] pr-[4px] top-0">
    <AppBar position="sticky" className='navContainer ps-16 pr-16 max-sm:ps-0 max-sm:pr-0 max-lg:ps-6 max-lg:pr-6 Home max-sm:ml-0 max-sm:mr-0 w-auto ml-[4px] mr-[4px] '>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontSize: '29px',
              color: 'white',
              textDecoration: 'none',
            }}
            className='pageLogo text-6xl'
          >
            <ScrollLink activeClass="active" to='Home' spy={true} smooth={true} offset={-250} duration={600} >Enrich.</ScrollLink>
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <ScrollLink activeClass="active" to={page} spy={true} smooth={true} offset={-250} duration={600} >{page}</ScrollLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            className='pageLogo-sm'
          >
            <span className='text-xl'>Enrich</span>
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            className="pageBox"
          >
            {pages.map((page, idx) => (
              page === 'Home' ? <ScrollLink key={idx} sx={{ my: 2, color: 'white', display: 'block' }} className='pageButton cursor-pointer uppercase transition-all hover:scale-125 text-lg' activeClass="active" to={page} spy={true} smooth={true} offset={-250} duration={600} >{page}</ScrollLink> : <ScrollLink key={idx} sx={{ my: 2, color: 'white', display: 'block' }} className='pageButton cursor-pointer transition-all uppercase hover:scale-125 text-lg' activeClass="active" to={page} spy={true} smooth={true} offset={-100} duration={600} >{page}</ScrollLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <RouterLink to={'book'}><Button sx={{ color: 'white' }} className='bookButton'> <span className='max-sm:text-sm'>Book Now</span> </Button></RouterLink>
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // </div>
  );
}
export default ResponsiveAppBar;
