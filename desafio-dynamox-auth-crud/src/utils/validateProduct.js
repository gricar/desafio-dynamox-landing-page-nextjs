const validateDates = (dataDeFabricacao, dataDeValidade, produtoPerecivel) => {
  const today = new Date();
  const fabricacaoAllowed = Date.parse(dataDeFabricacao) <= today;

  if (produtoPerecivel) {
    return dataDeFabricacao <= dataDeValidade && fabricacaoAllowed;
  }
  return fabricacaoAllowed;
};

const validateProductInputs = ({
  dataDeFabricacao,
  dataDeValidade,
  nome,
  preco,
  produtoPerecivel,
}) => {
  const datesAllowed = validateDates(
    dataDeFabricacao,
    dataDeValidade,
    produtoPerecivel,
  );
  const MIN_NAME_LENGTH = 4;
  const nameAllowed = nome.length < MIN_NAME_LENGTH;
  const precoAllowed = Number(preco) < 0 || preco.length === 0;
  return !datesAllowed || nameAllowed || precoAllowed; // deve retornar false para habilitar o botão
};

export default validateProductInputs;
