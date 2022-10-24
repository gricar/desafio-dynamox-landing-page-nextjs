import Pagination from '@mui/material/Pagination';

const Paginator = ({ pageCount, onPageChange, currentPage }) => (
  <Pagination
    count={pageCount}
    onChange={onPageChange}
    page={currentPage}
    color="primary"
    showFirstButton
    showLastButton
    sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
  />
);

export default Paginator;
