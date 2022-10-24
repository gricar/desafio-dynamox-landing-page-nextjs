import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const GoToHome = () => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <Button style={{ marginBottom: 15 }} startIcon={<HomeIcon />}>
      Voltar para página principal
    </Button>
  </Link>
);

export default GoToHome;
