import { Box, Button, TextField, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DialogBox from './DialogBox';

const Contato: NextPage = () => {
  const [userName, setUserName] = useState<string>('');
  const [userCompany, setUserCompany] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const userData = { userName, userCompany, userEmail, userPhone };

  return (
    <Box
      id="contato"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: '#263252',
        width: '1380px',
        height: '500px',
      }}
    >
      <Typography
        fontWeight="fontWeightBold"
        sx={{
          fontSize: '30px',
          lineHeight: '35px',
        }}
      >
        Ficou com dúvida?
      </Typography>
      <Typography
        gutterBottom
        fontWeight="fontWeightBold"
        sx={{
          fontSize: '30px',
          lineHeight: '35px',
        }}
      >
        Nós entramos em contato com você
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            width: '30vw',
            background: '#fff',
            input: {
              color: 'text.secondary',
              textAlign: 'center',
              fontSize: '16px',
            },
            label: { fontSize: '16px' },
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            id="username"
            label="Como gostaria de ser chamado?"
            type="text"
            variant="filled"
            sx={{ borderRadius: '8px' }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            id="company"
            label="Em qual empresa você trabalha?"
            type="text"
            variant="filled"
            sx={{ borderRadius: '8px' }}
            value={userCompany}
            onChange={(e) => setUserCompany(e.target.value)}
          />
          <TextField
            id="email"
            label="Digite aqui o seu email"
            type="email"
            variant="filled"
            sx={{ borderRadius: '8px' }}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <TextField
            id="phone"
            label="Qual o seu telefone?"
            type="tel"
            variant="filled"
            sx={{ borderRadius: '8px' }}
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="button"
          onClick={() => setOpen(true)}
          value="Enviar"
          sx={{
            color: 'text.primary',
            background: '#0165DB',
            width: '160px',
            mt: '15px',
          }}
        >
          Enviar
        </Button>
      </Box>
      <DialogBox
        open={open}
        userData={userData}
        onClose={() => setOpen(false)}
      />
    </Box>
  );
};

export default Contato;
