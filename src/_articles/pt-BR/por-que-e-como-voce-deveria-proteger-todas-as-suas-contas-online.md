---
title: 'Por que (e como) você deveria proteger todas as suas contas online'
published: '2021-02-11'
lastModified: '2021-02-11'
author: 'Pietro Bondioli'
excerpt: '80% das violações de dados registradas em 2020 foram causadas por senhas que eram fracas ou que foram roubadas. Saiba como se proteger usando os apps Bitwarden e Authy.'
image: '/articles/passwords-and-digital-security.png'
imageAlt: 'Um computador, um cadeado e uma chave simbolizando o conceito de segurança digital.'
twitterProfile: '@bondioli_pietro'
---

# **Por que (e como) você deveria proteger todas as suas contas online**

##### Fev 11, 2021 · 10 min leitura - por Pietro Bondioli

Segundo o relatório “D.B.I.R.”, publicado em 2020 pela empresa de tecnologia Verizon, 80% de todas as violações de dados registradas em 2020 foram causadas por senhas que eram fracas ou que foram roubadas de alguma maneira. Estatisticamente falando você provavelmente faz parte do grupo de pessoas que estão mais vulneráveis a um ataque hacker, e bastaria apenas um pouco de esforço (e poder computacional) para que todas as suas contas caíssem nas mãos de pessoas e/ou grupos maliciosos.

Estima-se que nos anos de 2018 e 2019 foram produzidos 90% de todos os dados já gerados pela humanidade em toda a sua história, as pessoas nunca haviam compartilhado tantos dados/informações e nunca tiveram sua privacidade tão fragilizada. Essa fragilização é causada por diversos fatores, mas o que nos importa neste momento é o fator “falta de informação por parte dos usuários”, este artigo busca sanar essa falta de informação explicando as bases da segurança da informação de maneira simples, e também apresentar ferramentas que podem ser usadas para melhorar a segurança dos usuários.

## **As pessoas se preocupam com privacidade? Quanto?**

O relatório “Data Never Sleeps 6.0”, realizado em 2017 pela empresa de tecnologia Domo, estimou que em 2020 a cada segundo seriam gerados 1.7 megabytes de dados por pessoa, entre estes dados estão fotos/vídeos feitos, mensagens trocadas, informações sobre sua atividade na internet e muitos outros dados aos quais você provavelmente não quer que outras pessoas tenham acesso, mas quanto esforço você faz para que esses dados fiquem de fato seguros?

Segundo o relatório “Consumer Account Security”, publicado pela empresa de tecnologia Telesign, 80% das pessoas temem por sua segurança online e 45% são muito ou extremamente preocupadas com a possibilidade de terem suas contas e/ou dados roubados, porém o mesmo relatório mostra que 73% das pessoas usam a mesma senha em mais de uma conta e 61% não possuem a “verificação de duas etapas” ativada em nenhuma de suas contas. As pessoas estão preocupadas com sua segurança e privacidade online, mas por algum motivo não o suficiente para agirem em prol de tornar suas contas mais seguras.

Um dos motivos apontados como causa desse desinteresse para com a segurança dos próprios dados é a falta de conhecimento por parte das pessoas sobre como se protegerem – a pesquisa da Telesign apontou que 72% das pessoas gostariam de receber orientação sobre como proteger suas contas online. O que falta para as pessoas é acesso a informação simplificada sobre o assunto.

## **Porquê você deveria se preocupar mais?**

Existe de uma falta de informação por parte dos usuários comuns sobre o quanto eles estão vulneráveis, o relatório da Telesign apontou que, mesmo usando senhas repetidas em diversas contas, 30% das pessoas têm extrema confiança de que suas senhas irão proteger suas contas, porém, como será demonstrado adiante, essas pessoas não estão de fato seguras.

O maior problema de segurança surge quando, além de as pessoas usarem senhas fracas, elas ainda repetem a mesma senha (ou variações desta) em diversas contas pela internet. Segundo o relatório da Telesign, cada usuário possui em média 24 contas online, mas usam apenas 6 senhas diferentes para proteger todas elas (cada senha se repete, em média, 4 vezes), isso pode gerar um fenômeno problemático chamado “Efeito Dominó da Reutilização de Senhas” – esse fenômeno é chamado assim pois, uma vez que uma pessoa e/ou grupo malicioso tem acesso a uma de suas senhas, é apenas questão de tempo até que todas as suas contas sejam comprometidas. Exemplificando:

Digamos que Maria tem 24 contas online, entre elas estão:

- 1 conta no Google que tem como senha: c0x1nh4maria
- 1 conta no Twitter que tem como senha: 123c0x1nh4
- 1 conta na Amazon que tem como senha: senha123456
- 1 conta no Habbo Hotel que tem como senha: coxinha

Agora imagine que a base de dados do Habbo Hotel tenha sido comprometida (ou que Maria caiu em um golpe online) e agora sabem que o e-mail e senha de sua conta no Habbo são, respectivamente, maria@gmail.com e “coxinha”, essas duas informações seriam o suficiente para que em poucas horas, talvez em minutos, conseguissem acesso a todas suas outras contas, já que Maria usa senhas repetitivas e não tem ativado nenhum tipo de “autenticação de dois fatores”.

Em suma, esse “Efeito Dominó” se faz possível pois uma vez que os crackers obtém o e-mail e a senha de uma conta, se torna estatisticamente viável tentar um ataque de força bruta (i. e. técnica hacker que consiste em gerar um número muito grande de senhas aleatórias com base nos parâmetros passados, e tentar fazer login com cada uma dessas senhas até obter êxito) nas outras contas que tenham sido registradas com esse mesmo e-mail.

## **Como se proteger**

As medidas mais eficientes que você pode tomar estão relacionadas a proteger cada conta individualmente com uma boa senha e separar a proteção dessas contas em camadas, dificultando assim o roubo de contas e o “Efeito Dominó”. As medidas serão apresentadas em tópicos:

### **Sobre o nível de segurança das senhas**

A segurança de uma senha vem de sua dificuldade em ser descoberta por meio de programas, para aumentar o nível de dificuldade da sua senha você deve se preocupar com três fatores: a quantidade de caracteres, os tipos de caracteres usados e a sua aleatoriedade/singularidade.

#### **Quantidade e Tipos de caracteres utilizados**

Os dois primeiros fatores são importantes pois irão determinar a quantidade de combinações possíveis para a senha, quanto maior o número de combinações possíveis maior será a dificuldade da senha. Para entender bem o motivo disso acontecer precisamos ter uma noção básica sobre o Principio Fundamental da Contagem, que basicamente diz que: “o número total de possibilidades de um evento ocorrer é dado pela multiplicação de todas as possibilidades de cada etapa que constitui o evento”. Exemplificando:

Digamos que temos que criar uma senha com 2 caracteres de tamanho: no primeiro caractere podemos usar somente as letras “A” ou “B”, e no segundo podemos usar somente as letras “C”, “D” ou “E”. Se você tentasse descobrir todas as combinações possíveis para essa senha, você descobriria que existem seis:

<table>
    <thead>
        <tr>
            <th>Caractere de Posição 1</th>
            <th>Caractere de Posição 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>A</td>
            <td>C</td>
        </tr>
        <tr>
            <td>A</td>
            <td>D</td>
        </tr>
        <tr>
            <td>A</td>
            <td>E</td>
        </tr>
        <tr>
            <td>B</td>
            <td>C</td>
        </tr>
        <tr>
            <td>B</td>
            <td>D</td>
        </tr>
        <tr>
            <td>B</td>
            <td>E</td>
        </tr>
    </tbody>
</table>

Neste exemplo temos que na posição 1 existem duas possibilidades, e na posição 2 existem três, aplicando o principio, temos:

<table>
    <thead>
        <tr>
            <th>Possibilidades Posição 1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2 (“A” ou “B”)</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th>Possibilidades Posição 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>3 (“C”, “D” ou “E”)</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th colSpan="2">Combinações possíveis:</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colSpan="2">2 * 3 <strong>= 6</strong></td>
        </tr>
    </tbody>
</table>

Quanto mais aumentarmos o número de posições possíveis (tamanho da senha) e a quantidade de possibilidades de cada posição (número de possíveis caracteres), maior será a quantidade de combinações possíveis.

Usando esse conceito matemático, podemos calcular, por exemplo, quantas combinações possíveis uma senha de 16 caracteres de tamanho teria:

Devemos levar em conta que, normalmente, quando vamos criar uma senha, 94 caracteres são disponibilizados:

- Números (10 diferentes: 0-9)
- Letras (52 diferentes: A-Z e a-z)
- Símbolos (32 diferentes)

Então, são 16 posições possíveis (tamanho) e 94 possibilidades para cada. Agora multiplicando o número de possibilidades de cada posição temos:

**94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94**

Isso totaliza algo em torno de 37 Nonilhões (número 37 seguido de 30 zeros), que é um número de possibilidades grande o suficiente para deixar um computador ocupado por séculos.

Para que uma senha passe a ser considerada um “desafio” para um computador, ela deve ter, pelo menos, 12 caracteres de tamanho, porém o ideal é usar senhas de 16 caracteres ou mais. Abaixo você pode observar quanto tempo um computador comum levaria para descobrir uma senha de acordo com sua quantidade de caracteres:

<table>
    <thead>
        <tr>
            <th>Número de caracteres da senha</th>
            <th>Tempo para ser descoberta</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>6</td>
            <td>3 horas</td>
        </tr>
        <tr>
            <td>11</td>
            <td>33 anos</td>
        </tr>
        <tr>
            <td>12</td>
            <td>4 séculos</td>
        </tr>
        <tr>
            <td>16</td>
            <td>mais de 10.000 séculos</td>
        </tr>
    </tbody>
</table>

#### **Aleatoriedade e Singularidade da senha**

Os fatores “aleatoriedade” e “singularidade” são importantes na medida em que dificultam o uso de certas técnicas num ataque de força bruta. Isso acontece pois esses ataques geralmente são feitos de maneira inteligente, as primeiras senhas testadas serão combinações entre palavras do dicionário, nomes próprios, informações sobre o usuário, senhas mais comuns e senhas vazadas em ataques hackers – se a senha é aleatória e única a probabilidade dela ser descoberta usando este tipo de técnica é mínima.

Os dois fatores são complementares, uma vez que a senha tenha sido gerada de maneira aleatória, muito provavelmente ela irá preencher o requisito de ser singular, isso ocorre pois é muito improvável que, dentre a imensa quantidade de combinações de senhas possíveis, alguém tenha gerado aleatoriamente uma senha igual a sua. Por isso é recomendado que se use geradores automáticos para criar suas senhas – falarei sobre como usá-los no tópico “Ferramentas”.

### **Sobre separar a proteção de suas contas em camadas**

A separação das contas em “camadas” consiste basicamente em dois pontos: usar contas de e-mail diferentes para cada tipo de serviço utilizado na internet, e fazer uso da “autenticação de dois fatores” em todas as suas contas. Explicando a importância de cada ponto:

#### **Usar contas de e-mail diferentes**

A maneira mais simples de separarmos nossas contas em camadas é usando contas de e-mail diferentes para cada propósito diferente. Por exemplo:

Digamos que João use a internet com quatro propósitos claramente distintos:

- Usar redes sociais
- Realizar comprar online
- Armazenar fotos e mídias
- Trocar e-mails relacionados ao trabalho

O recomendado é que João crie uma conta de e-mail para cada um desses propósitos, pois assim, caso o e-mail que ele usa para trabalhar, por exemplo, seja invadido, os hackers não encontrarão um “pote de ouro” com todas as informações sobre João num local só – suas fotos, informações sobre compras e informações sobre suas interações sociais estarão protegidas. Obviamente para que esse método seja eficaz, é necessário que cada um desses e-mails estejam protegidos por boas senhas (aleatórias e únicas) e com a verificação de dois fatores ativada.

#### **Autenticação de Dois Fatores**

Fazer uso da “autenticação de dois fatores” (também chamada de “autenticação de duas etapas” ou 2FA) é extremamente eficiente para proteger suas contas, a 2FA consiste basicamente em adicionar uma etapa a mais no processo de login. Como funciona:

Imagine que você está tentando acessar sua conta do Facebook, normalmente bastaria preencher os campos de e-mail e senha e clicar no botão de login (botão “entrar” do Facebook), mas com a autenticação de duas etapas ativa, antes de entrar em sua conta, o Facebook iria te pedir um código de autenticação que eles te enviaram via sms, e-mail, ou por outro meio.

Essa funcionalidade é boa para sua segurança pois, mesmo que alguma pessoa e/ou grupo tenha conhecimento de suas senhas, ninguém será capaz de acessar suas contas, uma vez que, antes de qualquer tentativa de login, seria solicitado um código que é gerado aleatoriamente e muda a cada tentativa (ou a cada X segundos). Para administrar todas as suas contas que tem a 2FA ativa existem diversos aplicativos gratuitos e seguros, que mantém seus códigos de autenticação seguros e de fácil acesso para você caso você tenha um smartphone, mostrarei no próximo tópico como utilizar esses aplicativos.

## **Ferramentas que podem te ajudar a se proteger**

Em suma, vimos que para proteger de verdade nossas contas online precisamos:

- Usar senhas fortes e únicas para cada conta (geradas de maneira aleatória)
- Separar a proteção de nossas contas em camadas (principalmente usando 2FA)

Mas ao tentar cumprir esses requisitos podemos nos deparar com problemas. Por exemplo, quando criamos senhas fortes e únicas para cada conta, como fazer para memorizar todas elas? Ou também, quando ativamos a verificação de etapas, como saber onde seu código de verificação vai chegar? E se eu mudar o número do meu celular? como vou receber o código de autenticação via SMS se não tenho mais acesso ao antigo numero? Para nos ajudar com esses problemas existem aplicativos/serviços gratuitos e seguros que podemos usar:

- Para o gerenciamento de contas/senhas podemos usar o BitWarden, um aplicativo que, além de ser gratuito para todas as plataformas (PC e Mobile), também é totalmente transparente com a comunidade
- Para gerenciamento e integração de todas as contas com a autenticação de dois fatores podemos usar o Authy, um aplicativo gratuito para todas as plataformas, e muito intuitivo para quem vai usá-lo pela primeira vez

### **BitWarden**

O BitWarden, além de armazenar todas as suas credenciais de maneira segura, também irá te ajudar a:

- Gerar senhas aleatórias e únicas
- Autopreencher formulários de login

E o principal da ferramenta é que você poderá criar contas usando senhas aleatórias e únicas sem ter o problema de ter que lembrar de cada uma, já que uma vez logado no aplicativo do BitWarden você pode usar o recurso de autopreenchimento ou poderá copiar a senha de cada conta registrada, então, resumindo, a única senha que você precisará lembrar é a Senha Mestra do BitWarden.

#### **Tutorial BitWarden**

Caso você esteja usando celular ou outro dispositivo móvel (celulares, tablets, etc) você pode seguir os mesmos passos baixando o app BitWarden na loja de aplicativos do Google ou IOS (Apple).

1. Primeiramente você deve criar uma conta no BitWarden:
   1. Acesse o site <a href="https://www.bitwarden.com/" target="_blank" rel="noopener">https://www.bitwarden.com/</a> e clique em Start a Free Trial ou em Log In.
   2. Caso tenha clicado em Log In agora você deve clicar em Criar Conta.
   3. Na tela de criação de contas preencha os dados pedidos:
      1. Coloque seu e-mail principal e seu nome.
      2. Use o site <a href="https://www.lastpass.com/password-generatoren.com/" target="_blank" rel="noopener">https://www.lastpass.com/password-generatoren.com/</a> para gerar aleatoriamente sua Senha Mestra:
         - Quando for gerar sua senha use pelo menos 16 caracteres de tamanho, é importante que essa senha seja forte pois ela estará protegendo todas as suas outras senhas. O site te dá a opção de criar uma senha “fácil de pronunciar”, “fácil de ler” ou uma com “todos os caracteres”, escolha a que te agradar mais.
         - Recomendo que anote seu e-mail e sua senha mestra num papel e deixe esse papel guardado em algum local seguro de sua casa (já que é possível que você esqueça essa senha).
      3. Na dica de senha você pode colocar qualquer coisa aleatória ou simplesmente um lembrete de onde está o seu papel com a senha anotada.
   4. Após criar sua conta você será redirecionado para o seu cofre BitWarden, lá você verá uma notificação pedindo para que você confirme seu e-mail:
      1. Clique no botão “enviar e-mail” presente na notificação.
      2. Verifique a caixa de entrada da sua conta de e-mail, lá você vai achar um e-mail do BitWarden com um link de confirmação, clique neste link para confirmar a sua conta.
   5. Pronto! Seu cofre foi criado!
2. Baixe o aplicativo/programa/extensão do BitWarden nas plataformas onde você for usar a ferramenta. No site <a href="https://www.bitwarden.com/download/" target="_blank" rel="noopener">https://www.bitwarden.com/download/</a> podem ser encontrados os links de download para as mais diversas plataformas/sistemas.
3. Independentemente da plataforma onde você estiver usando o BitWarden, três abas ficarão disponíveis por padrão nos aplicativos:
   1. Meu Cofre: nesta aba você verá todas as credenciais/senhas/contas que você possui armazenados em seu cofre.
   2. Gerador/Ferramentas: nesta aba fica uma ferramenta de geração de senhas aleatórias e únicas, sempre que você for criar uma nova conta em qualquer site use essa ferramenta para gerar sua senha.
   3. Configurações: aba com diversas opções de configuração para sua extensão, seu cofre e sua conta BitWarden.
4. Em todas as plataformas você vai ter as mesmas funcionalidades base disponíveis:
   1. Você pode adicionar novas credenciais manualmente ao seu cofre clicando no botão “+”, ao clicar no botão um formulário com alguns campos irá aparecer:
      1. O campo “tipo” é o tipo de credencial que você deseja salvar, no caso estamos registrando contas online então deixe marcado “credencial”.
      2. O campo “nome” se refere ao nome que você quer dar àquela credencial, coloque o que você achar melhor, no meu caso eu escrevo algo do tipo “Conta E-mail Principal” ou “Conta E-mail Secundária”.
      3. Os campos “nome de usuário” e “senha” são as credenciais que você quer salvar.
      4. O campo “URI” ou “URL” se refere aos sites de onde são essas credenciais, por exemplo se você estiver registrando uma credencial do Gmail você deve preencher esse campo com “gmail.com”.
      5. Os outros campos são irrelevantes neste momento, você pode apenas deixar eles como eles estão por padrão.
   2. Você pode acessar todas as credenciais armazenadas em seu cofre e copiar o “nome de usuário” ou “senha” de qualquer credencial a qualquer momento.
   3. Uma ferramenta de geração automática de senhas pode ser usado para gerar senhas aleatórias e únicas de acordo com as opções escolhidas, você pode escolher o tamanho da senha, tipos de caracteres usados, entre outras opções..
5. Caso você queira usar o BitWarden em um navegador de internet:
   1. No <a href="https://www.bitwarden.com/download/" target="_blank" rel="noopener">link passado no tópico 2</a> você encontrará links para instalar a extensão em oito Navegadores diferentes (Google Chrome, Firefox, Opera, Microsoft Edgar, Safari, Vivaldi, Brave e Tor Browser), clique no link que corresponde ao seu navegador e instale a extensão.
   2. Com a extensão instalada, clique no ícone (um escudo branco e azul) que surgirá na barra de ferramentas do navegador, e faça login com sua conta BitWarden.
   3. Após ter feito o login veremos que agora existem 4 abas dentro da janela da extensão:
      1. As três abas padrão.
      2. Uma aba chamada “Aba” onde serão mostradas todas as credenciais salvas para o site em que você estiver no momento.
   4. Fazendo uso da extensão as seguintes funcionalidades adicionais estarão disponíveis:
      1. Toda vez que você for fazer login ou criar uma nova conta a extensão irá pedir para salvar suas credenciais, você apenas precisa clicar em “sim”.
      2. Caso você já tenha salvo as credenciais de login de algum site, sempre que você for fazer login novamente naquele site basta clicar no ícone da extensão (escudo azul e branco), ir para a seção “Aba”, e clicar na credencial salva para que o formulário de login seja preenchido automaticamente.
6. Caso você queira usar o BitWarden em um dispositivo móvel:
   1. No <a href="https://www.bitwarden.com/download/" target="_blank" rel="noopener">link passado no tópico 2</a> você encontrará links para instalar o aplicativo tanto em sistemas Android quanto em IOS (Apple), ou você também pode simplesmente pesquisar por “BitWarden” na “AppStore” ou “PlayStore” e instalá-lo.
   2. Com o app já instalado, abra o aplicativo e faça login com seu e-mail e sua senha mestra.
   3. No caso de dispositivos móveis você também tem a funcionalidade de autopreenchimento, mas ela deve ser ativada:
      1. Abra o app e vá para a aba “Configurações”.
      2. Ative o “Serviço de Autopreenchimento” e o “Serviço de Acessibilidade de Autopreenchimento”.
   4. Caso seu dispositivo possua leitor biométrico (leitor de digital do dedo) você pode usar isso para desbloquear seu cofre BitWarden, excluindo a necessidade de escrever sua senha mestra toda vez:
      1. Abra o app e vá para a aba “Configurações”.
      2. Procure pela opção “Desbloquear com Biometria” e clique para ativá-la. 7. O aplicativo “BitWarden” para PC/Notebook não apresenta nenhuma funcionalidade extra que valha a pena ser apresentada.

### **Authy**

O Authy é um aplicativo autenticador, ou seja, ele irá funcionar como um fator externo para você se autenticar (fazer login) em qualquer conta em que a autenticação de dois fatores (2FA) estiver ativa e configurada. Um diferencial deste aplicativo em relação a outros aplicativos autenticadores, como o “Google Authenticator”, é a possibilidade de conectar sua conta Authy em diversos dispositivos, além da possibilidade de fazer backup de sua conta Authy – o que é muito útil caso você seja roubado, perca seu dispositivo, etc.

#### **Tutorial Authy**

Apesar de existir um aplicativo para PC/Notebook este tutorial só vai abordar o uso do aplicativo em dispositivos móveis.

1. Baixe o aplicativo Authy em seu dispositivo móvel Android ou IOS:
   1. No site <a href="https://www.authy.com/download/" target="_blank" rel="noopener">https://www.authy.com/download/</a> podem ser encontrados links para download do aplicativo para diversas plataformas/sistemas. Você também pode encontrar o aplicativo na “AppStore” ou na “PlayStore” simplesmente pesquisando por “Authy” – o nome completo do app nessas lojas é “Twilio Authy” ou “Twilio Authy 2-Factor Authentication”.
2. Abra o aplicativo e faça seu registro usando seu número de celular e seu e-mail:
   1. O aplicativo vai pedir que você confirme um código recebido por meio de SMS ou Ligação em seu celular, recomendo escolher a opção SMS.
   2. O e-mail e celular usados para registrar podem ser alterados posteriormente caso seja necessário.
3. Crie uma senha de backup para sua conta, isso protege sua conta Authy e possibilita que você faça um backup de sua conta:
   1. No aplicativo clique nos 3 pontinhos e abra o menu de “Configurações”.
   2. Vá para a aba “Contas” e procure por “Backups”.
   3. Ative a funcionalidade de “Backups” e coloque uma boa senha de backup:
      1. Use o gerador de senhas do BitWarden para gerar uma senha aleatória e única. - Recomendo que anote a senha de backup do Authy em um papel e guarde num local seguro, assim como você fez com a senha mestre do BitWarden – é essencial que você nunca perca nenhuma das duas.
4. Ativando a autenticação de dois fatores em alguma conta usando o aplicativo:
   1. Vá para o site da conta em que você pretende ativar a 2FA (por exemplo: Twitter, Facebook, etc).
   2. Vá nas configurações e procure nas seções de “segurança da conta” pela opção de ativar a verificação em duas etapas.
   3. Ative a 2FA e escolha usar um “Aplicativo autenticador” como método.
   4. O site irá lhe prover um QR code ou um código de caracteres.
   5. Entre no app do Authy, abra o menu de opções e clique em Adicionar Conta.
   6. O app vai te dar duas opções:
      1. Escanear código QR.
      2. Introduzir o código manualmente.
   7. Se você tiver o código QR em alguma tela basta escanear, ou caso você tenha somente o código de caracteres em mãos basta digitar e clicar em Salvar.
   8. Agora você possui aquela conta registrada no Authy, sempre que você for fazer login naquele site e lhe for pedido um código de autenticação basta você abrir o aplicativo e ver o código relacionado àquela conta:
      1. Lembrando que o código é atualizado a cada 30 segundos por motivos de segurança, então nem adianta tentar memorizar esse código de autenticação para usar depois.

Após ler esses dois tutoriais, você agora tem uma noção de como utilizar esses dois aplicativos para aumentar a segurança de todas as suas contas e ao mesmo tempo diminuir o número de senhas que você precisa lembrar. Para complementar tudo isso somente irei pontuar algumas coisas:

- Após criar a conta no Authy, use o app para ativar a verificação de duas etapas em sua conta BitWarden, dessa maneira sua proteção estará completa.
- Depois de ter criado as contas BitWarden e Authy tire um tempo para melhorar suas senhas e ative a 2FA em todas as contas que você já possui, isso vai te tomar 1-2 horas porém pode evitar muitos problemas no futuro.
- Anote a Senha Mestra do BitWarden e a Senha de Backup do Authy (junto com os e-mails e n° de telefone usados para criar as contas) em pelo menos mais de um papel, e guarde eles em locais diferentes, isso vai te evitar muita dor de cabeça.
- A senha mestra de sua conta BitWarden não deve ser compartilhada com ninguém, esse é um dos motivos mais recorrentes em vazamentos de dado.
- Não é recomendado que você faça login em sua conta BitWarden em um dispositivo desconhecido, como computadores de universidade, bibliotecas, etc.

## **Conclusão**

As pessoas estão cada vez mais vulneráveis na internet, o uso de senhas fracas e o não uso de ferramentas de segurança – como por exemplo a autenticação de dois fatores – são duas das causas principais dessa falta de segurança. No artigo foram apresentados brevemente os elos mais fracos dentro da segurança da informação e o que você pode fazer para fortalecer esses elos de maneira fácil. Se você seguiu todos os passos até aqui você provavelmente está mais bem protegido e tem uma noção melhor sobre segurança digital do que a maior parte dos usuários. Aos interessados em aprender mais sobre segurança online deixarei sugestões de artigos que se aprofundam em alguns dos tópicos abordados neste artigo.

## **Referências**

1. Verizon Communications. D.B.I.R. - Data Breach Investigations Report. 2020. Disponível em: <<a href="https://www.enterprise.verizon.com/resources/reports/dbir/2020/" target="_blank"  rel="noopener">https://www.enterprise.verizon.com/resources/reports/dbir/2020/</a>>. Acesso em: 24 janeiro 2021.
2. IBM. Big Data Challenge Opportunity. 2020. Disponível em: <<a href="https://www.ibm.com/watson/infographic/discovery/big-data-challenge-opportunity/" target="_blank"  rel="noopener">https://www.ibm.com/watson/infographic/discovery/big-data-challenge-opportunity/</a>>. Acesso em: 24 janeiro 2021.
3. TeleSign. Consumer Account Security Report. 2015. Disponível em: <<a href="https://www.ts.telesign.com/hubfs/Downloadable%20Assets/Whitepapers-Eguides-Reports/Report%20-%20TeleSign%20Consumer%20Account%20Security%20Report%20-%20EN.pdf" target="_blank"  rel="noopener">https://www.ts.telesign.com/hubfs/Downloadable%20Assets/Whitepapers-Eguides-Reports/Report%20-%20TeleSign%20Consumer%20Account%20Security%20Report%20-%20EN.pdf</a>>. Acesso em: 26 janeiro 2021.
4. Domo Inc. Data Never Sleeps 6.0. 2017. Disponível em: <<a href="https://www.domo.com/assets/downloads/18**domo**data-never-sleeps-6+verticals.pdf" target="_blank"  rel="noopener">https://www.domo.com/assets/downloads/18\*\*domo\*\*data-never-sleeps-6+verticals.pdf</a>>. Acesso em: 26 janeiro 2021.

---

> _"A vida é muito curta e ansiosa para aqueles que esquecem o passado, negligenciam o presente e temem o futuro." — Sêneca_

---
