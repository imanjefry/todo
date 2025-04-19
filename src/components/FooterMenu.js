import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import './FooterMenu.css';

function FooterMenu() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/');
    if (newValue === 1) navigate('/category');
    if (newValue === 2) navigate('/reminds');
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleNavigation}
      showLabels
      style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 'auto' }}
    >
      <BottomNavigationAction label="Todos" icon={<ListIcon />} />
      <BottomNavigationAction label="Category" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Reminds" icon={<NotificationsIcon />} />
    </BottomNavigation>
  );
}

export default FooterMenu;