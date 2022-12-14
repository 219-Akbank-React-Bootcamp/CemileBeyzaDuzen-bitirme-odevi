import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Logout } from '@mui/icons-material';
import { useState } from 'react';
import { Box, IconButton, Menu } from '@mui/material';
import MoreVertRounded from '@mui/icons-material/MoreVertRounded';
import { logoutRequest } from '../../store/auth/authActions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/reducers';

export const BoardListMenu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutRequest());
  }

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        color='secondary'
      >
        <MoreVertRounded sx={{ color: 'primary.contrastText' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize='small' />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box >
  );
}
