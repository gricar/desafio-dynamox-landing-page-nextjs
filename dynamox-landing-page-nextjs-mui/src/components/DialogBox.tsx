import {
  Alert,
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Snackbar,
} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

export interface DialogBoxProps {
  open: boolean;
  onClose: () => void;
  userData: {
    userName: string;
    userCompany: string;
    userEmail: string;
    userPhone: string;
  };
}

const DialogBox: React.FC<DialogBoxProps> = ({ onClose, open, userData }) => {
  const { userName, userCompany, userEmail, userPhone } = userData;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle
        color="text.secondary"
        fontWeight="fontWeightBold"
        sx={{ fontSize: '24px', textAlign: 'center' }}
      >
        Dados de Contato
      </DialogTitle>
      <List sx={{ pt: 0, pb: 3, fontSize: '10px' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ color: 'text.secondary' }}>
              <PersonIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={userName} sx={{ color: 'text.secondary' }} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ color: 'text.secondary' }}>
              <ApartmentIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={userCompany}
            sx={{ color: 'text.secondary' }}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ color: 'text.secondary' }}>
              <EmailIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={userEmail} sx={{ color: 'text.secondary' }} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ color: 'text.secondary' }}>
              <PhoneIcon fontSize="small" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={userPhone} sx={{ color: 'text.secondary' }} />
        </ListItem>
      </List>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        color="sucess"
        autoHideDuration={5000}
        onClose={onClose}
        message="I love snacks"
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Dados enviados com sucesso!
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default DialogBox;
