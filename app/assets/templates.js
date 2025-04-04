function downloadHTML(razaoSocial, cnpj, endereco, telefone, email, cidade, pdf) {
    console.log("Criando site...");
    const imageLink1 = document.getElementById('imageLink1').value;
    const imageLink2 = document.getElementById('imageLink2').value;
  
    const htmlContents = [
      `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Consultoria Financeira</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
        <header class="bg-primary text-white text-center py-5">
          <h1 class="display-4">Consultoria Financeira</h1>
          <p class="lead">Planeje seu futuro com segurança e tranquilidade</p>
        </header>
        <section class="container my-5">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2 class="text-primary">Sobre Nós</h2>
              <p>Somos especialistas em ajudar você a alcançar seus objetivos financeiros, oferecendo consultoria personalizada e soluções estratégicas.</p>
            </div>
            <div class="col-md-6">
              <img src="${imageLink1}" alt="Consultoria" class="img-fluid rounded">
            </div>
          </div>
        </section>
        <section class="bg-light py-5">
          <div class="container text-center">
            <h2 class="text-primary mb-4">Nossos Serviços</h2>
            <div class="row">
              <div class="col-md-4">
                <div class="card shadow-sm border-0">
                  <div class="card-body">
                    <h5 class="card-title">Planejamento Financeiro</h5>
                    <p class="card-text">Organize suas finanças e alcance seus objetivos com um planejamento personalizado.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card shadow-sm border-0">
                  <div class="card-body">
                    <h5 class="card-title">Gestão de Investimentos</h5>
                    <p class="card-text">Maximize seus retornos com estratégias eficazes e seguras.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card shadow-sm border-0">
                  <div class="card-body">
                    <h5 class="card-title">Consultoria Empresarial</h5>
                    <p class="card-text">Apoio estratégico para crescimento e sustentabilidade do seu negócio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container my-5">
          <h2 class="text-center text-primary mb-4">Depoimentos</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="card shadow-sm border-0">
                <div class="card-body">
                  <p class="card-text">"Transformaram minha vida financeira! Agora tenho segurança para o futuro." - Cliente Satisfeito</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <img src="${imageLink2}" alt="Testemunhos" class="img-fluid rounded shadow-sm">
            </div>
          </div>
        </section>
        <footer class="bg-dark text-white text-center py-4">
          <div class="container">
            <p class="mb-1">Razão Social: ${razaoSocial}</p>
            <p class="mb-1">CNPJ: ${cnpj}</p>
            <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
            <p class="mb-0">Telefone: ${telefone}</p>
            <p class="mb-0">Email: ${email}</p>
          </div>
          <div class="text-muted mt-3">
            <small>&copy; 2024 Consultoria Financeira. Todos os direitos reservados.</small>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      </html>
      `,
      `
      <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PetShop Amigo Animal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #fdfdfd;
      }
      .bg-petshop {
        background: linear-gradient(to right, #ffcc00, #ff9900);
      }
      .text-petshop {
        color: #ff6600;
      }
      .btn-petshop {
        background-color: #ffcc00;
        border: none;
        color: white;
      }
      .btn-petshop:hover {
        background-color: #ff9900;
        color: white;
      }
    </style>
  </head>
  <body>
    <header class="bg-petshop text-white text-center py-5">
      <h1 class="display-4">PetShop Amigo Animal</h1>
      <p class="lead">O melhor cuidado para o seu pet, com amor e carinho</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-petshop">Sobre Nós</h2>
          <p>Somos especialistas em cuidar do seu pet com serviços de banho, tosa e produtos exclusivos para o bem-estar do seu animal de estimação.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="PetShop" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Serviços -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-petshop mb-4">Nossos Serviços</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-petshop">Banho e Tosa</h5>
                <p class="card-text">Higiene completa com todo o cuidado que o seu pet merece.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-petshop">Venda de Produtos</h5>
                <p class="card-text">Rações, brinquedos e acessórios de alta qualidade.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-petshop">Clínica Veterinária</h5>
                <p class="card-text">Profissionais experientes para cuidar da saúde do seu pet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-petshop mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"O PetShop Amigo Animal é o melhor! Meu cachorro adora o banho e os brinquedos." - Cliente Feliz</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-petshop text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 PetShop Amigo Animal. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
      `,
  
  `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barista Café Gourmet</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #f7f3e9; /* Tom de creme */
      }
      .bg-barista {
        background: linear-gradient(to right, #6f4e37, #3d2b1f); /* Cores de café */
      }
      .text-barista {
        color: #6f4e37;
      }
      .btn-barista {
        background-color: #3d2b1f;
        border: none;
        color: white;
      }
      .btn-barista:hover {
        background-color: #6f4e37;
        color: white;
      }
    </style>
  </head>
  <body>
    <header class="bg-barista text-white text-center py-5">
      <h1 class="display-4">Barista Café Gourmet</h1>
      <p class="lead">A arte do café em cada xícara</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-barista">Sobre Nós</h2>
          <p>Somos apaixonados por café e dedicamos nosso trabalho a oferecer experiências únicas, com grãos selecionados e técnicas refinadas.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Barista preparando café" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Serviços -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-barista mb-4">Nossos Serviços</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-barista">Cafés Especiais</h5>
                <p class="card-text">Desfrute de uma seleção exclusiva de cafés artesanais.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-barista">Workshops</h5>
                <p class="card-text">Aprenda as técnicas para preparar o café perfeito.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-barista">Assinatura</h5>
                <p class="card-text">Receba cafés especiais em casa todos os meses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-barista mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"O Barista Café Gourmet transformou meu momento do café em algo especial. Recomendo a todos!" - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-barista text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 Barista Café Gourmet. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  
  `,
  
  `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Solutions - Serviços de Informática</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #f0f4f8; /* Fundo claro e moderno */
      }
      .bg-tech {
        background: linear-gradient(to right, #0078d7, #0053a0); /* Gradiente tecnológico */
      }
      .text-tech {
        color: #0078d7;
      }
      .btn-tech {
        background-color: #0078d7;
        border: none;
        color: white;
      }
      .btn-tech:hover {
        background-color: #0053a0;
        color: white;
      }
    </style>
  </head>
  <body>
    <header class="bg-tech text-white text-center py-5">
      <h1 class="display-4">Tech Solutions</h1>
      <p class="lead">Soluções em Informática para o seu dia a dia</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-tech">Sobre Nós</h2>
          <p>Com mais de 10 anos de experiência, oferecemos suporte técnico, manutenção e consultoria para que sua infraestrutura de TI esteja sempre funcional e segura.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Serviços de Informática" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Serviços -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-tech mb-4">Nossos Serviços</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-tech">Manutenção de Computadores</h5>
                <p class="card-text">Conserto, upgrades e limpeza para garantir o melhor desempenho dos seus equipamentos.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-tech">Segurança de Dados</h5>
                <p class="card-text">Backup, recuperação e proteção contra ameaças digitais.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-tech">Consultoria em TI</h5>
                <p class="card-text">Planejamento e implementação de soluções tecnológicas sob medida para o seu negócio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-tech mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"Com a Tech Solutions, nossa empresa passou a ter mais segurança e eficiência. Recomendo!" - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-tech text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 Tech Solutions. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  
  `,
  
  `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AutoTech - Serviços de Mecânica</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #f5f5f5; /* Fundo cinza claro */
      }
      .bg-mechanic {
        background: linear-gradient(to right, #444444, #222222); /* Gradiente metálico */
      }
      .text-mechanic {
        color: #444444;
      }
      .btn-mechanic {
        background-color: #444444;
        border: none;
        color: white;
      }
      .btn-mechanic:hover {
        background-color: #222222;
        color: white;
      }
    </style>
  </head>
  <body>
    <header class="bg-mechanic text-white text-center py-5">
      <h1 class="display-4">AutoTech</h1>
      <p class="lead">O cuidado e a eficiência que seu carro merece</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-mechanic">Sobre Nós</h2>
          <p>Com uma equipe de profissionais altamente qualificados, oferecemos serviços de manutenção automotiva com excelência, rapidez e garantia.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Serviços de Mecânica" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Serviços -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-mechanic mb-4">Nossos Serviços</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-mechanic">Troca de Óleo</h5>
                <p class="card-text">Lubrificação de qualidade para manter o motor em perfeito estado.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-mechanic">Revisão Completa</h5>
                <p class="card-text">Inspeção detalhada para garantir segurança e desempenho.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-mechanic">Serviços de Freios</h5>
                <p class="card-text">Reparo e manutenção de sistemas de freio com garantia de segurança.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-mechanic mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"A AutoTech sempre entrega serviços de alta qualidade. Confio de olhos fechados!" - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-mechanic text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 AutoTech. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  `,
  `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posto Rápido - Qualidade e Confiança</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #f7f7f7; /* Fundo cinza claro */
      }
      .bg-gas {
        background: linear-gradient(to right, #ffcc00, #ff9900); /* Gradiente amarelo e laranja */
      }
      .text-gas {
        color: #ffcc00;
      }
      .btn-gas {
        background-color: #ffcc00;
        border: none;
        color: white;
      }
      .btn-gas:hover {
        background-color: #ff9900;
        color: white;
      }
    </style>
  </head>
  <body>
    <header class="bg-gas text-white text-center py-5">
      <h1 class="display-4">Posto Rápido</h1>
      <p class="lead">Abastecimento e serviços de qualidade para o seu veículo</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-gas">Sobre Nós</h2>
          <p>Com anos de experiência no mercado, oferecemos combustíveis de alta qualidade, atendimento rápido e serviços para cuidar do seu veículo.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Posto de Gasolina" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Serviços -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-gas mb-4">Nossos Serviços</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-gas">Abastecimento</h5>
                <p class="card-text">Gasolina, etanol e diesel de alta qualidade.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-gas">Troca de Óleo</h5>
                <p class="card-text">Serviço rápido e eficiente para manter o motor do seu carro em perfeito estado.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-gas">Loja de Conveniência</h5>
                <p class="card-text">Produtos variados e lanches rápidos para sua comodidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-gas mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"O Posto Rápido é sempre minha primeira escolha. Atendimento excelente e combustível de qualidade!" - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-gas text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 Posto Rápido. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  
  `, `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delícias Doceria - Um Mundo de Sabores</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #fff7f0; /* Fundo creme */
      }
      .bg-sweet {
        background: linear-gradient(to right, #ffb3b3, #ff8080); /* Gradiente rosa claro */
      }
      .text-sweet {
        color: #ff8080;
      }
      .btn-sweet {
        background-color: #ff8080;
        border: none;
        color: white;
      }
      .btn-sweet:hover {
        background-color: #ff4d4d;
        color: white;
      }
    </style>
  </head>
  <body>
    <header class="bg-sweet text-white text-center py-5">
      <h1 class="display-4">Delícias Doceria</h1>
      <p class="lead">O sabor e a magia em cada mordida</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-sweet">Sobre Nós</h2>
          <p>Na Delícias Doceria, criamos momentos inesquecíveis com bolos, tortas, doces e salgados preparados com amor e os melhores ingredientes.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Doces e Bolos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Produtos -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-sweet mb-4">Nossos Produtos</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-sweet">Bolos Especiais</h5>
                <p class="card-text">Bolos personalizados e deliciosos para todas as ocasiões.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-sweet">Doces Finos</h5>
                <p class="card-text">Uma seleção de doces sofisticados para adoçar seus momentos.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-sweet">Salgados</h5>
                <p class="card-text">Salgados variados, perfeitos para festas e eventos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-sweet mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"Os bolos da Delícias Doceria são maravilhosos! Eles fizeram o bolo do aniversário da minha filha, e foi um sucesso." - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-sweet text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 Delícias Doceria. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  
  `,
  `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinancePro - Consultoria Financeira</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #f4f6f9; /* Fundo neutro e profissional */
      }
      .bg-finance {
        background: linear-gradient(to right, #004085, #007bff); /* Gradiente azul confiável */
      }
      .text-finance {
        color: #004085;
      }
      .btn-finance {
        background-color: #004085;
        border: none;
        color: white;
      }
      .btn-finance:hover {
        background-color: #007bff;
        color: white;
      }
    </style>
  </head>
  <body>
    <header class="bg-finance text-white text-center py-5">
      <h1 class="display-4">FinancePro</h1>
      <p class="lead">Planejamento e Estratégia Financeira para o seu Futuro</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-finance">Sobre Nós</h2>
          <p>Somos uma equipe de especialistas em finanças, dedicada a ajudar nossos clientes a alcançar seus objetivos financeiros com soluções estratégicas e personalizadas.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Consultoria Financeira" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Serviços -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-finance mb-4">Nossos Serviços</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-finance">Planejamento Financeiro</h5>
                <p class="card-text">Estratégias personalizadas para gerenciar suas finanças de forma eficiente.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-finance">Investimentos</h5>
                <p class="card-text">Identifique as melhores oportunidades para maximizar seus retornos.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-finance">Consultoria Empresarial</h5>
                <p class="card-text">Apoio estratégico para empresas que desejam crescer de forma sustentável.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-finance mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"Graças à FinancePro, consegui organizar minhas finanças e investir com segurança. Recomendo a todos!" - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-finance text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 FinancePro. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  
  `,
  
  `
  
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alpha Finance - Consultoria de Sucesso</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #f5f5f5; /* Fundo cinza claro */
      }
      .bg-alpha {
        background: linear-gradient(to right, #00264d, #004d99); /* Gradiente azul escuro */
      }
      .text-alpha {
        color: #00264d;
      }
      .btn-alpha {
        background-color: #004d99;
        border: none;
        color: white;
      }
      .btn-alpha:hover {
        background-color: #00264d;
        color: white;
      }
      .icon-circle {
        background-color: #004d99;
        color: white;
        font-size: 1.5rem;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 50%;
        margin: 10px auto;
      }
    </style>
  </head>
  <body>
    <header class="bg-alpha text-white text-center py-5">
      <h1 class="display-4">Alpha Finance</h1>
      <p class="lead">Excelência em Consultoria para Alcançar Seus Objetivos</p>
    </header>
    
    <!-- Sobre Nós -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-alpha">Sobre Nós</h2>
          <p>Na Alpha Finance, nossa missão é ajudar pessoas e empresas a alcançarem segurança financeira por meio de soluções personalizadas e inovadoras.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Equipe de Consultoria" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Nossos Diferenciais -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-alpha mb-4">Nossos Diferenciais</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="icon-circle">
              <i class="bi bi-graph-up"></i>
            </div>
            <h5 class="text-alpha">Soluções Estratégicas</h5>
            <p>Elaboração de estratégias financeiras para cada fase da sua vida ou negócio.</p>
          </div>
          <div class="col-md-4">
            <div class="icon-circle">
              <i class="bi bi-person-check"></i>
            </div>
            <h5 class="text-alpha">Equipe Qualificada</h5>
            <p>Profissionais com anos de experiência prontos para te ajudar.</p>
          </div>
          <div class="col-md-4">
            <div class="icon-circle">
              <i class="bi bi-shield-check"></i>
            </div>
            <h5 class="text-alpha">Confiança e Segurança</h5>
            <p>Seu futuro financeiro protegido com nossos serviços especializados.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-alpha mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"Com a Alpha Finance, minha empresa cresceu de forma estruturada e sustentável. Recomendo para qualquer empreendedor!" - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-alpha text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 Alpha Finance. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  `,
  `
  
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft - Soluções em Desenvolvimento</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        background-color: #1e1e2f; /* Fundo escuro estilo IDE */
        color: #ffffff; /* Texto branco */
      }
      .bg-dev {
        background: linear-gradient(to right, #6a11cb, #2575fc); /* Gradiente roxo e azul */
      }
      .text-dev {
        color: #6a11cb;
      }
      .btn-dev {
        background-color: #2575fc;
        border: none;
        color: white;
      }
      .btn-dev:hover {
        background-color: #6a11cb;
        color: white;
      }
      .code-box {
        background-color: #2d2d3b;
        border-radius: 8px;
        padding: 20px;
        font-family: "Courier New", Courier, monospace;
        color: #a8ff60;
      }
    </style>
  </head>
  <body>
    <header class="bg-dev text-white text-center py-5">
      <h1 class="display-4">CodeCraft</h1>
      <p class="lead">Criando Soluções de Software para o Futuro</p>
    </header>
    
    <!-- Sobre Mim -->
    <section class="container my-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="text-dev">Sobre Mim</h2>
          <p>Sou desenvolvedor de software especializado em criar aplicações web, sistemas corporativos e soluções personalizadas que atendem às necessidades específicas de cada cliente.</p>
        </div>
        <div class="col-md-6">
          <img src="${imageLink1}" alt="Desenvolvedor trabalhando" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Serviços -->
    <section class="bg-light py-5">
      <div class="container text-center">
        <h2 class="text-dev mb-4">Serviços</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-dev">Desenvolvimento Web</h5>
                <p class="card-text">Criação de sites responsivos e otimizados para todos os dispositivos.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-dev">Sistemas Corporativos</h5>
                <p class="card-text">Automatize processos e aumente a eficiência com sistemas personalizados.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm border-0">
              <div class="card-body">
                <h5 class="card-title text-dev">Consultoria em TI</h5>
                <p class="card-text">Apoio técnico para otimizar a infraestrutura de tecnologia da sua empresa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Código de Exemplo -->
    <section class="container my-5">
      <h2 class="text-center text-dev mb-4">Meu Código</h2>
      <div class="code-box">
        <code>
  function greet(name) {<br>
  <br>
  }<br>
  greet('Visitante');
        </code>
      </div>
    </section>
    
    <!-- Depoimentos -->
    <section class="container my-5">
      <h2 class="text-center text-dev mb-4">Depoimentos</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card shadow-sm border-0">
            <div class="card-body">
              <p class="card-text">"Trabalhar com o CodeCraft foi incrível. O sistema desenvolvido superou todas as nossas expectativas." - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="${imageLink2}" alt="Depoimentos" class="img-fluid rounded shadow">
        </div>
      </div>
    </section>
    
    <!-- Contato -->
    <footer class="bg-dev text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 CodeCraft. Todos os direitos reservados.</small>
      </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>
  
  
  `, 
  `  
  <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consulta CNPJ | Soluções Financeiras para Empresas</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #f8f9fa;
      color: #343a40;
    }
    .bg-finance {
      background: linear-gradient(to right, #1a2980, #26d0ce);
      color: white;
    }
    .text-finance {
      color: #1a2980;
    }
    .btn-finance {
      background-color: #26d0ce;
      border: none;
      color: white;
      font-weight: bold;
    }
    .btn-finance:hover {
      background-color: #1a2980;
      color: white;
    }
    .search-box {
      background-color: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .result-card {
      border-left: 4px solid #26d0ce;
    }
    .feature-icon {
      font-size: 2.5rem;
      color: #26d0ce;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <header class="bg-finance text-white text-center py-5">
    <div class="container">
      <h1 class="display-4 fw-bold">Consulta CNPJ</h1>
      <p class="lead">Soluções financeiras personalizadas para sua empresa</p>
    </div>
  </header>
  
  <!-- Consulta CNPJ -->
  <section class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="search-box">
          <h2 class="text-center text-finance mb-4">Consultar Empresa</h2>
          <form>
            <div class="mb-3">
              <label for="cnpjInput" class="form-label">CNPJ</label>
              <input type="text" class="form-control form-control-lg" id="cnpjInput" placeholder="00.000.000/0000-00">
            </div>
            <button type="submit" class="btn btn-finance btn-lg w-100">Consultar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Resultados da Consulta (exemplo) -->
  <section class="container my-5">
    <h2 class="text-center text-finance mb-4">Resultados da Consulta</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm result-card">
          <div class="card-body">
            <h5 class="card-title text-finance">Dados Cadastrais</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Razão Social:</strong> EMPRESA EXEMPLO LTDA</li>
              <li class="list-group-item"><strong>Nome Fantasia:</strong> Exemplo Comércio</li>
              <li class="list-group-item"><strong>Data de Abertura:</strong> 10/05/2010</li>
              <li class="list-group-item"><strong>Porte:</strong> ME</li>
              <li class="list-group-item"><strong>Natureza Jurídica:</strong> 213-5 - Empresa Individual</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm result-card">
          <div class="card-body">
            <h5 class="card-title text-finance">Endereço e Contato</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Logradouro:</strong> Rua das Amostras</li>
              <li class="list-group-item"><strong>Número:</strong> 100</li>
              <li class="list-group-item"><strong>Complemento:</strong> Sala 101</li>
              <li class="list-group-item"><strong>CEP:</strong> 01000-000</li>
              <li class="list-group-item"><strong>Telefone:</strong> (11) 9999-9999</li>
              <li class="list-group-item"><strong>Email:</strong> contato@empresaexemplo.com.br</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Produtos Financeiros -->
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center text-finance mb-5">Produtos Financeiros Disponíveis</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center">
              <div class="feature-icon">💳</div>
              <h4 class="card-title text-finance">Cartão Corporativo</h4>
              <p class="card-text">Controle de gastos com limites personalizados por colaborador e relatórios detalhados.</p>
              <a href="#" class="btn btn-finance">Saiba mais</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center">
              <div class="feature-icon">💰</div>
              <h4 class="card-title text-finance">Empréstimo Empresarial</h4>
              <p class="card-text">Taxas competitivas e condições especiais conforme o faturamento da sua empresa.</p>
              <a href="#" class="btn btn-finance">Saiba mais</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center">
              <div class="feature-icon">📈</div>
              <h4 class="card-title text-finance">Conta Digital PJ</h4>
              <p class="card-text">Isenção de tarifas, TEDs ilimitadas e integração com seu sistema de gestão.</p>
              <a href="#" class="btn btn-finance">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Benefícios -->
  <section class="container my-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="https://via.placeholder.com/600x400" alt="Benefícios" class="img-fluid rounded shadow">
      </div>
      <div class="col-md-6">
        <h2 class="text-finance">Por que consultar conosco?</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item border-0 ps-0">✔️ Consultas rápidas e seguras diretamente na Receita Federal</li>
          <li class="list-group-item border-0 ps-0">✔️ Análise de crédito pré-aprovada para produtos financeiros</li>
          <li class="list-group-item border-0 ps-0">✔️ Recomendação de produtos adequados ao seu perfil empresarial</li>
          <li class="list-group-item border-0 ps-0">✔️ Processo 100% digital sem burocracia</li>
          <li class="list-group-item border-0 ps-0">✔️ Suporte especializado para MEIs, micro e pequenas empresas</li>
        </ul>
      </div>
    </div>
  </section>
  
  <!-- Depoimentos -->
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center text-finance mb-5">Empresas que confiam em nós</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <p class="card-text">"Conseguimos um empréstimo com taxas muito melhores após a consulta pelo site. O processo foi rápido e transparente."</p>
              <div class="d-flex align-items-center mt-3">
                <img src="${imageLink1}" class="rounded-circle me-3" alt="Cliente">
                <div>
                  <h6 class="mb-0">Carlos Silva</h6>
                  <small class="text-muted">Diretor - Silva & Cia Ltda</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <p class="card-text">"O cartão corporativo resolveu nosso problema de controle de gastos. A aprovação foi imediata após a consulta de CNPJ."</p>
              <div class="d-flex align-items-center mt-3">
                <img src="${imageLink2}" class="rounded-circle me-3" alt="Cliente">
                <div>
                  <h6 class="mb-0">Ana Oliveira</h6>
                  <small class="text-muted">Gerente - Oliveira Consultoria</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <p class="card-text">"Migramos nossa conta bancária após a consulta e economizamos mais de R$ 500/mês em tarifas. Recomendo!"</p>
              <div class="d-flex align-items-center mt-3">
                <img src="https://via.placeholder.com/50" class="rounded-circle me-3" alt="Cliente">
                <div>
                  <h6 class="mb-0">Roberto Santos</h6>
                  <small class="text-muted">CEO - TechSolutions MEI</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA -->
  <section class="bg-finance text-white py-5">
    <div class="container text-center">
      <h2 class="mb-4">Pronto para encontrar as melhores soluções financeiras para sua empresa?</h2>
      <a href="#cnpjInput" class="btn btn-light btn-lg px-5">Consultar Agora</a>
    </div>
  </section>
  
  <!-- Rodapé -->
<footer class="bg-dev text-blue text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 CodeCraft. Todos os direitos reservados.</small>
      </div>
    </footer>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
  `, 
    ` 
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EnergPlus | Economize no Mercado Livre de Energia</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    :root {
      --primary: #00a859;
      --secondary: #0078d7;
      --dark: #1e3a56;
      --light: #f8f9fa;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
    }
    .bg-energy {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
    }
    .text-energy {
      color: var(--primary);
    }
    .btn-energy {
      background-color: var(--primary);
      color: white;
      font-weight: 600;
      padding: 12px 30px;
      border-radius: 50px;
      border: none;
    }
    .btn-energy:hover {
      background-color: var(--dark);
      color: white;
    }
    .feature-icon {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 1rem;
    }
    .benefit-card {
      border-left: 4px solid var(--primary);
      transition: all 0.3s ease;
    }
    .benefit-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .nav-pills .nav-link.active {
      background-color: var(--primary);
    }
    .nav-pills .nav-link {
      color: var(--dark);
    }
  </style>
</head>
<body>
  <!-- Cabeçalho -->
  <header class="bg-energy text-white py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="display-4 fw-bold mb-3">Economize até 30% na sua conta de energia</h1>
          <p class="lead">Migre para o Mercado Livre de Energia com a nossa consultoria especializada</p>
          <a href="#calculator" class="btn btn-light btn-lg mt-3">Simule sua economia</a>
        </div>
        <div class="col-md-6">
          <img src="https://via.placeholder.com/600x400" alt="Economia de energia" class="img-fluid rounded shadow">
        </div>
      </div>
    </div>
  </header>

  <!-- Calculadora de Economia -->
  <section id="calculator" class="py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow-sm border-0">
            <div class="card-body p-5">
              <h2 class="text-center text-energy mb-4">Quanto você pode economizar?</h2>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="consumo" class="form-label">Consumo Mensal (kWh)</label>
                    <input type="number" class="form-control form-control-lg" id="consumo" placeholder="Ex: 10000">
                  </div>
                  <div class="col-md-6">
                    <label for="tarifa" class="form-label">Tarifa Atual (R$/kWh)</label>
                    <input type="number" step="0.01" class="form-control form-control-lg" id="tarifa" placeholder="Ex: 0.75">
                  </div>
                  <div class="col-md-6">
                    <label for="tensao" class="form-label">Tensão</label>
                    <select class="form-select form-select-lg" id="tensao">
                      <option value="baixa">Baixa Tensão (≤ 2,3 kV)</option>
                      <option value="media">Média Tensão (2,3 kV a 69 kV)</option>
                      <option value="alta">Alta Tensão (> 69 kV)</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="modalidade" class="form-label">Modalidade</label>
                    <select class="form-select form-select-lg" id="modalidade">
                      <option value="verde">Mercado Cativo (Tarifa Verde)</option>
                      <option value="azul">Mercado Cativo (Tarifa Azul)</option>
                      <option value="livre">Já no Mercado Livre</option>
                    </select>
                  </div>
                  <div class="col-12 mt-4">
                    <button type="submit" class="btn btn-energy w-100 py-3">Calcular Economia</button>
                  </div>
                </div>
              </form>
              
              <!-- Resultado -->
              <div class="mt-5 text-center" id="resultado" style="display: none;">
                <h3 class="text-energy">Sua economia potencial</h3>
                <div class="display-4 fw-bold text-success">R$ 8.250/mês</div>
                <p class="text-muted">Com base no seu consumo de 10.000 kWh/mês</p>
                <a href="#contact" class="btn btn-energy mt-3">Quero migrar agora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefícios -->
  <section class="py-5">
    <div class="container">
      <h2 class="text-center text-energy mb-5">Vantagens do Mercado Livre de Energia</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 benefit-card border-0 shadow-sm">
            <div class="card-body">
              <div class="feature-icon">💰</div>
              <h4 class="card-title text-energy">Economia</h4>
              <p class="card-text">Redução de até 30% nos custos com energia elétrica em relação ao mercado regulado.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 benefit-card border-0 shadow-sm">
            <div class="card-body">
              <div class="feature-icon">📅</div>
              <h4 class="card-title text-energy">Previsibilidade</h4>
              <p class="card-text">Contratos de longo prazo com preços estáveis, protegendo seu negócio contra variações tarifárias.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 benefit-card border-0 shadow-sm">
            <div class="card-body">
              <div class="feature-icon">🌱</div>
              <h4 class="card-title text-energy">Sustentabilidade</h4>
              <p class="card-text">Escolha fontes renováveis e melhore a imagem ambiental da sua empresa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Como Funciona -->
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center text-energy mb-5">Como funciona a migração</h2>
      <div class="row">
        <div class="col-lg-6">
          <img src="https://via.placeholder.com/600x400" alt="Processo de migração" class="img-fluid rounded shadow">
        </div>
        <div class="col-lg-6">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-step1-tab" data-bs-toggle="pill" data-bs-target="#pills-step1" type="button" role="tab">1. Análise</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-step2-tab" data-bs-toggle="pill" data-bs-target="#pills-step2" type="button" role="tab">2. Migração</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-step3-tab" data-bs-toggle="pill" data-bs-target="#pills-step3" type="button" role="tab">3. Economia</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-step1" role="tabpanel">
              <h4 class="text-energy">Análise de viabilidade</h4>
              <p>Nossos especialistas avaliam seu consumo histórico e padrão de demanda para determinar o potencial de economia no Mercado Livre.</p>
              <p>Elaboramos um relatório detalhado com projeções de custos comparando seu cenário atual com as opções disponíveis.</p>
            </div>
            <div class="tab-pane fade" id="pills-step2" role="tabpanel">
              <h4 class="text-energy">Processo de migração</h4>
              <p>Curamos todo o processo burocrático junto à CCEE, distribuidora e agentes comercializadores.</p>
              <p>Realizamos leilões competitivos para garantir os melhores preços junto aos fornecedores de energia.</p>
            </div>
            <div class="tab-pane fade" id="pills-step3" role="tabpanel">
              <h4 class="text-energy">Monitoramento contínuo</h4>
              <p>Após a migração, acompanhamos continuamente o mercado para otimizar seus contratos e garantir que você sempre tenha a melhor relação custo-benefício.</p>
              <p>Fornecemos relatórios mensais detalhados sobre seu consumo e custos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Para Quem -->
  <section class="py-5">
    <div class="container">
      <h2 class="text-center text-energy mb-5">Para quem é o Mercado Livre?</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center">
              <div class="feature-icon">🏭</div>
              <h4 class="card-title text-energy">Indústrias</h4>
              <p class="card-text">Empresas com consumo acima de 500 kW/mês ou demanda contratada acima de 500 kW.</p>
              <p class="text-muted">Economia média: 25-35%</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center">
              <div class="feature-icon">🏢</div>
              <h4 class="card-title text-energy">Comércios</h4>
              <p class="card-text">Shoppings, redes varejistas e outros grandes consumidores comerciais.</p>
              <p class="text-muted">Economia média: 20-30%</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center">
              <div class="feature-icon">🏥</div>
              <h4 class="card-title text-energy">Serviços</h4>
              <p class="card-text">Hospitais, hotéis, condomínios comerciais e outras grandes instituições.</p>
              <p class="text-muted">Economia média: 18-28%</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <div class="alert alert-info d-inline-block">
          <strong>Novidade:</strong> A partir de 2024, consumidores a partir de 500 kW já podem migrar!
        </div>
      </div>
    </div>
  </section>

  <!-- Depoimentos -->
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center text-energy mb-5">O que nossos clientes dizem</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <div class="d-flex mb-3">
                <img src="${imageLink1}" class="rounded-circle me-3" alt="Cliente">
                <div>
                  <h5 class="mb-0">Carlos Mendes</h5>
                  <small class="text-muted">Diretor Industrial - Tecelagem Modelo</small>
                </div>
              </div>
              <p class="card-text">"Migramos há 2 anos e já economizamos mais de R$ 1,2 milhão. O processo foi muito bem conduzido pela equipe da EnergPlus."</p>
              <div class="text-warning">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <div class="d-flex mb-3">
                <img src="${imageLink2}" class="rounded-circle me-3" alt="Cliente">
                <div>
                  <h5 class="mb-0">Ana Lúcia Torres</h5>
                  <small class="text-muted">Gerente Administrativa - Shopping Vitória</small>
                </div>
              </div>
              <p class="card-text">"Além da economia de 28%, passamos a ter muito mais previsibilidade nos nossos custos, o que ajuda no planejamento financeiro."</p>
              <div class="text-warning">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Final -->
  <section id="contact" class="py-5 bg-energy text-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="display-5 fw-bold mb-4">Pronto para reduzir seus custos com energia?</h2>
          <p class="lead mb-5">Nossos especialistas estão prontos para ajudar sua empresa a migrar para o Mercado Livre de Energia com segurança e economia.</p>
          <div class="row g-3 justify-content-center">
            <div class="col-md-8">
              <form>
                <div class="input-group mb-3">
                  <input type="email" class="form-control form-control-lg" placeholder="Seu melhor e-mail">
                  <button class="btn btn-light btn-lg" type="submit">Quero economizar</button>
                </div>
              </form>
            </div>
          </div>
          <p class="mt-4">Ou fale diretamente com nosso time: <strong>(31) 99999-9999</strong></p>
        </div>
      </div>
    </div>
  </section>

  <!-- Rodapé -->
<footer class="bg-dev text-white text-center py-4">
      <div class="container">
        <p class="mb-1">Razão Social: ${razaoSocial}</p>
        <p class="mb-1">CNPJ: ${cnpj}</p>
        <p class="mb-1">Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cep}</p>
        <p class="mb-0">Telefone: ${telefone}</p>
        <p class="mb-0">Email: ${email}</p>
      </div>
      <div class="text-muted mt-3">
        <small>&copy; 2024 CodeCraft. Todos os direitos reservados.</small>
      </div>
    </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
    `

];
const selectItem = document.getElementById('selectItem');
const index = selectItem.options[selectItem.selectedIndex].value;
const htmlContent = htmlContents[index];

const dominio = document.getElementById('dominio').value;
enviarParaN8n(razaoSocial, htmlContent, dominio, pdf);

  
    }