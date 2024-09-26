import { NextPage } from 'next';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import Image from 'next/image';

const buttons = [
  { name: 'DynaPredict', to: 'https://dynamox.net/dynapredict/' },
  { name: 'Sensores' },
  { name: 'Contato' },
];

const Header: NextPage = () => {
  return (
    <AppBar position="absolute" sx={{ boxShadow: 'none' }}>
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          margin: 2,
        }}
      >
        <Box sx={{ ml: 7 }}>
          <Link href="https://dynamox.net/" target="_blank" rel="noopener">
            <Image
              src="/images/logo-dynamox.png"
              alt="logo-dynamox"
              width={220}
              height={80}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            minWidth: 400,
            justifyContent: 'space-around',
          }}
        >
          {buttons.map(({ name, to }) => (
            <Link
              key={name}
              href={to ? to : `#${name.toLowerCase()}`}
              underline="none"
              target={to ? '_blank' : ''}
              rel={to ? 'noopener' : ''}
              sx={{
                color: 'text.primary',
                transition: 'transform 0.5s ease-out',
                ':hover': {
                  transform: 'scale(1.01, 1.01)',
                },
              }}
            >
              {name}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
