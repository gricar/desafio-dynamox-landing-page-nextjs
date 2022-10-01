import { NextPage } from 'next';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
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
          <Button href="https://dynamox.net/">
            <Image
              src="/images/logo-dynamox.png"
              alt="logo-dynamox"
              width={220}
              height={80}
            />
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            minWidth: 400,
            justifyContent: 'space-around',
          }}
        >
          {buttons.map(({ name, to }) => (
            <Button
              key={name}
              href={to ? to : `#${name.toLowerCase()}`}
              sx={{ color: 'text.primary' }}
            >
              {name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
