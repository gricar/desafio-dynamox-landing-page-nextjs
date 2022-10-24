import { faker } from '@faker-js/faker/locale/pt_BR';
import fs from 'fs';

const users = [
  {
    email: 'student@betrybe.com',
    password: '$user#pass*',
    accessToken: 'mockToken',
  },
];

const createRandomProduct = () => ({
  id: faker.datatype.uuid(),
  nome: faker.commerce.productName(),
  dataDeFabricacao: faker.date.past().toLocaleDateString(),
  produtoPerecivel: faker.datatype.boolean(),
  dataDeValidade: faker.date.future().toLocaleDateString(),
  preco: faker.commerce.price(),
});

const createProducts = () => {
  const products = [];

  Array.from({ length: 50 }).forEach(() => {
    products.push(createRandomProduct());
  });

  return { products };
};

function generateDb() {
  try {
    const { products } = createProducts();
    fs.writeFileSync(
      'src/data/db.json',
      JSON.stringify({ products, users }, null, '\t'),
    );
    // console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    throw new Error(err.message);
  }
}

generateDb();
