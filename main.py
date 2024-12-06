import tkinter as tk
from tkinter import messagebox, filedialog
import random
from weasyprint import HTML

# Lista de endereços com seus respectivos dados
ENDERECOS = [
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
]

# Lista de telefones válidos para aleatorizar
TELEFONES = ["(41) 8887-5384", "(41) 9749-4298"]

# Lista de emails pré-definidos
EMAILS = ["luankaseckert@gmail.com", "luankasetima@gmail.com"]

# Lista global para armazenar as razões sociais carregadas do arquivo
razoes_sociais = []

def calcular_digitos(cnpj_base):
    pesos_primeiro = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    pesos_segundo = [6] + pesos_primeiro

    soma = sum(int(cnpj_base[i]) * pesos_primeiro[i] for i in range(12))
    primeiro_digito = 11 - (soma % 11)
    primeiro_digito = primeiro_digito if primeiro_digito < 10 else 0

    cnpj_base += str(primeiro_digito)
    soma = sum(int(cnpj_base[i]) * pesos_segundo[i] for i in range(13))
    segundo_digito = 11 - (soma % 11)
    segundo_digito = segundo_digito if segundo_digito < 10 else 0

    return f"{primeiro_digito}{segundo_digito}"

def gerar_cnpj():
    cnpj_base = ''.join([str(random.randint(0, 9)) for _ in range(8)]) + "0001"
    digitos = calcular_digitos(cnpj_base)
    return f"{cnpj_base[:2]}.{cnpj_base[2:5]}.{cnpj_base[5:8]}/{cnpj_base[8:12]}-{digitos}"

def carregar_razoes_sociais():
    global razoes_sociais
    file_path = filedialog.askopenfilename(
        title="Selecione o arquivo de razões sociais",
        filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")]
    )
    if file_path:
        try:
            with open(file_path, "r", encoding="utf-8") as file:
                conteudo = file.read()
                razoes_sociais = [razao.strip() for razao in conteudo.split(";") if razao.strip()]
            messagebox.showinfo("Sucesso", f"Razões sociais carregadas: {len(razoes_sociais)}")
        except Exception as e:
            messagebox.showerror("Erro", f"Erro ao carregar o arquivo: {e}")

def gerar_dados_html():
    if not razoes_sociais:
        messagebox.showerror("Erro", "Nenhuma razão social carregada. Carregue um arquivo primeiro.")
        return

    brasao_path = "brasao.gif"  # Caminho fixo da imagem

    for i, razao in enumerate(razoes_sociais):
        cnpj = gerar_cnpj()
        endereco = random.choice(ENDERECOS)
        telefone = random.choice(TELEFONES)
        email = EMAILS[i % len(EMAILS)]
        numero = random.randint(1, 9999)

        html_content = f"""
        <html>
        <head><title>Comprovante</title></head>
        <body>
            <h1>Comprovante de Dados</h1>
            <img src="{brasao_path}" alt="Brasão" width="100" height="100">
            <p><b>CNPJ:</b> {cnpj}</p>
            <p><b>Razão Social:</b> {razao}</p>
            <p><b>Endereço:</b> {endereco['rua']}, {numero} - {endereco['bairro']}, {endereco['cidade']} - {endereco['estado']}</p>
            <p><b>CEP:</b> {endereco['cep']}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Telefone:</b> {telefone}</p>
        </body>
        </html>
        
        <html lang="pt-br">

<head>



</head>


<body class="vsc-initialized">
  <div id="esg_atica"></div>




  <div id="app">



    <div class="container content-wrapper">

      <div class="conteudo">

        <div class="row">

          <div class="col-md-12 content">



            <div class="row">
              <div class="col-md-12">

                <!-- Início Definições da tabela principal teste -->
                <!-- || -->
                <!-- \/ -->



                <div id="principal">

                  <table border="1" cellspacing="0" style="width:17cm;	line-height: 9pt;">
                    <tbody>
                      <tr>
                        <td style="border:solid windowtext .5pt; padding:5.65pt 5.65pt 5.65pt 5.65pt">

                          <!-- /\ -->
                          <!-- || -->
                          <!-- Fim Definições da tabela principal -->

                          <!-- Início Cabeçalho do Cartão -->

                          <table border="0" width="100%" style="line-height: 9pt;">
                            <tbody>
                              <tr>
                                <td valign="middle" align="left" width="60" height="60">
                                  <img width="60" height="60" src="/brasao2.gif" alt="Brasão" border="0">
                                </td>

                                <td align="center">

                                  <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                                  <font face="Arial" size="4">
                                    <b>
                                      REPÚBLICA FEDERATIVA DO BRASIL
                                    </b>
                                  </font>

                                  <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>
                                  <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>
                                  <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                                  <font face="Arial">
                                    <b>
                                      CADASTRO NACIONAL DA PESSOA JURÍDICA
                                    </b>
                                  </font>

                                  <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                                </td>
                                <td valign="middle" align="left" width="60" height="60"></td>
                              </tr>
                            </tbody>
                          </table>

                          <!-- Fim Cabeçalho do Cartão -->


                          <!-- Início Linha NÚMERO DE INSCRIÇÃO -->

                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse;
          ">
                            <tbody>
                              <tr>

                                <td width="24%" valign="top" border="1" style="	
          border-right: windowtext 0.5pt solid; 
          border-top: windowtext 0.5pt solid; 
          border-left: windowtext 0.5pt solid; 
          border-bottom: windowtext 0.5pt solid; 
          padding-left: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    NÚMERO DE INSCRIÇÃO
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>47.113.767/0001-90</b><br>
                                    <b>MATRIZ</b>
                                  </font>


                                  <br>

                                </td>

                                <td width="52%" valign="center" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <center>
                                    <font face="Arial" style="font-size: 10pt">
                                      <b>
                                        COMPROVANTE DE INSCRIÇÃO E DE SITUAÇÃO CADASTRAL
                                      </b>
                                    </font>
                                  </center>

                                </td>

                                <td width="24%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt;
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    DATA DE ABERTURA
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>12/07/2022</b>
                                  </font>

                                  <br>
                                </td>

                              </tr>
                            </tbody>
                          </table>


                          <!-- Fim Linha NÚMERO DE INSCRIÇÃO -->


                          <!-- Início Linha NOME EMPRESARIAL -->

                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">


                            <tbody>
                              <tr>


                                <td width="100%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    NOME EMPRESARIAL
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>47.113.767 IRANIR ANDRADE DA SILVA </b>
                                  </font>

                                  <br>

                                </td>

                              </tr>

                            </tbody>
                          </table>

                          <!-- Fim Linha NOME EMPRESARIAL -->







                          <!-- Início Linha ESTABELECIMENTO -->


                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="88%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    TÍTULO DO ESTABELECIMENTO (NOME DE FANTASIA)
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> ********</b>
                                  </font>

                                  <br>
                                </td>


                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <!-- Início Coluna PORTE DA EMPRESA -->

                                <td width="10%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    PORTE
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>ME</b>
                                  </font>

                                  <br>
                                </td>
                                <!-- Fim Coluna PORTE DA EMPRESA -->


                              </tr>

                            </tbody>
                          </table>


                          <!-- Fim Linha ESTABELECIMENTO -->

                          <!-- Início Linha ATIVIDADE ECONOMICA -->


                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="100%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    CÓDIGO E DESCRIÇÃO DA ATIVIDADE ECONÔMICA PRINCIPAL
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 47.13-0-02 - Lojas de variedades, exceto lojas de departamentos ou magazines</b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>



                          <!-- Fim Linha ATIVIDADE ECONOMICA -->
                          <!-- Início Linha ATIVIDADE ECONOMICA SECUNDARIA-->



                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="100%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    CÓDIGO E DESCRIÇÃO DAS ATIVIDADES ECONÔMICAS SECUNDÁRIAS
                                  </font>
                                  <br>


                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 47.89-0-03 - Comércio varejista de objetos de arte</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 47.89-0-99 - Comércio varejista de outros produtos não especificados
                                      anteriormente</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 25.99-3-99 - Fabricação de outros produtos de metal não especificados
                                      anteriormente</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 23.91-5-03 - Aparelhamento de placas e execução de trabalhos em mármore,
                                      granito, ardósia e outras pedras</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 47.59-8-01 - Comércio varejista de artigos de tapeçaria, cortinas e
                                      persianas</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 47.55-5-03 - Comercio varejista de artigos de cama, mesa e banho</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 23.49-4-99 - Fabricação de produtos cerâmicos não-refratários não especificados
                                      anteriormente</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 47.54-7-03 - Comércio varejista de artigos de iluminação</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 17.49-4-00 - Fabricação de produtos de pastas celulósicas, papel, cartolina,
                                      papel-cartão e papelão ondulado não especificados anteriormente</b>
                                  </font>
                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> 23.99-1-01 - Decoração, lapidação, gravação, vitrificação e outros trabalhos em
                                      cerâmica, louça, vidro e cristal</b>
                                  </font>
                                  <br>


                                </td>

                              </tr>

                            </tbody>
                          </table>

                          <!-- Fim Linha ATIVIDADE ECONOMICA SECUNDARIA --><!-- Início Linha NATUREZA JURÍDICA -->


                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="100%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    CÓDIGO E DESCRIÇÃO DA NATUREZA JURÍDICA
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>213-5 - Empresário (Individual) </b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>


                          <!-- Fim Linha NATUREZA JURÍDICA -->



                          <!-- Início Linha LOGRADOURO -->


                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="50%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    LOGRADOURO
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> {endereco['rua']} </b>
                                  </font>

                                  <br>
                                </td>

                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="10%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 	
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    NÚMERO
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> {numero} </b>
                                  </font>

                                  <br>
                                </td>

                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="36%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 	
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    COMPLEMENTO
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>BLOCO 3 B APTO 901 </b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>


                          <!-- Fim Linha LOGRADOURO -->


                          <!-- Início Linha CEP -->


                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="18%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    CEP
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> {endereco['cep']} </b>
                                  </font>

                                  <br>
                                </td>

                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="30%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 	
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    BAIRRO/DISTRITO
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> {endereco['bairro']} </b>
                                  </font>

                                  <br>
                                </td>

                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="38%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 	
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    MUNICÍPIO
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>CURITIBA </b>
                                  </font>

                                  <br>
                                </td>

                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="10%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 	
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    UF
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>PR</b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>


                          <!-- Fim Linha CEP -->


                          <!-- Início de Linha de Contato -->
                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="50%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    ENDEREÇO ELETRÔNICO
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> {email} </b>
                                  </font>

                                  <br>
                                </td>

                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="48%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 	
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    TELEFONE
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> {telefone} </b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>
                          <!-- Fim de Linha de Contato -->

                          <!-- Início de Linha de Ente Federativo -->

                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="BORDER-COLLAPSE: collapse;">

                            <tbody>
                              <tr>

                                <td width="100%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    ENTE FEDERATIVO RESPONSÁVEL (EFR)
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>
                                      *****
                                    </b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>

                          <!-- Fim de Linha de Ente Federativo -->



                          <!-- Início Linha SITUAÇÃO CADASTRAL -->

                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="64%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    SITUAÇÃO CADASTRAL
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> ATIVA </b>
                                  </font>

                                  <br>
                                </td>


                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="24%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 	
          BORDER-LEFT: medium none; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">
                                  <font face="Arial" style="font-size: 6pt">
                                    DATA DA SITUAÇÃO CADASTRAL
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b>12/07/2022</b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>


                          <!-- Fim Linha SITUACAO CADASTRAL -->

                          <!-- Início Linha MOTIVO DE SITUAÇÃO CADASTRAL -->

                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>
                                <td width="31%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    MOTIVO DE SITUAÇÃO CADASTRAL
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> </b>
                                  </font>

                                  <br>
                                </td>
                              </tr>

                            </tbody>
                          </table>

                          <!-- Fim Linha MOTIVO DE SITUAÇÃO CADASTRAL -->


                          <!-- Início Linha SITUAÇÃO ESPECIAL -->

                          <p style="margin:0cm; margin-bottom:0pt;">&nbsp;</p>

                          <table border="0" width="100%" style="	
          BORDER-COLLAPSE: collapse; 
          ">

                            <tbody>
                              <tr>

                                <td width="64%" valign="top" style="	
          BORDER-RIGHT: windowtext 0.5pt solid; 
          BORDER-TOP: windowtext 0.5pt solid; 
          BORDER-LEFT: windowtext 0.5pt solid; 
          BORDER-BOTTOM: windowtext 0.5pt solid; 
          PADDING-LEFT: 3.5pt; 
          padding-bottom: 3.5pt;
          ">

                                  <font face="Arial" style="font-size: 6pt">
                                    SITUAÇÃO ESPECIAL
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> ******** </b>
                                  </font>

                                  <br>
                                </td>

                                <td width="2%" border="0" style="BORDER-RIGHT: windowtext 0.5pt solid;"> </td>

                                <td width="24%" valign="top" style="BORDER-RIGHT: windowtext 0.5pt solid; BORDER-TOP: windowtext 0.5pt solid; BORDER-LEFT: medium none; BORDER-BOTTOM: windowtext 0.5pt solid; PADDING-LEFT: 3.5pt; padding-bottom: 3.5pt;">
                                  <font face="Arial" style="font-size: 6pt">
                                    DATA DA SITUAÇÃO ESPECIAL
                                  </font>

                                  <br>

                                  <font face="Arial" style="font-size: 8pt">
                                    <b> ******** </b>
                                  </font>

                                  <br>
                                </td>

                              </tr>

                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br>
</body>
</html>
        
        
        """
        salvar_pdf(html_content, razao)

def salvar_pdf(html_content, razao):
    file_path = filedialog.asksaveasfilename(
        defaultextension=".pdf",
        filetypes=[("PDF Files", "*.pdf"), ("All Files", "*.*")],
        initialfile=f"{razao}.pdf"
    )
    if file_path:
        try:
            HTML(string=html_content, base_url=".").write_pdf(file_path)
            messagebox.showinfo("Sucesso", f"PDF salvo em {file_path}")
        except Exception as e:
            messagebox.showerror("Erro", f"Erro ao salvar o PDF: {e}")

# Interface gráfica
root = tk.Tk()
root.title("Gerador de PDFs")
root.geometry("500x400")

label_titulo = tk.Label(root, text="Gerador de PDFs com HTML", font=("Helvetica", 16, "bold"))
label_titulo.pack(pady=10)

button_carregar_razoes = tk.Button(root, text="Carregar Razões Sociais", command=carregar_razoes_sociais, width=30)
button_carregar_razoes.pack(pady=10)

button_gerar = tk.Button(root, text="Gerar PDFs", command=gerar_dados_html, width=30)
button_gerar.pack(pady=10)

root.mainloop()
