import React, { useEffect, useState } from 'react';
import {
  AppBar,
  TextField,
  Box,
  Toolbar,
  Typography,
  Container,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/icon.png';
import UserInfo from '../components/UserInfo';
import { ArrowRightRounded } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useAtom } from 'jotai';
import { openDrawer, needDrawer } from '../store';

const Header = () => {
  const [drawerState, setDrawerState] = useAtom(openDrawer);
  const [nDrawer, setDrawer] = useAtom(needDrawer);

  useEffect(() => {
    setDrawer(false);
  })

  const handleOpenDrawer = () => {
    setDrawerState(!drawerState)
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <AppBar
      position="sticky"
      color='transparent'
      sx={{ height: 60, paddingLeft: drawerState ? 20 : 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          {nDrawer &&
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenDrawer}
            >
              <ArrowRightRounded />
            </IconButton>
          }
          <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 100,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width: 50,
              height: 50
            }}
          >
            <img src={Logo} alt="workabus" className="object-fill h-5 w-5 ..." />
          </Typography>
          <form onSubmit={handleSearch}>
              <TextField
                required
                value={searchQuery}
                size='small'
                id="search-input"
                className="text"
                variant="outlined"
                placeholder="Search Jobs, Courses, Certificates..."
                onFocus={ () => setFocus(true)}
                onBlur={ () => setFocus(false)}
                onInput={(e) => {
                  setSearchQuery(e.target.value);
                }}
                sx={{
                  paddingLeft:5,
                  // marginLeft:"auto",
                  // marginRight:"auto"
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: '10px',
                    width: focus ? '500px':'350px',
                    transition: 'width 0.2s ease-in-out'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />  
            </form>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <UserInfo />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;