import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {

    const state=useSelector((state)=>state)
    console.log(state,"carticon")
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={state.cart.cartdata.length} color="secondary">
        <LocalMallIcon />
      </StyledBadge>
    </IconButton>
  );
}