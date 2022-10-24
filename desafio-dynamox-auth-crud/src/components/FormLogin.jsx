import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  InputAdornment,
  Snackbar,
  OutlinedInput,
} from '@mui/material';
import {
  AccountCircle,
  Login,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { userLogin } from '../redux/slice/loginSlice';
import { validateLogin } from '../services/api';
import { SetData } from '../services/storage';
import validateCredentials from '../utils/validateLogin';

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [notFoundUser, setNotFoundUser] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
    const credentialsCheck = validateCredentials(credentials);
    setIsSubmitBtnDisabled(credentialsCheck);
  };

  const handleSubmit = async () => {
    const userRegistered = await validateLogin(credentials);
    if (userRegistered) {
      const { email } = credentials;
      dispatch(userLogin({ email, accessToken: userRegistered.accessToken }));
      SetData('accessToken', userRegistered.accessToken);
      navigate('/products');
    } else {
      setNotFoundUser(true);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="E-mail">E-mail</InputLabel>
          <OutlinedInput
            id="email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
            label="E-mail"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={credentials.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Button
        variant="contained"
        type="button"
        disabled={isSubmitBtnDisabled}
        endIcon={<Login />}
        onClick={handleSubmit}
        sx={{
          width: '160px',
          mt: '15px',
        }}
      >
        Login
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={notFoundUser}
        autoHideDuration={3000}
        onClose={() => setNotFoundUser(false)}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          Usuário não cadastrado
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormLogin;
