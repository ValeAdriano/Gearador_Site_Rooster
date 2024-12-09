const ENDERECOS = [
    {"rua": "Rua Marechal Deodoro", "cep": "80010-010", "bairro": "Centro", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Avenida Visconde de Guarapuava", "cep": "80010-100", "bairro": "Centro", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Rua Comendador Araújo", "cep": "80420-000", "bairro": "Centro", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Rua Emiliano Perneta", "cep": "80420-080", "bairro": "Centro", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Rua Mateus Leme", "cep": "80510-190", "bairro": "São Francisco", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Avenida Iguaçu", "cep": "80230-020", "bairro": "Água Verde", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Rua Augusto Stresser", "cep": "80260-000", "bairro": "Juvevê", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Rua Professor Pedro Viriato Parigot de Souza", "cep": "81200-100", "bairro": "Mossunguê", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Rua General Carneiro", "cep": "80060-150", "bairro": "Alto da Glória", "estado": "PR", "cidade": "Curitiba"},
    {"rua": "Avenida República Argentina", "cep": "80620-010", "bairro": "Portão", "estado": "PR", "cidade": "Curitiba"}
];

const TELEFONES = ["(41) 8887-5384", "(41) 9749-4298"];
const EMAILS = ["luankaseckert@gmail.com", "luankasetima@gmail.com"];
let razoesSociais = [];

function calcularDigitos(cnpjBase) {
    const pesosPrimeiro = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesosSegundo = [6].concat(pesosPrimeiro);

    let soma = cnpjBase.split('').reduce((acc, num, i) => acc + num * pesosPrimeiro[i], 0);
    let primeiroDigito = 11 - (soma % 11);
    primeiroDigito = primeiroDigito < 10 ? primeiroDigito : 0;

    cnpjBase += primeiroDigito;
    soma = cnpjBase.split('').reduce((acc, num, i) => acc + num * pesosSegundo[i], 0);
    let segundoDigito = 11 - (soma % 11);
    segundoDigito = segundoDigito < 10 ? segundoDigito : 0;

    return `${primeiroDigito}${segundoDigito}`;
}

function gerarCnpj() {
    let cnpjBase = Array.from({length: 8}, () => Math.floor(Math.random() * 10)).join('') + "0001";
    let digitos = calcularDigitos(cnpjBase);
    return `${cnpjBase.slice(0, 2)}.${cnpjBase.slice(2, 5)}.${cnpjBase.slice(5, 8)}/${cnpjBase.slice(8, 12)}-${digitos}`;
}

function carregarRazoesSociais(content) {
    razoesSociais = content.split(';').map(razao => razao.trim()).filter(razao => razao);
    alert(`Razões sociais carregadas: ${razoesSociais.length}`);
}

function gerarDados() {
    if (!razoesSociais.length) {
        alert("Nenhuma razão social carregada. Carregue um arquivo primeiro.");
        return;
    }

    if (!EMAILS.length) {
        alert("Nenhum email carregado. Carregue um arquivo de emails primeiro.");
        return;
    }

    let dados = razoesSociais.map((razao, i) => {
        let cnpj = gerarCnpj();
        let endereco = ENDERECOS[Math.floor(Math.random() * ENDERECOS.length)];
        let telefone = TELEFONES[Math.floor(Math.random() * TELEFONES.length)];
        let email = EMAILS[i % EMAILS.length];
        let numero = Math.floor(Math.random() * 9999) + 1;
        return {
            cnpj,
            razao,
            endereco: `${endereco.rua}, ${numero}, ${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}, ${endereco.cep}`,
            email,
            telefone
        };
    });

    gerarPDFs(dados);
}

function gerarPDFs(dados) {
    const { jsPDF } = window.jspdf;

    dados.forEach(dado => {
        const doc = new jsPDF();
        doc.text("CNPJ Card", 10, 10);
        doc.text(`CNPJ: ${dado.cnpj}`, 10, 20);
        doc.text(`Company Name: ${dado.razao}`, 10, 30);
        doc.text(`Address: ${dado.endereco}`, 10, 40);
        doc.text(`Email: ${dado.email}`, 10, 50);
        doc.text(`Phone: ${dado.telefone}`, 10, 60);

        doc.save(`${dado.razao}.pdf`);
    });
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            carregarRazoesSociais(e.target.result);
            gerarDados();
        };
        reader.readAsText(file);
    };
    input.click();
});

document.addEventListener("DOMContentLoaded", function() {
    const { jsPDF } = window.jspdf;

    document.getElementById("generateBtn").addEventListener("click", function() {
        // Generate CNPJ logic here
    });

    const downloadBtn = document.createElement("button");
    downloadBtn.className = "btn btn-secondary btn-block mt-3";
    downloadBtn.innerText = "Download as PDF";
    document.querySelector(".card-body").appendChild(downloadBtn);

    downloadBtn.addEventListener("click", function() {
        const doc = new jsPDF();
        const cnpj = document.getElementById("cnpjValue").innerText;
        const companyName = document.getElementById("companyName").innerText;
        const companyAddress = document.getElementById("companyAddress").innerText;

        doc.text("CNPJ Card", 10, 10);
        doc.text(`CNPJ: ${cnpj}`, 10, 20);
        doc.text(`Company Name: ${companyName}`, 10, 30);
        doc.text(`Address: ${companyAddress}`, 10, 40);

        doc.save("CNPJ_Card.pdf");
    });
});
function gerarPDFs(dados) {
    const { jsPDF } = window.jspdf;

    dados.forEach(dado => {
        const doc = new jsPDF();
        doc.text("CNPJ Card", 10, 10);
        doc.text(`CNPJ: ${dado.cnpj}`, 10, 20);
        doc.text(`Company Name: ${dado.razao}`, 10, 30);
        doc.text(`Address: ${dado.endereco}`, 10, 40);
        doc.text(`Email: ${dado.email}`, 10, 50);
        doc.text(`Phone: ${dado.telefone}`, 10, 60);

        doc.save(`${dado.razao}.pdf`);
    });
}

document.getElementById("downloadAllBtn").addEventListener("click", function() {
    gerarDados();
});
