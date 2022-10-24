import FormProduct from '../components/FormProduct';
import GoToHome from '../components/GoToHome';

const CreateProduct = () => {
  const id = null;
  const product = null;
  return (
    <div>
      <GoToHome />
      <FormProduct action="Cadastrar" item={{ id, product }} />
    </div>
  );
};

export default CreateProduct;
