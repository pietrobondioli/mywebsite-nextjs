// React/Next Components
import React from 'react';
import Head from 'next/head';

// Styles
import styles from '../../styles/pages/Article/Article.module.scss';

import articleImage from '../../public/articles/passwords-and-digital-security/how-secure-is-my-password.png';

const Article = () => {
  return (
    <>
      <Head>
        <title>Porquê (e como) você deveria proteger todas as suas contas online</title>
        <meta
          name="description"
          content="80% das violações de dados registradas em 2020 foram causadas por senhas que eram fracas ou que foram roubadas. Saiba como se proteger usando os apps Bitwarden e Authy."
        />
      </Head>
      <div className={styles.article}>
        <img className={styles.headerImage} src={articleImage} alt="" />
        <div className={styles.title}>
          Porquê (e como) você deveria proteger todas as suas contas online
        </div>
        <div className={styles.date}>Fev 11, 2021 &middot; 15 min leitura</div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Segundo o relatório “D.B.I.R.”, publicado em 2020 pela empresa de tecnologia Verizon, 80%
          de todas as violações de dados registradas em 2020 foram causadas por senhas que eram
          fracas ou que foram roubadas de alguma maneira. Estatisticamente falando você
          provavelmente faz parte do grupo de pessoas que estão mais vulneráveis a um ataque hacker,
          e bastaria apenas um pouco de esforço (e poder computacional) para que todas as suas
          contas caíssem nas mãos de pessoas e/ou grupos maliciosos.
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Estima-se que nos anos de 2018 e 2019 foram produzidos 90% de todos os dados já gerados
          pela humanidade em toda a sua história, as pessoas nunca haviam compartilhado tantos
          dados/informações e nunca tiveram sua privacidade tão fragilizada. Essa fragilização é
          causada por diversos fatores, mas o que nos importa neste momento é o fator “falta de
          informação por parte dos usuários”, este artigo busca sanar essa falta de informação
          explicando as bases da segurança da informação de maneira simples, e também apresentar
          ferramentas que podem ser usadas para melhorar a segurança dos usuários.
        </div>
        <div className={`${styles.topicTitle} ${styles.primary_topicTitle}`}>
          As pessoas se preocupam com privacidade? Quanto?
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          O relatório “Data Never Sleeps 6.0”, realizado em 2017 pela empresa de tecnologia Domo,
          estimou que em 2020 a cada segundo seriam gerados 1.7 megabytes de dados por pessoa, entre
          estes dados estão fotos/vídeos feitos, mensagens trocadas, informações sobre sua atividade
          na internet e muitos outros dados aos quais você provavelmente não quer que outras pessoas
          tenham acesso, mas quanto esforço você faz para que esses dados fiquem de fato seguros?
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Segundo o relatório “Consumer Account Security”, publicado pela empresa de tecnologia
          Telesign, 80% das pessoas temem por sua segurança online e 45% são muito ou extremamente
          preocupadas com a possibilidade de terem suas contas e/ou dados roubados, porém o mesmo
          relatório mostra que 73% das pessoas usam a mesma senha em mais de uma conta e 61% não
          possuem a “verificação de duas etapas” ativada em nenhuma de suas contas. As pessoas estão
          preocupadas com sua segurança e privacidade online, mas por algum motivo não o suficiente
          para agirem em prol de tornar suas contas mais seguras. Um dos motivos apontados como
          causa desse desinteresse para com a segurança dos próprios dados é a falta de conhecimento
          por parte das pessoas sobre como se protegerem – a pesquisa da Telesign apontou que 72%
          das pessoas gostariam de receber orientação sobre como proteger suas contas online. O que
          falta para as pessoas é acesso a informação simplificada sobre o assunto.
        </div>
        <div className={`${styles.topicTitle} ${styles.primary_topicTitle}`}>
          Porquê você deveria se preocupar mais?
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Existe de uma falta de informação por parte dos usuários comuns sobre o quanto eles estão
          vulneráveis, o relatório da Telesign apontou que, mesmo usando senhas repetidas em
          diversas contas, 30% das pessoas têm extrema confiança de que suas senhas irão proteger
          suas contas, porém, como será demonstrado adiante, essas pessoas não estão de fato
          seguras. O maior problema de segurança surge quando, além de as pessoas usarem senhas
          fracas, elas ainda repetem a mesma senha (ou variações desta) em diversas contas pela
          internet. Segundo o relatório da Telesign, cada usuário possui em média 24 contas online,
          mas usam apenas 6 senhas diferentes para proteger todas elas (cada senha se repete, em
          média, 4 vezes), isso pode gerar um fenômeno problemático chamado “Efeito Dominó da
          Reutilização de Senhas” – esse fenômeno é chamado assim pois, uma vez que uma pessoa e/ou
          grupo malicioso tem acesso a uma de suas senhas, é apenas questão de tempo até que todas
          as suas contas sejam comprometidas. Exemplificando:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Digamos que Maria tem 24 contas online, entre elas estão:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          <ul className={styles.list}>
            <li className={styles.list_item}>1 conta no Google que tem como senha: c0x1nh4maria</li>
            <li className={styles.list_item}>1 conta no Twitter que tem como senha: 123c0x1nh4</li>
            <li className={styles.list_item}>1 conta na Amazon que tem como senha: senha123456</li>
            <li className={styles.list_item}>1 conta no Habbo Hotel que tem como senha: coxinha</li>
          </ul>
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Agora imagine que a base de dados do Habbo Hotel tenha sido comprometida (ou que Maria
          caiu em um golpe online) e agora sabem que o e-mail e senha de sua conta no Habbo são,
          respectivamente, maria@gmail.com e “coxinha”, essas duas informações seriam o suficiente
          para que em poucas horas, talvez em minutos, conseguissem acesso a todas suas outras
          contas, já que Maria usa senhas repetitivas e não tem ativado nenhum tipo de “autenticação
          de dois fatores”.
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Em suma, esse “Efeito Dominó” se faz possível pois uma vez que os crackers obtém o e-mail
          e a senha de uma conta, se torna estatisticamente viável tentar um ataque de força bruta
          (i. e. técnica hacker que consiste em gerar um número muito grande de senhas aleatórias
          com base nos parâmetros passados, e tentar fazer login com cada uma dessas senhas até
          obter êxito) nas outras contas que tenham sido registradas com esse mesmo e-mail.
        </div>
        <div className={`${styles.topicTitle} ${styles.primary_topicTitle}`}>Como se proteger</div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          As medidas mais eficientes que você pode tomar estão relacionadas a proteger cada conta
          individualmente com uma boa senha e separar a proteção dessas contas em camadas,
          dificultando assim o roubo de contas e o “Efeito Dominó”. As medidas serão apresentadas em
          tópicos:
        </div>
        <div className={`${styles.topicTitle} ${styles.secondary_topicTitle}`}>
          Sobre o nível de segurança das senhas
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          A segurança de uma senha vem de sua dificuldade em ser descoberta por meio de programas,
          para aumentar o nível de dificuldade da sua senha você deve se preocupar com três fatores:
          a quantidade de caracteres, os tipos de caracteres usados e a sua
          aleatoriedade/singularidade.
        </div>
        <div className={`${styles.topicTitle} ${styles.tertiary_topicTitle}`}>
          Quantidade e Tipos de caracteres utilizados
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Os dois primeiros fatores são importantes pois irão determinar a quantidade de combinações
          possíveis para a senha, quanto maior o número de combinações possíveis maior será a
          dificuldade da senha. Para entender bem o motivo disso acontecer precisamos ter uma noção
          básica sobre o Principio Fundamental da Contagem, que basicamente diz que: “o número total
          de possibilidades de um evento ocorrer é dado pela multiplicação de todas as
          possibilidades de cada etapa que constitui o evento”. Exemplificando:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Digamos que temos que criar uma senha com 2 caracteres de tamanho: no primeiro caractere
          podemos usar somente as letras “A” ou “B”, e no segundo podemos usar somente as letras
          “C”, “D” ou “E”. Se você tentasse descobrir todas as combinações possíveis para essa
          senha, você descobriria que existem seis:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph} ${styles.centered_paragraph}`}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.table_cell} ${styles.table_head}`}>
                  Caractere de Posição 1
                </th>
                <th className={`${styles.table_cell} ${styles.table_head}`}>
                  Caractere de Posição 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.table_cell}>A</td>
                <td className={styles.table_cell}>C</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>A</td>
                <td className={styles.table_cell}>D</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>A</td>
                <td className={styles.table_cell}>E</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>B</td>
                <td className={styles.table_cell}>C</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>B</td>
                <td className={styles.table_cell}>D</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>B</td>
                <td className={styles.table_cell}>E</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Neste exemplo temos que na posição 1 existem duas possibilidades, e na posição 2 existem
          três, aplicando o principio, temos:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph} ${styles.centered_paragraph}`}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.table_cell} ${styles.table_head}`}>
                  Possibilidades Posição 1
                </th>
                <th className={`${styles.table_cell} ${styles.table_head}`}>
                  Possibilidades Posição 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.table_cell}>2 (“A” ou “B”)</td>
                <td className={styles.table_cell}>3 (“C”, “D” ou “E”)</td>
              </tr>
              <tr>
                <th colSpan="2" className={`${styles.table_cell} ${styles.table_head}`}>
                  Combinações possíveis
                </th>
              </tr>
              <tr>
                <td colSpan="2" className={styles.table_cell}>
                  2 * 3 = <b>6</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Quanto mais aumentarmos o número de posições possíveis (tamanho da senha) e a quantidade
          de possibilidades de cada posição (tipos de caracteres), maior será a quantidade de
          combinações possíveis.
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Usando esse conceito matemático, podemos calcular, por exemplo, quantas combinações
          possíveis uma senha de 16 caracteres de tamanho teria:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Devemos levar em conta que, normalmente, quando vamos criar uma senha, 94 caracteres são
          disponibilizados:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          <ul className={styles.list}>
            <li className={styles.list_item}>Números (10 diferentes: 0-9)</li>
            <li className={styles.list_item}>Letras (52 diferentes: A-Z e a-z)</li>
            <li className={styles.list_item}>Símbolos (32 diferentes)</li>
          </ul>
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Então, são 16 posições possíveis (tamanho) e 94 possibilidades para cada. Agora
          multiplicando o número de possibilidades de cada posição temos:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94 x 94
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Isso totaliza algo em torno de 37 Nonilhões (número 37 seguido de 30 zeros), que é um
          número de possibilidades grande o suficiente para deixar um computador ocupado por
          séculos.
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Para que uma senha passe a ser considerada um “desafio” para um computador, ela deve ter,
          pelo menos, 12 caracteres de tamanho, porém o ideal é usar senhas de 16 caracteres ou
          mais. Abaixo você pode observar quanto tempo um computador comum levaria para descobrir
          uma senha de acordo com sua quantidade de caracteres:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph} ${styles.centered_paragraph}`}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.table_cell} ${styles.table_head}`}>
                  Número de caracteres da senha
                </th>
                <th className={`${styles.table_cell} ${styles.table_head}`}>
                  Tempo para ser descoberta
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.table_cell}>6</td>
                <td className={styles.table_cell}>3 horas</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>11</td>
                <td className={styles.table_cell}>33 anos</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>12</td>
                <td className={styles.table_cell}>4 séculos</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>16</td>
                <td className={styles.table_cell}>mais de 10.000 séculos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${styles.topicTitle} ${styles.tertiary_topicTitle}`}>
          Aleatoriedade e Singularidade da senha
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Os fatores “aleatoriedade” e “singularidade” são importantes na medida em que dificultam o
          uso de certas técnicas num ataque de força bruta. Isso acontece pois esses ataques
          geralmente são feitos de maneira inteligente, as primeiras senhas testadas serão
          combinações entre palavras do dicionário, nomes próprios, informações sobre o usuário,
          senhas mais comuns e senhas vazadas em ataques hackers – se a senha é aleatória e única a
          probabilidade dela ser descoberta usando este tipo de técnica é mínima.
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Os dois fatores são complementares, uma vez que a senha tenha sido gerada de maneira
          aleatória, muito provavelmente ela irá preencher o requisito de ser singular, isso ocorre
          pois é muito improvável que, dentre a imensa quantidade de combinações de senhas
          possíveis, alguém tenha gerado aleatoriamente uma senha igual a sua. Por isso é
          recomendado que se use geradores automáticos para criar suas senhas – falarei sobre como
          usá-los no tópico “Ferramentas”.
        </div>
        <div className={`${styles.topicTitle} ${styles.secondary_topicTitle}`}>
          Sobre separar a proteção de suas contas em camadas
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          A separação das contas em “camadas” consiste basicamente em dois pontos: usar contas de
          e-mail diferentes para cada tipo de serviço utilizado na internet, e fazer uso da
          “autenticação de dois fatores” em todas as suas contas. Explicando a importância de cada
          ponto:
        </div>
        <div className={`${styles.topicTitle} ${styles.tertiary_topicTitle}`}>
          Usar contas de e-mail diferentes
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          A maneira mais simples de separarmos nossas contas em camadas é usando contas de e-mail
          diferentes para cada propósito diferente. Por exemplo:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Digamos que João use a internet com quatro propósitos claramente distintos:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          <ul className={styles.list}>
            <li className={styles.list_item}>Usar redes sociais</li>
            <li className={styles.list_item}>Realizar comprar online</li>
            <li className={styles.list_item}>Armazenar fotos e mídias</li>
            <li className={styles.list_item}>Trocar e-mails relacionados ao trabalho</li>
          </ul>
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          O recomendado é que João crie uma conta de e-mail para cada um desses propósitos, pois
          assim, caso o e-mail que ele usa para trabalhar, por exemplo, seja invadido, os hackers
          não encontrarão um “pote de ouro” com todas as informações sobre João num local só – suas
          fotos, informações sobre compras e informações sobre suas interações sociais estarão
          protegidas. Obviamente para que esse método seja eficaz, é necessário que cada um desses
          e-mails estejam protegidos por boas senhas (aleatórias e únicas) e com a verificação de
          dois fatores ativada.
        </div>
        <div className={`${styles.topicTitle} ${styles.tertiary_topicTitle}`}>
          Autenticação de Dois Fatores
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Fazer uso da “autenticação de dois fatores” (também chamada de “autenticação de duas
          etapas” ou 2FA) é extremamente eficiente para proteger suas contas, a 2FA consiste
          basicamente em adicionar uma etapa a mais no processo de login. Como funciona:
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.secondary_paragraph}`}
        >
          Imagine que você está tentando acessar sua conta do Facebook, normalmente bastaria
          preencher os campos de e-mail e senha e clicar no botão de login (botão “entrar” do
          Facebook), mas com a autenticação de duas etapas ativa, antes de entrar em sua conta, o
          Facebook iria te pedir um código de autenticação que eles te enviaram via sms, e-mail, ou
          por outro meio.
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Essa funcionalidade é boa para sua segurança pois, mesmo que alguma pessoa e/ou grupo
          tenha conhecimento de suas senhas, ninguém será capaz de acessar suas contas, uma vez que,
          antes de qualquer tentativa de login, seria solicitado um código que é gerado
          aleatoriamente e muda a cada tentativa (ou a cada X segundos). Para administrar todas as
          suas contas que tem a 2FA ativa existem diversos aplicativos gratuitos e seguros, que
          mantém seus códigos de autenticação seguros e de fácil acesso para você caso você tenha um
          smartphone, mostrarei no próximo tópico como utilizar esses aplicativos.
        </div>

        <div className={`${styles.topicTitle} ${styles.primary_topicTitle}`}>
          Ferramentas que podem te ajudar a se proteger
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Em suma, vimos que para proteger de verdade nossas contas online precisamos:
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              Usar senhas fortes e únicas para cada conta (geradas de maneira aleatória)
            </li>
            <li className={styles.list_item}>
              Separar a proteção de nossas contas em camadas (principalmente usando 2FA)
            </li>
          </ul>
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Mas ao tentar cumprir esses requisitos podemos nos deparar com problemas. Por exemplo,
          quando criamos senhas fortes e únicas para cada conta, como fazer para memorizar todas
          elas? Ou também, quando ativamos a verificação de etapas, como saber onde seu código de
          verificação vai chegar? E se eu mudar o número do meu celular? como vou receber o código
          de autenticação via SMS se não tenho mais acesso ao antigo numero? Para nos ajudar com
          esses problemas existem aplicativos/serviços gratuitos e seguros que podemos usar:
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              Para o gerenciamento de contas/senhas podemos usar o BitWarden, um aplicativo que,
              além de ser gratuito para todas as plataformas (PC e Mobile), também é totalmente
              transparente com a comunidade
            </li>
            <li className={styles.list_item}>
              Para gerenciamento e integração de todas as contas com a autenticação de dois fatores
              podemos usar o Authy, um aplicativo gratuito para todas as plataformas, e muito
              intuitivo para quem vai usá-lo pela primeira vez
            </li>
          </ul>
        </div>
        <div className={`${styles.topicTitle} ${styles.secondary_topicTitle}`}>BitWarden</div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          O BitWarden, além de armazenar todas as suas credenciais de maneira segura, também irá te
          ajudar a:
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          <ul className={styles.list}>
            <li className={styles.list_item}>Gerar senhas aleatórias e únicas</li>
            <li className={styles.list_item}>Autopreencher formulários de login</li>
          </ul>
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          E o principal da ferramenta é que você poderá criar contas usando senhas aleatórias e
          únicas sem ter o problema de ter que lembrar de cada uma, já que uma vez logado no
          aplicativo do BitWarden você pode usar o recurso de autopreenchimento ou poderá copiar a
          senha de cada conta registrada, então, resumindo, a única senha que você precisará lembrar
          é a Senha Mestra do BitWarden.
        </div>
        <div className={`${styles.topicTitle} ${styles.tertiary_topicTitle}`}>
          Tutorial BitWarden
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Caso você esteja usando celular ou outro dispositivo móvel (celulares, tablets, etc) você
          pode seguir os mesmos passos baixando o app BitWarden na loja de aplicativos do Google ou
          IOS (Apple).
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          <ul className={`${styles.list} ${styles.list_greek}`}>
            <li className={styles.list_item}>
              Primeiramente você deve criar uma conta no BitWarden:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                Acesse o site{' '}
                <a
                  className={styles.reference_link}
                  href="https://bitwarden.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://bitwarden.com/
                </a>{' '}
                e clique em Start a Free Trial ou em Log In.
              </li>
              <li className={styles.list_item}>
                Caso tenha clicado em Log In agora você deve clicar em Criar Conta.
              </li>
              <li className={styles.list_item}>
                Na tela de criação de contas preencha os dados pedidos:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>Coloque seu e-mail principal e seu nome.</li>
                <li className={styles.list_item}>
                  Use o site{' '}
                  <a
                    className={styles.reference_link}
                    href="https://www.lastpass.com/pt/password-generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.lastpass.com/pt/password-generator
                  </a>{' '}
                  para gerar aleatoriamente sua Senha Mestra:
                </li>
                <ul className={`${styles.list} ${styles.list_circle}`}>
                  <li className={styles.list_item}>
                    Quando for gerar sua senha use pelo menos 16 caracteres de tamanho, é importante
                    que essa senha seja forte pois ela estará protegendo todas as suas outras
                    senhas. O site te dá a opção de criar uma senha “fácil de pronunciar”, “fácil de
                    ler” ou uma com “todos os caracteres”, escolha a que te agradar mais.
                  </li>
                  <li className={styles.list_item}>
                    Recomendo que anote seu e-mail e sua senha mestra num papel e deixe esse papel
                    guardado em algum local seguro de sua casa (já que é possível que você esqueça
                    essa senha).
                  </li>
                </ul>
                <li className={styles.list_item}>
                  Na dica de senha você pode colocar qualquer coisa aleatória ou simplesmente um
                  lembrete de onde está o seu papel com a senha anotada.
                </li>
              </ul>
              <li className={styles.list_item}>
                Após criar sua conta você será redirecionado para o seu cofre BitWarden, lá você
                verá uma notificação pedindo para que você confirme seu e-mail:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>
                  Clique no botão “enviar e-mail” presente na notificação.
                </li>
                <li className={styles.list_item}>
                  Verifique a caixa de entrada da sua conta de e-mail, lá você vai achar um e-mail
                  do BitWarden com um link de confirmação, clique neste link para confirmar a sua
                  conta.
                </li>
              </ul>
              <li className={styles.list_item}>Pronto! Seu cofre foi criado!</li>
            </ul>
            <li className={styles.list_item}>
              Baixe o aplicativo/programa/extensão do BitWarden nas plataformas onde você for usar a
              ferramenta. No site{' '}
              <a
                className={styles.reference_link}
                href="https://bitwarden.com/download/"
                target="_blank"
                rel="noreferrer"
              >
                https://bitwarden.com/download/
              </a>{' '}
              podem ser encontrados os links de download para as mais diversas plataformas/sistemas.
            </li>
            <li className={styles.list_item}>
              Independentemente da plataforma onde você estiver usando o BitWarden, três abas
              ficarão disponíveis por padrão nos aplicativos:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                Meu Cofre: nesta aba você verá todas as credenciais/senhas/contas que você possui
                armazenados em seu cofre.
              </li>
              <li className={styles.list_item}>
                Gerador/Ferramentas: nesta aba fica uma ferramenta de geração de senhas aleatórias e
                únicas, sempre que você for criar uma nova conta em qualquer site use essa
                ferramenta para gerar sua senha.
              </li>
              <li className={styles.list_item}>
                Configurações: aba com diversas opções de configuração para sua extensão, seu cofre
                e sua conta BitWarden.
              </li>
            </ul>
            <li className={styles.list_item}>
              Em todas as plataformas você vai ter as mesmas funcionalidades base disponíveis:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                Você pode adicionar novas credenciais manualmente ao seu cofre clicando no botão
                “+”, ao clicar no botão um formulário com alguns campos irá aparecer:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>
                  O campo “tipo” é o tipo de credencial que você deseja salvar, no caso estamos
                  registrando contas online então deixe marcado “credencial”.
                </li>
                <li className={styles.list_item}>
                  O campo “nome” se refere ao nome que você quer dar àquela credencial, coloque o
                  que você achar melhor, no meu caso eu escrevo algo do tipo “Conta E-mail
                  Principal” ou “Conta E-mail Secundária”.
                </li>
                <li className={styles.list_item}>
                  Os campos “nome de usuário” e “senha” são, respectivamente, seu login e senha para
                  aquele site, ou seja, as credenciais que você quer salvar.
                </li>
                <li className={styles.list_item}>
                  O campo “URI” ou “URL” se refere aos sites de onde são essas credenciais, por
                  exemplo se você estiver registrando uma credencial do Gmail você deve preencher
                  esse campo com “gmail.com”.
                </li>
                <li className={styles.list_item}>
                  Os outros campos são irrelevantes neste momento, você pode apenas deixar eles como
                  eles estão por padrão.
                </li>
              </ul>
              <li className={styles.list_item}>
                Você pode acessar todas as credenciais armazenadas em seu cofre e copiar o “nome de
                usuário” ou “senha” de qualquer credencial a qualquer momento.
              </li>
              <li className={styles.list_item}>
                Uma ferramenta de geração automática de senhas pode ser usado para gerar senhas
                aleatórias e únicas de acordo com as opções escolhidas, você pode escolher o tamanho
                da senha, tipos de caracteres usados, entre outras opções.
              </li>
            </ul>
            <li className={styles.list_item}>
              Caso você queira usar o BitWarden em um navegador de internet:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                No{' '}
                <a
                  className={styles.reference_link}
                  href="https://bitwarden.com/download/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link passado no tópico 2
                </a>{' '}
                você encontrará links para instalar a extensão em oito Navegadores diferentes
                (Google Chrome, Firefox, Opera, Microsoft Edgar, Safari, Vivaldi, Brave e Tor
                Browser), clique no link que corresponde ao seu navegador e instale a extensão.
              </li>
              <li className={styles.list_item}>
                Com a extensão instalada, clique no ícone (um escudo branco e azul) que surgirá na
                barra de ferramentas do navegador, e faça login com sua conta BitWarden.
              </li>
              <li className={styles.list_item}>
                Após ter feito o login veremos que agora existem 4 abas dentro da janela da
                extensão:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>As três abas padrão.</li>
                <li className={styles.list_item}>
                  Uma aba chamada “Aba” onde serão mostradas todas as credenciais salvas para o site
                  em que você estiver no momento.
                </li>
              </ul>
              <li className={styles.list_item}>
                Fazendo uso da extensão as seguintes funcionalidades adicionais estarão disponíveis:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>
                  Toda vez que você for fazer login ou criar uma nova conta a extensão irá pedir
                  para salvar suas credenciais, você apenas precisa clicar em “sim”.
                </li>
                <li className={styles.list_item}>
                  Caso você já tenha salvo as credenciais de login de algum site, sempre que você
                  for fazer login novamente naquele site basta clicar no ícone da extensão (escudo
                  azul e branco), ir para a seção “Aba”, e clicar na credencial salva para que o
                  formulário de login seja preenchido automaticamente.
                </li>
              </ul>
            </ul>
            <li className={styles.list_item}>
              Caso você queira usar o BitWarden em um dispositivo móvel:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                No{' '}
                <a
                  className={styles.reference_link}
                  href="https://bitwarden.com/download/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link passado no tópico 2
                </a>{' '}
                você encontrará links para instalar o aplicativo tanto em sistemas Android quanto em
                IOS (Apple), ou você também pode simplesmente pesquisar por “BitWarden” na
                “AppStore” ou “PlayStore” e instalá-lo.
              </li>
              <li className={styles.list_item}>
                Com o app já instalado, abra o aplicativo e faça login com seu e-mail e sua senha
                mestra.
              </li>
              <li className={styles.list_item}>
                No caso de dispositivos móveis você também tem a funcionalidade de
                autopreenchimento, mas ela deve ser ativada:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>Abra o app e vá para a aba “Configurações”.</li>
                <li className={styles.list_item}>
                  Ative o “Serviço de Autopreenchimento” e o “Serviço de Acessibilidade de
                  Autopreenchimento”.
                </li>
              </ul>
              <li className={styles.list_item}>
                Caso seu dispositivo possua leitor biométrico (leitor de digital do dedo) você pode
                usar isso para desbloquear seu cofre BitWarden, excluindo a necessidade de escrever
                sua senha mestra toda vez:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>Abra o app e vá para a aba “Configurações”.</li>
                <li className={styles.list_item}>
                  Procure pela opção “Desbloquear com Biometria” e clique para ativá-la.
                </li>
              </ul>
            </ul>
            <li className={styles.list_item}>
              O aplicativo “BitWarden” para PC/Notebook não apresenta nenhuma funcionalidade extra
              que valha a pena ser apresentada.
            </li>
          </ul>
        </div>
        <div className={`${styles.topicTitle} ${styles.secondary_topicTitle}`}>Authy</div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          O Authy é um aplicativo autenticador, ou seja, ele irá funcionar como um fator externo
          para você se autenticar (fazer login) em qualquer conta em que a autenticação de dois
          fatores (2FA) estiver ativa e configurada. Um diferencial deste aplicativo em relação a
          outros aplicativos autenticadores, como o “Google Authenticator”, é a possibilidade de
          conectar sua conta Authy em diversos dispositivos, além da possibilidade de fazer backup
          de sua conta Authy – o que é muito útil caso você seja roubado, perca seu dispositivo,
          etc.
        </div>
        <div className={`${styles.topicTitle} ${styles.tertiary_topicTitle}`}>Tutorial Authy</div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Apesar de existir um aplicativo para PC/Notebook este tutorial só vai abordar o uso do
          aplicativo em dispositivos móveis.
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          <ul className={`${styles.list} ${styles.list_greek}`}>
            <li className={styles.list_item}>
              Baixe o aplicativo do Authy em seu dispositivo móvel Android ou IOS:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                No site{' '}
                <a
                  className={styles.reference_link}
                  href="https://authy.com/download/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://authy.com/download/
                </a>{' '}
                podem ser encontrados links para download do aplicativo para diversas
                plataformas/sistemas. Você também pode encontrar o aplicativo na “AppStore” ou na
                “PlayStore” simplesmente pesquisando por “Authy” – o nome completo do app nessas
                lojas é “Twilio Authy” ou “Twilio Authy 2-Factor Authentication”.
              </li>
            </ul>
            <li className={styles.list_item}>
              Abra o aplicativo e faça seu registro usando seu número de celular e seu e-mail:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                O aplicativo vai pedir que você confirme um código recebido por meio de SMS ou
                Ligação em seu celular, recomendo escolher a opção SMS.
              </li>
              <li className={styles.list_item}>
                O e-mail e celular usados para registrar podem ser alterados posteriormente caso
                seja necessário.
              </li>
            </ul>
            <li className={styles.list_item}>
              Crie uma senha de backup para sua conta, isso protege sua conta Authy e possibilita
              que você faça um backup de sua conta:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                No aplicativo clique nos 3 pontinhos e abra o menu de “Configurações”.
              </li>
              <li className={styles.list_item}>Vá para a aba “Contas” e procure por “Backups”.</li>
              <li className={styles.list_item}>
                Ative a funcionalidade de “Backups” e coloque uma boa senha de backup:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>
                  Use o gerador de senhas do BitWarden ou o site citado no tópico 1.3 para gerar uma
                  senha aleatória e única.
                </li>
                <ul className={`${styles.list} ${styles.list_circle}`}>
                  <li className={styles.list_item}>
                    Recomendo que anote a senha de backup do Authy em um papel e guarde num local
                    seguro, assim como você fez com a senha mestre do BitWarden – é essencial que
                    você nunca perca nenhuma das duas.
                  </li>
                </ul>
              </ul>
            </ul>
            <li className={styles.list_item}>
              Ative a autenticação de dois fatores em alguma conta usando o aplicativo:
            </li>
            <ul className={`${styles.list} ${styles.list_disc}`}>
              <li className={styles.list_item}>
                Vá para o site da conta em que você pretende ativar a 2FA (por exemplo: Twitter,
                Facebook, etc).
              </li>
              <li className={styles.list_item}>
                Vá nas configurações e procure nas seções de “segurança da conta” pela opção de
                ativar a verificação em duas etapas.
              </li>
              <li className={styles.list_item}>
                Ative a 2FA e escolha usar um “Aplicativo autenticador” como método.
              </li>
              <li className={styles.list_item}>
                O site irá lhe prover um QR code ou um código de caracteres.
              </li>
              <li className={styles.list_item}>
                Entre no app do Authy, abra o menu de opções e clique em "Adicionar Conta".
              </li>
              <li className={styles.list_item}>O app vai te dar duas opções:</li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>Escanear código QR.</li>
                <li className={styles.list_item}>Introduzir o código manualmente.</li>
              </ul>
              <li className={styles.list_item}>O app vai te dar duas opções:</li>
              <li className={styles.list_item}>
                Se você tiver o código QR em alguma tela basta escanear, ou caso você tenha somente
                o código de caracteres em mãos basta digitar e clicar em Salvar.
              </li>
              <li className={styles.list_item}>
                Agora você possui aquela conta registrada no Authy, sempre que você for fazer login
                naquele site e lhe for pedido um código de autenticação basta você abrir o
                aplicativo e ver o código relacionado àquela conta:
              </li>
              <ul className={`${styles.list} ${styles.list_latin}`}>
                <li className={styles.list_item}>
                  Lembrando que o código é atualizado a cada 30 segundos por motivos de segurança,
                  então nem adianta tentar memorizar esse código de autenticação para usar depois.
                </li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          Após ler esses dois tutoriais, você agora tem uma noção de como utilizar esses dois
          aplicativos para aumentar a segurança de todas as suas contas e ao mesmo tempo diminuir o
          número de senhas que você precisa lembrar. Para complementar tudo isso somente irei
          pontuar algumas coisas:
        </div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              Após criar a conta no Authy, use o app para ativar a verificação de duas etapas em sua
              conta BitWarden, dessa maneira sua proteção estará completa.
            </li>
            <li className={styles.list_item}>
              Depois de ter criado as contas BitWarden e Authy tire um tempo para melhorar suas
              senhas e ative a 2FA em todas as contas que você já possui, isso vai te tomar 1-2
              horas porém pode evitar muitos problemas no futuro.
            </li>
            <li className={styles.list_item}>
              Anote a Senha Mestra do BitWarden e a Senha de Backup do Authy (junto com os e-mails e
              n° de telefone usados para criar as contas) em pelo menos mais de um papel, e guarde
              eles em locais diferentes, isso vai te evitar muita dor de cabeça.
            </li>
            <li className={styles.list_item}>
              A senha mestra de sua conta BitWarden não deve ser compartilhada com ninguém, esse é
              um dos motivos mais recorrentes em vazamentos de dado.
            </li>
            <li className={styles.list_item}>
              Não é recomendado que você faça login em sua conta BitWarden em um dispositivo
              desconhecido, como computadores de universidade, bibliotecas, etc.
            </li>
          </ul>
        </div>
        <div className={`${styles.topicTitle} ${styles.primary_topicTitle}`}>Conclusão</div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          As pessoas estão cada vez mais vulneráveis na internet, o uso de senhas fracas e o não uso
          de ferramentas de segurança – como por exemplo a autenticação de dois fatores – são duas
          das causas principais dessa falta de segurança. No artigo foram apresentados brevemente os
          elos mais fracos dentro da segurança da informação e o que você pode fazer para fortalecer
          esses elos de maneira fácil. Se você seguiu todos os passos até aqui você provavelmente
          está mais bem protegido e tem uma noção melhor sobre segurança digital do que a maior
          parte dos usuários. Aos interessados em aprender mais sobre segurança online deixarei
          sugestões de artigos que se aprofundam em alguns dos tópicos abordados neste artigo.
        </div>
        <div className={`${styles.topicTitle} ${styles.primary_topicTitle}`}>Referências</div>
        <div className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph}`}>
          <ul className={`${styles.list} ${styles.list_greek}`}>
            <li className={styles.list_item}>
              Verizon Communications. <b>D.B.I.R. - Data Breach Investigations Report.</b> 2020.
              Disponível em:{' '}
              <a
                className={styles.reference_link}
                href="https://enterprise.verizon.com/resources/reports/dbir/2020/"
                target="_blank"
                rel="noreferrer"
              >
                https://enterprise.verizon.com/resources/reports/dbir/2020/
              </a>
              . Acesso em: 24 janeiro 2021.
            </li>
            <li className={styles.list_item}>
              IBM. <b>Big Data Challenge Opportunity.</b> 2020. Disponível em:{' '}
              <a
                className={styles.reference_link}
                href="https://www.ibm.com/watson/infographic/discovery/big-data-challenge-opportunity/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.ibm.com/watson/infographic/discovery/big-data-challenge-opportunity/
              </a>
              . Acesso em: 24 janeiro 2021.
            </li>
            <li className={styles.list_item}>
              TeleSign. <b>Consumer Account Security Report.</b> 2015. Disponível em:{' '}
              <a
                className={styles.reference_link}
                href="https://ts.telesign.com/hubfs/Downloadable%20Assets/Whitepapers-Eguides-Reports/Report%20-%20TeleSign%20Consumer%20Account%20Security%20Report%20-%20EN.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://ts.telesign.com/hubfs/Downloadable%20Assets/Whitepapers-Eguides-Reports/Report%20-%20TeleSign%20Consumer%20Account%20Security%20Report%20-%20EN.pdf
              </a>
              . Acesso em: 26 janeiro 2021.
            </li>
            <li className={styles.list_item}>
              Domo Inc. <b>Data Never Sleeps 6.0.</b> 2017. Disponível em:{' '}
              <a
                className={styles.reference_link}
                href="https://www.domo.com/assets/downloads/18_domo_data-never-sleeps-6+verticals.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://www.domo.com/assets/downloads/18_domo_data-never-sleeps-6+verticals.pdf
              </a>
              . Acesso em: 26 janeiro 2021.
            </li>
          </ul>
        </div>
        <div className={`${styles.paragraph}`}>
          <div className={styles.separator} />
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text} ${styles.primary_paragraph} ${styles.centered_paragraph}`}
        >
          <i>
            "A vida é muito curta e ansiosa para aqueles que esquecem o passado, negligenciam o
            presente e temem o futuro."
          </i>
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text} ${styles.primary_paragraph} ${styles.centered_paragraph}`}
        >
          <i>— Sêneca</i>
        </div>
        <div className={`${styles.paragraph}`}>
          <div className={styles.separator} />
        </div>
        <div
          className={`${styles.paragraph} ${styles.regular_text}  ${styles.primary_paragraph} ${styles.centered_paragraph}`}
        >
          <div className={styles.small_text}>
            Agradecimentos ao Gustavo e ao Henrique por lerem o artigo 91.284 vezes
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
