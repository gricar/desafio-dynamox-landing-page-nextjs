import { NextPage } from 'next';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

const typeOfsensors = ['TcA+', 'AS', 'HF'];

const Sensores: NextPage = () => {
  return (
    <Box
      id="sensores"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '1280px',
        height: '820px',
        color: 'text.secondary',
      }}
    >
      <Typography
        gutterBottom
        fontWeight="fontWeightBold"
        sx={{
          fontSize: '40px',
        }}
      >
        Sensores para Manutenção Preditiva
      </Typography>
      <Typography
        gutterBottom
        fontWeight="fontWeightRegular"
        sx={{
          fontSize: '24px',
          minWidth: '900px',
          maxWidth: '1000px',
          textAlign: 'center',
        }}
      >
        Opções de sensores sem fio, ou DynaLoggers com sensores de vibração
        triaxial e temperatura embarcados, que comunicam por Bluetooth com o App
        mobile ou Gateway, registrando os dados monitorados em sua memória
        interna. Por conexão internet esses dados são centralizados na
        Plataforma DynaPredict Web para análise, prognóstico e tomada de
        decisão.
      </Typography>
      <Button
        variant="contained"
        href="https://dynamox.net/dynapredict/"
        size="large"
        sx={{ width: '160px' }}
      >
        Ver mais
      </Button>
      <Box sx={{ display: 'flex' }}>
        {typeOfsensors.map((type) => (
          <Box
            key={type}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              src={`/images/sensor-${type}.png`}
              alt={`sensor-${type}`}
              width={280}
              height={300}
            />
            <Typography
              gutterBottom
              fontWeight="fontWeightBold"
              sx={{ fontSize: '40px' }}
            >
              {type}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sensores;
