import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Paginator from '../components/Paginator';
import ProductTable from '../components/ProductTable';
import GoToHome from '../components/GoToHome';
import usePagination from '../hooks/usePagination';
import { getAll } from '../services/api';

const ListProducts = () => {
  const [produtos, setProdutos] = useState([]);

  const ITEMS_PER_PAGE = 10;
  const pagination = usePagination(produtos, ITEMS_PER_PAGE);
  const { currentPage, getCurrentData, setCurrentPage, pageCount } = pagination;

  useEffect(() => {
    (async () => {
      const data = await getAll();
      setProdutos(data);
    })();
  }, []);

  const onPageChange = (_event, value) => setCurrentPage(value);

  return (
    <div>
      <GoToHome />
      <Container>
        {!produtos ? (
          <h2>Loading...</h2>
        ) : (
          <ProductTable rows={getCurrentData()} />
        )}
        <Paginator
          pageCount={pageCount}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </Container>
    </div>
  );
};

export default ListProducts;
