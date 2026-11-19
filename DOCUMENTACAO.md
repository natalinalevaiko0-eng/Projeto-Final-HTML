# Documentação do projeto Carro Fácil

## 1. Identificação do projeto

**Nome do projeto:** Carro Fácil  
**Tema:** compra, venda, aluguel e financiamento de veículos  
**Tipo de site:** site informativo e demonstrativo para uma loja de veículos  
**Público-alvo:** pessoas que desejam comprar, vender, alugar ou financiar um carro.

## 2. Tema escolhido

O tema escolhido foi o mercado de veículos. O site reúne, em um só lugar, diferentes serviços relacionados a carros:

- consulta de veículos disponíveis para compra;
- divulgação de promoções;
- aluguel de carros;
- cadastro de veículo para venda;
- financiamento;
- lojas parceiras;
- suporte ao cliente;
- revisão de carros em garantia;
- login e logout demonstrativos.

O tema foi escolhido por ser cotidiano e permitir a criação de várias páginas com funções diferentes. Dessa forma, o projeto apresenta não apenas informações, mas também interações e formulários.

## 3. Objetivos do site

### Objetivo geral

Criar uma plataforma simples, organizada e fácil de usar para apresentar veículos e serviços automotivos.

### Objetivos específicos

1. Mostrar carros com nome, preço, imagem e descrição.
2. Permitir que o usuário visualize detalhes de cada veículo.
3. Apresentar ofertas e promoções.
4. Oferecer uma área para o usuário anunciar o próprio carro.
5. Permitir uma simulação inicial de financiamento.
6. Apresentar opções de aluguel.
7. Criar canais de suporte e recuperação de senha.
8. Explicar a revisão de veículos que ainda estão na garantia.
9. Manter o conteúdo simples e acessível em telas grandes e pequenas.

## 4. Ferramentas e recursos utilizados

### Softwares

- **Visual Studio Code:** criação e edição dos arquivos do projeto.
- **Navegador web:** visualização e testes das páginas.
- **Explorador de arquivos:** organização das imagens e pastas.
- **Git/GitHub:** pode ser usado para controle de versões e compartilhamento do projeto.

### Recursos utilizados

- imagens de veículos armazenadas nas pastas `img` e `img/carrosaluguel`;
- arquivos HTML para estruturar as páginas;
- um arquivo CSS compartilhado para manter o mesmo visual;
- JavaScript para carrossel, formulários, prévias de imagens, login e simulador;
- links internos entre as páginas;
- elementos HTML acessíveis, como `label`, `alt`, `aria-label`, `details` e `summary`.

## 5. Linguagens utilizadas

### HTML5

Foi utilizado para criar a estrutura das páginas, incluindo cabeçalho, menu, textos, imagens, cards, formulários e rodapé.

### CSS3

Foi utilizado para definir cores, fontes, tamanhos, espaçamentos, bordas, sombras, grids, responsividade e estados de interação, como `hover` e `focus-visible`.

### JavaScript

Foi utilizado para adicionar comportamento às páginas. O arquivo principal é `js/script.js`, mas algumas páginas também possuem pequenos scripts próprios para funções específicas.

## 6. Sites de referência e inspiração

As referências foram utilizadas para observar organização de menus, apresentação de veículos, cards, chamadas para ação e informações de compra. O projeto não copia o código desses sites.

- [Webmotors](https://www.webmotors.com.br/): referência para listagem de veículos, preço e informações do anúncio.
- [Localiza Seminovos](https://seminovos.localiza.com/): referência para apresentação de carros e contato comercial.
- [Movida](https://www.movida.com.br/): referência para a área de aluguel de veículos.
- [Volkswagen Brasil](https://www.vw.com.br/): referência para informações de modelos e equipamentos.
- [Hyundai Brasil](https://www.hyundai.com.br/): referência para informações técnicas e equipamentos.

## 7. Estrutura de arquivos

```text
Carro Fácil/
├── index.html
├── comprar.html
├── vender.html
├── promoções.html
├── alugar.html
├── suporte.html
├── revisão.html
├── lojas.html
├── financiar.html
├── entrar.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── img/
    ├── carrosaluguel/
    └── imagens dos veículos
```

## 8. Divisão de tarefas entre os integrantes

Como os nomes da equipe não foram informados, a divisão abaixo usa funções que podem ser relacionadas aos integrantes reais.

| Integrante | Responsabilidade |

| Pedro Henrique Ludwinski| Pesquisa do tema, definição dos serviços e organização do conteúdo, testes, revisão dos textos, correção de links e apresentação final. |
| Natali Fernand Ferraz Nalevaiko| Criação das estruturas HTML e do menu de navegação, Criação do CSS, paleta de cores, tipografia e responsividade, Desenvolvimento do JavaScript, formulários e simulador. |


## 9. Dificuldades encontradas

### Organização do menu

Como o site possui várias páginas, foi necessário manter os mesmos links em todos os cabeçalhos e destacar a página atual.

### Responsividade

O menu, os cards e os formulários precisaram funcionar em computadores, tablets e celulares. Para isso, foram utilizadas media queries e grids adaptáveis.

### Acentuação nos nomes dos arquivos

Algumas páginas possuem acentos no nome, como `promoções.html` e `revisão.html`. Esses nomes precisam ser escritos exatamente iguais nos links.

### Ausência de servidor

O projeto é front-end. Portanto, login, envio de formulários, financiamento e aluguel são demonstrações no navegador. Para se tornarem sistemas reais, seria necessário um back-end, banco de dados e integração com serviços de autenticação ou financeiras.

### Dados dos veículos

Os preços e quilometragens usados nos cards são dados de exemplo. Antes de publicar o site, essas informações devem ser conferidas e substituídas pelos dados reais dos veículos.

## 10. Estudo da Experiência do Usuário (UX)

UX é a experiência que a pessoa tem ao usar o site. As principais decisões de UX foram:

- colocar o menu completo em todas as páginas;
- usar nomes de menu fáceis de entender;
- apresentar o objetivo da página logo no início;
- colocar botões de ação, como “Ver detalhes”, “Alugar este carro” e “Solicitar reserva”;
- permitir que os detalhes do carro sejam abertos somente quando necessário;
- organizar o financiamento em etapas simples;
- direcionar “Esqueci minha senha” diretamente para a área correta do suporte;
- mostrar mensagens de sucesso e erro nos formulários;
- informar que valores e dados são demonstrativos quando não há integração com servidor.

O objetivo foi reduzir a quantidade de dúvidas e fazer o usuário encontrar rapidamente o próximo passo.

## 11. Estudo da Interface do Usuário (UI)

A UI é a parte visual e interativa do site. A interface utiliza:

- cabeçalho branco com borda inferior;
- menu horizontal no computador e empilhado em telas menores;
- cards com imagens arredondadas;
- botões com alto contraste;
- seções com fundo claro e sombras suaves;
- títulos em fonte serifada para dar personalidade;
- textos em fonte sem serifa para facilitar a leitura;
- destaques visuais para preços, promoções e ações principais;
- estados de foco para melhorar a navegação pelo teclado.

## 12. Usabilidade

Usabilidade significa facilitar o uso do site. Foram aplicadas as seguintes práticas:

- todos os campos dos formulários possuem `label`;
- imagens possuem textos alternativos com `alt`;
- links e botões possuem textos objetivos;
- os campos obrigatórios usam `required`;
- os campos de e-mail, telefone, data e número usam tipos adequados;
- o usuário recebe mensagens depois de enviar um formulário;
- os cards de compra usam `details` e `summary`, permitindo abrir e fechar descrições sem uma biblioteca externa;
- a página funciona em diferentes tamanhos de tela;
- elementos clicáveis possuem mudança visual ao passar o mouse ou receber foco.

## 13. Escolha da paleta de cores

As cores foram escolhidas para transmitir confiança, organização e tecnologia, características importantes para um site de carros.

| Cor | Código | Uso |
|---|---|---|
| Azul escuro | `#0b1f4d` | Cabeçalho, títulos, botões e rodapé. |
| Azul principal | `#4174e3` | Links, destaques e interações. |
| Azul claro | `#e9f1ff` | Fundos de destaque e avisos. |
| Texto escuro | `#1e293b` | Textos principais. |
| Fundo claro | `#f3f7fc` | Fundo geral das páginas. |
| Branco | `#ffffff` | Cards, formulários e áreas de leitura. |

O azul escuro cria contraste e sensação de segurança. O azul claro deixa as áreas de informação mais leves. O branco ajuda a separar os cards e facilita a leitura.

## 14. Escolha da tipografia

Foram utilizadas duas famílias principais:

- **Arial, Helvetica, sans-serif:** usada nos textos, menus, formulários e informações dos cards. É uma fonte simples e fácil de ler.
- **Georgia, Times New Roman, serif:** usada nos títulos principais. Ela cria contraste visual e deixa os títulos mais marcantes.

O tamanho dos títulos usa `clamp()`, permitindo que eles se ajustem conforme a largura da tela.

## 15. Mapa do site (sitemap)

```text
Página inicial (index.html)
├── Comprar
│   └── Lista de carros e detalhes expansíveis
├── Vender
│   └── Formulário para cadastrar veículo e fotos
├── Promoções
│   └── Ofertas de carros em destaque
├── Alugar
│   └── Carros disponíveis e solicitação de reserva
├── Suporte
│   ├── Dúvidas frequentes
│   ├── Recuperação de senha
│   └── Formulário de contato
├── Revisão
│   └── Revisão de carros em garantia após 3 meses
├── Lojas
│   └── Lojas parceiras e carros disponíveis
├── Financiar
│   ├── Tipos de financiamento
│   └── Simulador de parcelas
└── Entrar
    ├── Login demonstrativo
    └── Logout
```

## 16. Telas desenvolvidas

### Home — `index.html`

Apresenta a marca, uma chamada principal, modelos em destaque, imagens dos carros e acesso para comprar.

### Comprar — `comprar.html`

Apresenta os veículos disponíveis. Ao clicar em um card, o usuário abre informações sobre preço, quilometragem, motor, câmbio, interior e uso recomendado.

### Vender — `vender.html`

Possui formulário para marca, modelo, ano, quilometragem, cor, câmbio, preço, descrição, dados de contato e imagens do veículo.

### Promoções — `promoções.html`

Mostra alguns veículos com preço anterior, desconto, preço promocional e link para a página de compra.

### Alugar — `alugar.html`

Apresenta Civic, Cobalt, Onix e Spin, com preço por diária, características e formulário de reserva.

### Suporte — `suporte.html`

Oferece categorias de ajuda, recuperação de senha, dúvidas frequentes, dados de contato e formulário de atendimento.

### Revisão — `revisão.html`

Explica a revisão de veículos vendidos pela empresa que ainda estão em garantia e completaram três meses da compra.

### Lojas — `lojas.html`

Apresenta lojas parceiras, endereços, horários e alguns carros disponíveis em cada loja.

### Financiar — `financiar.html`

Explica CDC, leasing e consórcio. Também possui um simulador que calcula uma parcela estimada conforme carro, entrada, tipo de financiamento e número de parcelas.

### Entrar — `entrar.html`

Possui login e logout demonstrativos. O estado do usuário é salvo temporariamente no `localStorage` do navegador.

## 17. Aplicações de JavaScript

### Carrossel da Home — `js/script.js`

O JavaScript encontra os carrosséis da página, controla os botões anterior e próximo e desativa as setas quando não existem mais imagens para visualizar.

### Login e logout — `entrar.html`

O formulário verifica o e-mail e a senha. Depois do login, um objeto simples é salvo no `localStorage`. Ao clicar em “Sair da conta”, esse registro é removido e a tela volta para o login.

### Recuperação de senha e contato — `suporte.html`

Os formulários exibem uma confirmação depois do envio. Como não existe servidor, eles não enviam e-mail de verdade.

### Solicitação de revisão — `revisão.html`

O JavaScript impede o recarregamento da página e mostra uma mensagem confirmando o pedido de agendamento.

### Cadastro de veículo — `vender.html`

O usuário pode escolher várias imagens usando `input type="file"` com o atributo `multiple`. O JavaScript cria miniaturas com `URL.createObjectURL()` para que o usuário veja as fotos antes do envio.

### Solicitação de aluguel — `alugar.html`

O formulário mostra uma mensagem de confirmação quando o usuário escolhe o carro e envia as datas de retirada e devolução.

### Simulador de financiamento — `financiar.html`

O JavaScript lê o carro, a entrada, o tipo de financiamento e o número de parcelas. Para CDC e leasing, utiliza uma fórmula de parcela com juros compostos. Para o consórcio demonstrativo, acrescenta uma taxa administrativa de 18% e divide o valor pelo número de parcelas.

### Detalhes dos carros — `comprar.html`

Os detalhes são abertos com HTML nativo usando `details` e `summary`. Essa solução precisa de pouco JavaScript e é simples de entender.

## 18. Melhorias futuras

Para transformar o protótipo em um sistema real, seria possível:

- criar um banco de dados de veículos e usuários;
- desenvolver uma API para os formulários;
- conectar o login a um sistema seguro de autenticação;
- enviar e-mails de recuperação de senha;
- permitir que lojas alterem preços e disponibilidade;
- integrar o financiamento a instituições financeiras;
- armazenar as imagens dos anúncios em um serviço de arquivos;
- criar uma área administrativa;
- validar os dados no servidor;
- adicionar testes automatizados.

## 19. Conclusão

O Carro Fácil foi desenvolvido como um protótipo de site automotivo completo. O projeto aplica HTML, CSS e JavaScript em páginas com objetivos diferentes, mantendo uma identidade visual comum. A documentação apresenta as decisões de conteúdo, design, usabilidade e programação utilizadas durante o desenvolvimento.
