import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { deleteItem } from '../services/api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: indigo[400],
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: { fontSize: 14 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover },
  '&:last-child td, &:last-child th': { border: 0 },
}));

const ProductTable = ({ rows }) => {
  const reload = () => {
    window.location.reload(false);
  };

  const handleDelete = async (itemId) => {
    await deleteItem(itemId);
    reload();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Data de Fabricação</StyledTableCell>
            <StyledTableCell align="center">Produto Perecível</StyledTableCell>
            <StyledTableCell align="center">Data de Validade</StyledTableCell>
            <StyledTableCell align="center">Preço</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
            <StyledTableCell align="center">Remover</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ({
              id,
              dataDeFabricacao,
              dataDeValidade,
              nome,
              preco,
              produtoPerecivel,
            }) => (
              <StyledTableRow key={id}>
                <StyledTableCell align="center">{nome}</StyledTableCell>
                <StyledTableCell align="center">
                  {dataDeFabricacao}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {produtoPerecivel ? 'Sim' : 'Não'}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {dataDeValidade}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {`R$ ${preco}`}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
