import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

import './style.css';
import Button from '../Button';
import { SvgIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';

import PostAddIcon from '@mui/icons-material/PostAdd';

const UserHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // const username = localStorage.getItem('username');
  return (
    <>
      <Typography variant='h5' component='div'>
        {/* Oi, {username} */}
        CampusJuntos
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
        <Link
          className={`link-button ${pathname === '/novopost' && '__active'}`}
          to='/novopost'
        >
          <SvgIcon component={PostAddIcon} />
        </Link>
        <Link
          className={`link-button ${pathname === '/posts' && '__active'}`}
          to='/posts'
        >
          Publicações
        </Link>
        <Link
          className={`link-button ${pathname === '/myposts' && '__active'}`}
          to='/myposts'
        >
          Minhas publicações
        </Link>
        <Button text='Sair' variant='text' onClick={() => handleLogout()} />
      </Box>
    </>
  );
};

export default UserHeader;
