import { Dialog, DialogTitle } from '@mui/material';
import FormProduct from './FormProduct';

const EditBox = ({ onClose, open, item }) => (
  <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs">
    <DialogTitle sx={{ textAlign: 'center' }}>Edição do produto</DialogTitle>
    <FormProduct action="Salvar" item={item} />
  </Dialog>
);

export default EditBox;
