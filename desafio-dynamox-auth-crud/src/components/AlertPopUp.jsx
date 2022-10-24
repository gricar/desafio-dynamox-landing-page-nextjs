import { Alert, Snackbar } from '@mui/material';

const AlertPopUp = ({ openStatus, setStatus, action }) => {
  const typesOfActions = {
    Cadastrar: 'cadastrado',
    Remover: 'removido',
    Salvar: 'alterado',
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={openStatus}
      color="sucess"
      autoHideDuration={3000}
      onClose={() => setStatus(false)}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        {`Produto ${typesOfActions[action]} com sucesso!`}
      </Alert>
    </Snackbar>
  );
};

export default AlertPopUp;
