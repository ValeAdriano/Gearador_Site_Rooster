function validateForm() {
  const form = document.getElementById('cnpjForm');
  const generateButton = document.getElementById('generateButton');
  const downloadButton = document.getElementById('downloadButton');
  if (form.checkValidity()) {
    generateButton.disabled = false;
    downloadButton.disabled = false;
  } else {
    generateButton.disabled = true;
    downloadButton.disabled = true;
  }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    const formattedTime = now.toLocaleTimeString('pt-BR');
    document.getElementById("currentDate").innerText = formattedDate;
    document.getElementById("currentTime").innerText = formattedTime;
  });


function modificarDados() {
  editCnae();
  try {
    const razaoSocialInput = document.getElementById('razaoSocialInput').value;
    const cnpj = gerarCNPJ();
    const endereco = gerarEndereco();
    const telefone = gerarTelefone();
    const email = gerarEmail();

    // Atualiza os dados no DOM 
    document.getElementById('cnpj').innerText = cnpj;
    document.getElementById('razaoSocial').innerText = razaoSocialInput;
    document.getElementById('rua').innerText = endereco.rua;
    document.getElementById('numero').innerText = endereco.numero;
    document.getElementById('cep').innerText = endereco.cep;
    document.getElementById('bairro').innerText = endereco.bairro;
    document.getElementById('cidade').innerText = endereco.cidade; // Atualiza a cidade
    document.getElementById('estado').innerText = endereco.estado; // Atualiza a cidade
    document.getElementById('email').innerText = email;
    document.getElementById('telefone').innerText = telefone;

    Swal.fire({
      title: 'Sucesso!',
      text: 'Dados modificados com sucesso.',
      icon: 'success',
    });

    downloadCNPJ(razaoSocialInput);
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: `Erro ao modificar dados: ${error.message}`,
      icon: 'error',
    });
  }
}

function editCnae() {
  const cnaes = [
    "47.13-0-02 - Lojas de variedades, exceto lojas de departamentos ou magazines",
    "47.21-1-01 - Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - supermercados",
    "47.24-1-00 - Comércio varejista de hortifrutigranjeiros",
    "49.10-2-01 - Transporte rodoviário de carga, exceto produtos perigosos e mudanças, intermunicipal, interestadual e internacional",
    "49.30-2-02 - Transporte rodoviário coletivo de passageiros, sob regime de fretamento, intermunicipal, interestadual e internacional",
    "56.11-2-03 - Lanchonetes, casas de chá, de sucos e similares",
    "62.01-5-02 - Desenvolvimento de programas de computador sob encomenda",
    "62.02-3-00 - Desenvolvimento e licenciamento de programas de computador customizáveis",
    "68.10-2-01 - Compra e venda de imóveis próprios",
    "68.10-2-02 - Aluguel de imóveis próprios",
    "70.20-4-00 - Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica",
    "73.11-4-00 - Agências de publicidade",
    "74.10-2-01 - Design de interiores",
    "77.39-0-02 - Aluguel de equipamentos recreativos e esportivos",
    "81.21-4-00 - Limpeza em prédios e em domicílios",
    "82.11-3-00 - Serviços combinados de escritório e apoio administrativo",
    "85.99-6-03 - Ensino de arte e cultura não especificado anteriormente",
    "95.11-8-00 - Manutenção e reparação de computadores e de equipamentos periféricos",
    "95.29-8-00 - Reparação de outros bens de uso pessoal e doméstico não especificados anteriormente"
  ];

  const randomCnae = cnaes[Math.floor(Math.random() * cnaes.length)];
  document.getElementById('cnae').innerText = randomCnae;

  Swal.fire({
    title: 'Sucesso!',
    text: 'CNAE modificado com sucesso.',
    icon: 'success',
  });
}


function gerarCNPJ() {
  try {
    const cnpjBase = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('') + '0001';
    const digitos = calcularDigitos(cnpjBase);
    return `${cnpjBase.slice(0, 2)}.${cnpjBase.slice(2, 5)}.${cnpjBase.slice(5, 8)}/${cnpjBase.slice(8, 12)}-${digitos}`;
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: `Erro ao gerar CNPJ: ${error.message}`,
      icon: 'error',
    });
    throw error;
  }
}

function calcularDigitos(cnpjBase) {
  const pesosPrimeiro = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesosSegundo = [6, ...pesosPrimeiro];

  let soma = cnpjBase.split('').reduce((acc, num, i) => acc + num * pesosPrimeiro[i], 0);
  let primeiroDigito = 11 - (soma % 11);
  primeiroDigito = primeiroDigito < 10 ? primeiroDigito : 0;

  cnpjBase += primeiroDigito;
  soma = cnpjBase.split('').reduce((acc, num, i) => acc + num * pesosSegundo[i], 0);
  let segundoDigito = 11 - (soma % 11);
  segundoDigito = segundoDigito < 10 ? segundoDigito : 0;

  return `${primeiroDigito}${segundoDigito}`;
}

function gerarEndereco() {
  try {
    const enderecos = [
      { rua: "AVENIDA VISCONDE DE GUARAPUAVA", cep: "80.010-100", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA COMENDADOR ARAÚJO", cep: "80.420-000", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA EMILIANO PERNETA", cep: "80.420-080", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA MATEUS LEME", cep: "80.510-190", bairro: "SÃO FRANCISCO", estado: "PR", cidade: "CURITIBA" },
      { rua: "AVENIDA IGUAÇU", cep: "80.230-020", bairro: "ÁGUA VERDE", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA AUGUSTO STRESSER", cep: "80.260-000", bairro: "JUVEVÊ", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA PROFESSOR PEDRO VIRIATO PARIGOT DE SOUZA", cep: "81.200-100", bairro: "MOSSUNGUÊ", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA GENERAL CARNEIRO", cep: "80.060-150", bairro: "ALTO DA GLÓRIA", estado: "PR", cidade: "CURITIBA" },
      { rua: "AVENIDA REPÚBLICA ARGENTINA", cep: "80.620-010", bairro: "PORTÃO", estado: "PR", cidade: "CURITIBA" },
      { rua: "AVENIDA PAULISTA", cep: "01.311-200", bairro: "BELA VISTA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA HADDON", cep: "01.311-000", bairro: "BELA VISTA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA RIO BRANCO", cep: "20.090-003", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA VISCONDE DE PIRAJÁ", cep: "22.410-003", bairro: "IPANEMA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "AVENIDA AFONSO PENA", cep: "30.130-004", bairro: "CENTRO", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA DA CONSOLAÇÃO", cep: "01.301-000", bairro: "CONSOLAÇÃO", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA SETE DE SETEMBRO", cep: "40.060-000", bairro: "BARRA", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA JOÃO ALFREDO", cep: "90.040-230", bairro: "CIDADE BAIXA", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA BOA VIAGEM", cep: "51.011-000", bairro: "BOA VIAGEM", estado: "PE", cidade: "RECIFE" },
      { rua: "RUA OSWALDO CRUZ", cep: "60.125-150", bairro: "ALDEOTA", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA PAULISTA", cep: "01.311-200", bairro: "BELA VISTA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA OSCAR FREIRE", cep: "01.426-001", bairro: "JARDINS", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA BRIGADEIRO FARIA LIMA", cep: "01.452-000", bairro: "ITAIM BIBI", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA AUGUSTA", cep: "01305-000", bairro: "CONSOLACÃO", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA ENGENHEIRO LUÍS CARLOS BERRINI", cep: "04571-000", bairro: "BROOKLIN", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA VIEIRA SOUTO", cep: "22420-002", bairro: "IPANEMA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "AVENIDA ATLÂNTICA", cep: "22010-000", bairro: "COPACABANA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA FARME DE AMOEDO", cep: "22420-020", bairro: "IPANEMA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA DIAS FERREIRA", cep: "22431-050", bairro: "LEBLON", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "AVENIDA NOSSA SENHORA DE COPACABANA", cep: "22020-001", bairro: "COPACABANA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "AVENIDA AFONSO PENA", cep: "30130-004", bairro: "CENTRO", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "AVENIDA AMAZONAS", cep: "30180-001", bairro: "CENTRO", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA DA BAHIA", cep: "30160-011", bairro: "CENTRO", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "AVENIDA CRISTÓVÃO COLOMBO", cep: "30140-140", bairro: "FUNCIONÁRIOS", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA DOS GUARARAPES", cep: "30350-380", bairro: "SÃO PEDRO", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "AVENIDA SETE DE SETEMBRO", cep: "40060-000", bairro: "BARRA", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA CHILE", cep: "40020-000", bairro: "PELOURINHO", estado: "BA", cidade: "SALVADOR" },
      { rua: "AVENIDA OCEÂNICA", cep: "40140-130", bairro: "ONDINA", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA PORTO DOS TAVARES", cep: "40140-810", bairro: "ONDINA", estado: "BA", cidade: "SALVADOR" },
      { rua: "AVENIDA ANTÔNIO CARLOS MAGALHÃES", cep: "41800-700", bairro: "PITUBA", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA JOÃO ALFREDO", cep: "90040-230", bairro: "CIDADE BAIXA", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA IPIRANGA", cep: "90160-093", bairro: "PRAIA DE BELAS", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "RUA DOS ANDRADAS", cep: "90020-007", bairro: "CENTRO HISTÓRICO", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA CARLOS GOMES", cep: "90480-003", bairro: "AUXILIADORA", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "RUA PADRE CHAGAS", cep: "90570-080", bairro: "MOINHOS DE VENTO", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA BOA VIAGEM", cep: "51011-000", bairro: "BOA VIAGEM", estado: "PE", cidade: "RECIFE" },
      { rua: "RUA DA AURORA", cep: "50050-000", bairro: "SANTO AMARO", estado: "PE", cidade: "RECIFE" },
      { rua: "AVENIDA CONSELHEIRO AGUIAR", cep: "51020-020", bairro: "BOA VIAGEM", estado: "PE", cidade: "RECIFE" },
      { rua: "RUA DO IMPERADOR", cep: "50010-240", bairro: "SANTO ANTÔNIO", estado: "PE", cidade: "RECIFE" },
      { rua: "AVENIDA DOMINGOS FERREIRA", cep: "51011-050", bairro: "BOA VIAGEM", estado: "PE", cidade: "RECIFE" },
      { rua: "RUA OSWALDO CRUZ", cep: "60125-150", bairro: "ALDEOTA", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA BEIRA MAR", cep: "60165-120", bairro: "MEIRELES", estado: "CE", cidade: "FORTALEZA" },
      { rua: "RUA BARÃO DO RIO BRANCO", cep: "60025-061", bairro: "CENTRO", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA SANTOS DUMONT", cep: "60150-161", bairro: "ALDEOTA", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA INDIANÓPOLIS", cep: "04063-001", bairro: "MOEMA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA VITOR MEIRELES", cep: "04317-010", bairro: "JABAQUARA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA DO CONTORNO", cep: "30110-001", bairro: "CENTRO", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA FLORIANO PEIXOTO", cep: "80010-130", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA 24 DE MAIO", cep: "01041-001", bairro: "REPÚBLICA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA SANTA CATARINA", cep: "30170-082", bairro: "LOURDES", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "AVENIDA BOA VIAGEM", cep: "51111-000", bairro: "BOA VIAGEM", estado: "PE", cidade: "RECIFE" },
      { rua: "RUA DA ASSEMBLEIA", cep: "20011-001", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "AVENIDA IPIRANGA", cep: "01046-010", bairro: "REPÚBLICA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA RIO BRANCO", cep: "20090-003", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "AVENIDA GETÚLIO VARGAS", cep: "30112-020", bairro: "FUNCIONÁRIOS", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA DOS ANDRADAS", cep: "90020-004", bairro: "CENTRO HISTÓRICO", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA SETE DE SETEMBRO", cep: "40060-000", bairro: "BARRA", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA BAHIA", cep: "30150-311", bairro: "FUNCIONÁRIOS", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA 15 DE NOVEMBRO", cep: "80020-310", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "AVENIDA IPIRANGA", cep: "90160-093", bairro: "PRAIA DE BELAS", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "RUA PROFESSOR ÁLVARES RIBEIRO", cep: "41200-001", bairro: "BROTAS", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA JOÃO PESSOA", cep: "90040-000", bairro: "FARROUPILHA", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA BEIRA MAR", cep: "60165-121", bairro: "MEIRELES", estado: "CE", cidade: "FORTALEZA" },
      { rua: "RUA DAS FLORES", cep: "80020-100", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA BARÃO DE MESQUITA", cep: "20540-002", bairro: "TIJUCA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA HENRIQUE DIAS", cep: "50100-310", bairro: "DERBY", estado: "PE", cidade: "RECIFE" },
      { rua: "RUA SÃO JOÃO", cep: "01035-000", bairro: "CENTRO", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA GONÇALVES DIAS", cep: "30140-092", bairro: "LOURDES", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA RIO GRANDE DO SUL", cep: "30170-090", bairro: "FUNCIONÁRIOS", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "RUA GENERAL OSÓRIO", cep: "80010-120", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "AVENIDA PRESIDENTE VARGAS", cep: "20070-003", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA QUINZE DE NOVEMBRO", cep: "90020-060", bairro: "CENTRO HISTÓRICO", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA PRESIDENTE KENNEDY", cep: "80610-901", bairro: "ÁGUA VERDE", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA PADRE CÍCERO", cep: "60130-000", bairro: "MEIRELES", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA FRANCISCO GLICÉRIO", cep: "13010-901", bairro: "CENTRO", estado: "SP", cidade: "CAMPINAS" },
      { rua: "RUA GRAÇA ARANHA", cep: "20030-001", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA JOÃO ALFREDO", cep: "90040-320", bairro: "CIDADE BAIXA", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "AVENIDA LÚCIO COSTA", cep: "22630-011", bairro: "BARRA DA TIJUCA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA SÃO BENTO", cep: "01011-900", bairro: "CENTRO", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA MARANHÃO", cep: "64000-000", bairro: "CENTRO", estado: "PI", cidade: "TERESINA" },
      { rua: "RUA DA MARGARIDA", cep: "41500-001", bairro: "ITAIGARA", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA SETE DE SETEMBRO", cep: "01023-090", bairro: "CENTRO", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA BARÃO DE STUDART", cep: "60120-000", bairro: "ALDEOTA", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA GONÇALVES CHAVES", cep: "96015-560", bairro: "CENTRO", estado: "RS", cidade: "PELOTAS" },
      { rua: "RUA JOAQUIM NABUCO", cep: "60455-000", bairro: "BENFICA", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA DOM PEDRO II", cep: "57020-080", bairro: "CENTRO", estado: "AL", cidade: "MACEIÓ" },
      { rua: "AVENIDA DOS HOLANDESES", cep: "65075-000", bairro: "CALHAU", estado: "MA", cidade: "SÃO LUÍS" },
      { rua: "RUA SENADOR SALGADO FILHO", cep: "59015-000", bairro: "TIROL", estado: "RN", cidade: "NATAL" },
      { rua: "RUA DUQUE DE CAXIAS", cep: "69020-120", bairro: "CENTRO", estado: "AM", cidade: "MANAUS" },
      { rua: "RUA JOAQUIM NABUCO", cep: "66015-040", bairro: "NAZARÉ", estado: "PA", cidade: "BELÉM" },
      { rua: "AVENIDA BRASIL", cep: "60750-000", bairro: "PICI", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA BEIRA MAR", cep: "60165-120", bairro: "MEIRELES", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA DAS NAÇÕES UNIDAS", cep: "04578-000", bairro: "BROOKLIN NOVO", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA VERGUEIRO", cep: "01504-001", bairro: "LIBERDADE", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA BRASIL", cep: "22290-140", bairro: "BOTAFOGO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA DA PAZ", cep: "04530-020", bairro: "CHÁCARA SANTO ANTÔNIO", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA BRIGADEIRO LUIZ ANTÔNIO", cep: "01317-000", bairro: "JARDINS", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA DOUTOR VILA NOVA", cep: "01222-000", bairro: "VILA BUARQUE", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA CRISTÓVÃO COLOMBO", cep: "90560-003", bairro: "FARROUPILHA", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "RUA MARANHÃO", cep: "30150-330", bairro: "FUNCIONÁRIOS", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "AVENIDA CONTORNO", cep: "40060-002", bairro: "BARRA", estado: "BA", cidade: "SALVADOR" },
      { rua: "RUA GENERAL OSÓRIO", cep: "80010-140", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "RUA CONSELHEIRO LAURINDO", cep: "80060-100", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
      { rua: "AVENIDA SALGADO FILHO", cep: "59015-000", bairro: "TIROL", estado: "RN", cidade: "NATAL" },
      { rua: "RUA DA GÁVEA", cep: "22451-000", bairro: "GÁVEA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA DOS TUPINAMBÁS", cep: "30120-070", bairro: "CENTRO", estado: "MG", cidade: "BELO HORIZONTE" },
      { rua: "AVENIDA DO RIO BRANCO", cep: "36010-090", bairro: "CENTRO", estado: "MG", cidade: "JUIZ DE FORA" },
      { rua: "RUA BARÃO DE ITAPETININGA", cep: "01042-000", bairro: "REPÚBLICA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA ALBERTO BINS", cep: "90030-140", bairro: "CENTRO HISTÓRICO", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "RUA DAS ROSAS", cep: "04048-003", bairro: "MIRANDÓPOLIS", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA VISCONDE DE ITABORAÍ", cep: "20010-060", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA SANTO ANTÔNIO", cep: "40060-080", bairro: "NAZARÉ", estado: "BA", cidade: "SALVADOR" },
      { rua: "AVENIDA SETE DE ABRIL", cep: "01043-001", bairro: "REPÚBLICA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "AVENIDA PRESIDENTE DUTRA", cep: "58010-510", bairro: "CENTRO", estado: "PB", cidade: "JOÃO PESSOA" },
      { rua: "RUA SÃO PAULO", cep: "69010-020", bairro: "CENTRO", estado: "AM", cidade: "MANAUS" },
      { rua: "RUA RIO BRANCO", cep: "60190-330", bairro: "ALDEOTA", estado: "CE", cidade: "FORTALEZA" },
      { rua: "RUA SÃO JOSÉ", cep: "66010-150", bairro: "CAMPINA", estado: "PA", cidade: "BELÉM" },
      { rua: "AVENIDA GOIÁS", cep: "74010-900", bairro: "CENTRO", estado: "GO", cidade: "GOIÂNIA" },
      { rua: "RUA AMAZONAS", cep: "79008-060", bairro: "CENTRO", estado: "MS", cidade: "CAMPO GRANDE" },
      { rua: "AVENIDA ARAGUAIA", cep: "74010-030", bairro: "CENTRO", estado: "GO", cidade: "GOIÂNIA" },
      { rua: "AVENIDA HISTORIADOR RUBENS DE MENDONÇA", cep: "78008-008", bairro: "CENTRO", estado: "MT", cidade: "CUIABÁ" },
      { rua: "RUA PARANÁ", cep: "59020-190", bairro: "TIROL", estado: "RN", cidade: "NATAL" },
      { rua: "RUA DO ROSÁRIO", cep: "60060-370", bairro: "CENTRO", estado: "CE", cidade: "FORTALEZA" },
      { rua: "RUA GENERAL OSÓRIO", cep: "66015-000", bairro: "NAZARÉ", estado: "PA", cidade: "BELÉM" },
      { rua: "RUA VIGÁRIO JOSÉ INÁCIO", cep: "90020-110", bairro: "CENTRO", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "RUA DA GLÓRIA", cep: "20241-180", bairro: "GLÓRIA", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA 13 DE MAIO", cep: "01327-000", bairro: "BELA VISTA", estado: "SP", cidade: "SÃO PAULO" },
      { rua: "RUA DA LAPA", cep: "20021-180", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "RUA VISCONDE DE INHAÚMA", cep: "20091-007", bairro: "CENTRO", estado: "RJ", cidade: "RIO DE JANEIRO" },
      { rua: "AVENIDA BORGES DE MEDEIROS", cep: "90020-021", bairro: "CENTRO HISTÓRICO", estado: "RS", cidade: "PORTO ALEGRE" },
      { rua: "RUA DAS ACÁCIAS", cep: "60160-310", bairro: "ALDEOTA", estado: "CE", cidade: "FORTALEZA" },
      { rua: "RUA JOAQUIM NABUCO", cep: "60125-040", bairro: "MEIRELES", estado: "CE", cidade: "FORTALEZA" },
      { rua: "AVENIDA JOÃO PESSOA", cep: "50010-900", bairro: "SANTO ANTONIO", estado: "PE", cidade: "RECIFE" },
      { rua: "RUA DAS CARMÉLIAS", cep: "50050-220", bairro: "GRAÇAS", estado: "PE", cidade: "RECIFE" },
      { rua: "AVENIDA BRASIL", cep: "66013-050", bairro: "GUAMÁ", estado: "PA", cidade: "BELÉM" },
      { rua: "RUA SENADOR LEMOS", cep: "66050-000", bairro: "MARCO", estado: "PA", cidade: "BELÉM" },
      { rua: "AVENIDA MENDONÇA FURTADO", cep: "68200-030", bairro: "CENTRO", estado: "PA", cidade: "SANTARÉM" },
      { rua: "RUA PRESIDENTE KENNEDY", cep: "66055-190", bairro: "MARCO", estado: "PA", cidade: "BELÉM" },
      { rua: "RUA DOS JASMINS", cep: "64000-510", bairro: "POTI VELHO", estado: "PI", cidade: "TERESINA" },    
    ];
    const endereco = enderecos[Math.floor(Math.random() * enderecos.length)];
    endereco.numero = Math.floor(Math.random() * 9999) + 1;

    // Remove caracteres especiais do CEP


    endereco.cep = endereco.cep.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');    // Formata o CEP para o padrão xx.xxx-xxx
    endereco.cep = endereco.cep.replace(/\D/g, '');

    endereco.cep = endereco.cep.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');

    return endereco;
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: `Erro ao gerar endereço: ${error.message}`,
      icon: 'error',
    });
    throw error;
  }
}

function gerarTelefone() {
  const telefoneInput = document.getElementById('telefoneInput').value;
  const regex = /^\(\d{2}\) \d{4}-\d{4}$/;

  if (!regex.test(telefoneInput)) {
    throw new Error('Telefone inválido. Formato esperado: (00) 0000-0000');
  }

  return telefoneInput;
}

function gerarEmail() {
  const emails = ["LUANKASECKERT@GMAIL.COM", "LUANKASETIMA@GMAIL.COM"];
  return emails[Math.floor(Math.random() * emails.length)];
}

function downloadCNPJ(razaoSocial) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const content = document.getElementById('content'); // Assuming 'content' is the id of the specific part you want to render
  doc.html(content, {
    callback: function (pdf) {
      pdf.save(`${razaoSocial}_CNPJ.pdf`);
    },
    x: 10,
    y: 10,
    html2canvas: {
      scale: 0.1 // Adjust the scale to fit content on one page
    }
  });
}

function downloadTableAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const table = document.getElementById('docTotal');

  doc.html(table, {
    callback: function (pdf) {
      const razaoSocial = document.getElementById('razaoSocial').innerText;
      const cnpj = document.getElementById('cnpj').innerText;
      const endereco = {
        rua: document.getElementById('rua').innerText,
        numero: document.getElementById('numero').innerText,
        cep: document.getElementById('cep').innerText,
        bairro: document.getElementById('bairro').innerText
      };
      const telefone = document.getElementById('telefone').innerText;
      const email = document.getElementById('email').innerText;

      pdf.save(`${razaoSocial}_CNPJ.pdf`); // Save the PDF with the given file name
    },
    x: 10,
    y: 10,
    html2canvas: {
      scale: 0.30 // Adjust the scale to fit content on one page
    }
  });
  const razaoSocial = document.getElementById('razaoSocial').innerText;
  const cnpj = document.getElementById('cnpj').innerText;
  const endereco = {
    rua: document.getElementById('rua').innerText,
    numero: document.getElementById('numero').innerText,
    cep: document.getElementById('cep').innerText,
    bairro: document.getElementById('bairro').innerText,
    cidade: document.getElementById('cidade').innerText,
    estado: document.getElementById('estado').innerText
  };
  const telefone = document.getElementById('telefone').innerText;
  const email = document.getElementById('email').innerText;

  downloadHTML(razaoSocial, cnpj, endereco, telefone, email, endereco.cidade, doc);
}

// Ensure the button calls the function
document.getElementById('downloadButton').onclick = downloadTableAsPDF;

function enviarParaN8n(razaoSocial, htmlTexto, dominio, pdf) {
  console.log("Enviando dados para o n8n...");
    // URL do Webhook do n8n
    const url = "https://auto.roostertech.com.br/webhook/2548266f-ac63-4ed1-a3fc-a92fb715409f";  

  // Extraindo o HTML da página inteira
  const pageHTML = document.documentElement.outerHTML;

  // Dados a serem enviados
  const payload = {
    nome: razaoSocial,
    dominio: dominio,
    html: htmlTexto,
    pageHTML: pageHTML // Incluindo o HTML da página inteira no payload
  };

  // Configurações da requisição
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };

  // Realizando a chamada à API
  fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Resposta do servidor:", data);
    })
    .catch(error => {
      console.error("Erro ao chamar o webhook:", error);
    });
}

// Ensure the button calls the function
document.getElementById('downloadButton').onclick = downloadTableAsPDF;