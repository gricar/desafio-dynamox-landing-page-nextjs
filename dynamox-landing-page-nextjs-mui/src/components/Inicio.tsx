import { Container, Typography, Box } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';

const Inicio: NextPage = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundImage: 'url(/images/grafismo.png)',
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '100wh',
        color: 'text.primary',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'space-between',
          width: '470px',
          height: '450px',
          ml: 10,
          paddingTop: 25,
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontSize: '80px',
            fontWeight: 700,
            lineHeight: '94px',
          }}
        >
          Solução DynaPredict
        </Typography>
        <Image
          src="/images/logo-dynapredict.png"
          alt="logo-dynapredict"
          width="161px"
          height="32px"
        />
      </Box>
      <Box
        sx={{
          paddingTop: '50px',
          paddingRight: '70px',
        }}
      >
        <Image
          src="/images/desktop-and-mobile.png"
          alt="desktop-and-mobile.png"
          width={700}
          height={600}
        />
      </Box>
    </Container>
  );
};

export default Inicio;
