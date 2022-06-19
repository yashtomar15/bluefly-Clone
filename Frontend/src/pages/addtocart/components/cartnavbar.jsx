import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {

    console.info('You clicked a breadcrumb.');
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/cart" onClick={handleClick}>
      Cart
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/cart/information"
      onClick={handleClick}
    >
      Information
    </Link>,
        <Link
        underline="hover"
        key="3"
        color="inherit"
        href="/cart/information"
        onClick={handleClick}
      >
        Shipping
      </Link>,
          <Link
          underline="hover"
          key="4"
          color="inherit"
          href="/cart/information"
          onClick={handleClick}
        >
         Payment
        </Link>

  ];
export const Cartnavbar = () => {
  return (
    <div>
        <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  )
}
