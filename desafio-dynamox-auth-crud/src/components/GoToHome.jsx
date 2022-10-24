import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const GoToHome = () => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <Button style={{ mb: 6 }} startIcon={<HomeIcon />}>
      Voltar para página principal
    </Button>
  </Link>
);

export default GoToHome;
