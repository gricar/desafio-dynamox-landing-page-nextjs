import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Home = () => (
  <AppBar position="static" component="nav">
    <Toolbar>
      <Typography sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
        Home
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: '#fff' }} startIcon={<ListAltIcon />}>
            Listar produtos
          </Button>
        </Link>
        <Link to="/products/create" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: '#fff' }} startIcon={<AddIcon />}>
            Cadastrar produto
          </Button>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Home;
