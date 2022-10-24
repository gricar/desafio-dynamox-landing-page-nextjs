import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  OutlinedInput,
} from '@mui/material';
import { createProduct, editItem } from '../services/api';
import validateProductInputs from '../utils/validateProduct';
import AlertPopUp from './AlertPopUp';

const FormProduct = ({ action, item }) => {
  const INITIAL_STATE = {
    nome: '',
    dataDeFabricacao: '',
    produtoPerecivel: false,
    dataDeValidade: '',
    preco: '',
  };

  const [product, setProduct] = useState(INITIAL_STATE);
  const [isDisabled, setIsDisabled] = useState(true);
  const [openStatus, setOpenStatus] = useState(false);

  const isPerecivel = [
    {
      value: true,
      label: 'Sim',
    },
    {
      value: false,
      label: 'Não',
    },
  ];

  const reload = () => {
    window.location.reload(false);
  };

  const reset = () => {
    setProduct(INITIAL_STATE);
    setOpenStatus(true);
    setIsDisabled(true);
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
    const productCheck = validateProductInputs(product);
    setIsDisabled(productCheck);
  };

  const handleSubmit = async ({ id }) => {
    if (action === 'Cadastrar') {
      await createProduct(product);
      reset();
    }
    if (action === 'Salvar') {
      await editItem(id, product);
      reset();
      reload();
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
    >
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        placeholder="Nome do produto"
        type="text"
        value={product.nome}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="dataDeFabricacao"
        name="dataDeFabricacao"
        label="Data de Fabricação"
        type="date"
        value={product.dataDeFabricacao}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="produtoPerecivel"
        name="produtoPerecivel"
        label="Produto Perecível"
        select
        placeholder="Selecione"
        value={product.produtoPerecivel}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      >
        {isPerecivel.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="dataDeValidade"
        name="dataDeValidade"
        label="Data de Validade"
        type="date"
        disabled={!product.produtoPerecivel}
        value={product.dataDeValidade}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <FormControl sx={{ m: 1, width: '30ch' }}>
        <InputLabel htmlFor="preco">Preço</InputLabel>
        <OutlinedInput
          id="preco"
          name="preco"
          type="number"
          label="Preço"
          value={product.preco}
          onChange={handleChange}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </FormControl>
      <Button
        variant="contained"
        type="button"
        disabled={isDisabled}
        onClick={() => handleSubmit(item)}
        sx={{
          width: '160px',
          mt: 1,
        }}
      >
        {action}
      </Button>
      <AlertPopUp
        openStatus={openStatus}
        setStatus={setOpenStatus}
        action={action}
      />
    </Box>
  );
};

export default FormProduct;
