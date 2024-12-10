function modificarDados() {
    const razaoSocialInput = document.getElementById('razaoSocialInput').value;
    const cnpj = gerarCNPJ();
    const endereco = gerarEndereco();
    const telefone = gerarTelefone();
    const email = gerarEmail();

    document.getElementById('cnpj').innerText = cnpj;
    document.getElementById('razaoSocial').innerText = razaoSocialInput;
    document.getElementById('rua').innerText = endereco.rua;
    document.getElementById('numero').innerText = endereco.numero;
    document.getElementById('cep').innerText = endereco.cep;
    document.getElementById('bairro').innerText = endereco.bairro;
    document.getElementById('email').innerText = email;
    document.getElementById('telefone').innerText = telefone;

    downloadCNPJ(razaoSocialInput);
  }

  function gerarCNPJ() {
    const cnpjBase = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('') + '0001';
    const digitos = calcularDigitos(cnpjBase);
    return `${cnpjBase.slice(0, 2)}.${cnpjBase.slice(2, 5)}.${cnpjBase.slice(5, 8)}/${cnpjBase.slice(8, 12)}-${digitos}`;
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
    const enderecos = [
        { rua: "AVENIDA VISCONDE DE GUARAPUAVA", cep: "80010-100", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
        { rua: "RUA COMENDADOR ARAÚJO", cep: "80420-000", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
        { rua: "RUA EMILIANO PERNETA", cep: "80420-080", bairro: "CENTRO", estado: "PR", cidade: "CURITIBA" },
        { rua: "RUA MATEUS LEME", cep: "80510-190", bairro: "SÃO FRANCISCO", estado: "PR", cidade: "CURITIBA" },
        { rua: "AVENIDA IGUAÇU", cep: "80230-020", bairro: "ÁGUA VERDE", estado: "PR", cidade: "CURITIBA" },
        { rua: "RUA AUGUSTO STRESSER", cep: "80260-000", bairro: "JUVEVÊ", estado: "PR", cidade: "CURITIBA" },
        { rua: "RUA PROFESSOR PEDRO VIRIATO PARIGOT DE SOUZA", cep: "81200-100", bairro: "MOSSUNGUÊ", estado: "PR", cidade: "CURITIBA" },
        { rua: "RUA GENERAL CARNEIRO", cep: "80060-150", bairro: "ALTO DA GLÓRIA", estado: "PR", cidade: "CURITIBA" },
        { rua: "AVENIDA REPÚBLICA ARGENTINA", cep: "80620-010", bairro: "PORTÃO", estado: "PR", cidade: "CURITIBA" }

    ];
    const endereco = enderecos[Math.floor(Math.random() * enderecos.length)];
    endereco.numero = Math.floor(Math.random() * 9999) + 1;
    return endereco;
  }

  function gerarTelefone() {
    const telefones = ["(41) 8887-5384", "(41) 9749-4298"];
    return telefones[Math.floor(Math.random() * telefones.length)];
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
    const table = document.querySelector('table');

    doc.html(table, {
        callback: function (pdf) {
            const razaoSocial = document.getElementById('razaoSocial').innerText;
            pdf.save(`${razaoSocial}.pdf`);
        },
        x: 10,
        y: 10,
        html2canvas: {
            scale: 0.30 // Adjust the scale to fit content on one page
          }
    });
}

// Ensure the button calls the function
document.getElementById('downloadButton').onclick = downloadTableAsPDF;