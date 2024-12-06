const input = prompt("Digite os valores separados por ponto e vírgula (;)\n\nCNPJ; RAZÃO; RUA; NUMERO; CEP; BAIRRO; EMAIL; TELEFONE:\n\n").toUpperCase();

const values = input.split(";").map(item => item.trim());

if (values.length < 8) {
    console.error("Número insuficiente de valores fornecidos. Certifique-se de incluir 8 valores.");
} else {
    const replacements = [
        { index: 2, text: values[0] }, // CNPJ
        { index: 6, text: values[1] }, // Razão Social
        { index: 21, text: values[2] }, // Rua
        { index: 22, text: values[3] }, // Número
        { index: 23, text: "****" }, // Complemento
        { index: 24, text: values[4] }, // CEP
        { index: 25, text: values[5] }, // Bairro
        { index: 28, text: values[6] }, // Email
        { index: 29, text: values[7] }  // Telefone
    ];
    replacements.forEach(({ index, text }) => {
        const element = document.querySelectorAll("b")[index];
        if (element) {
            element.innerText = text;
            console.log(`Elemento <b> na posição ${index} atualizado com sucesso.`);
        } else {
            console.error(`Elemento <b> na posição ${index} não encontrado.`);
        }
    });
}