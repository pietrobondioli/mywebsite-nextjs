---
slug: "solving-cors-problems-with-docker-nginx"
title: "O que fazer quando o CORS impede o desenvolvimento: uma solução com Docker e Nginx"
published: "2023-03-25"
publishedHumanReadable: "03/25/2023"
lastModified: "2023-03-25"
author: "Pietro Bondioli"
excerpt: "Não são poucas as vezes que, como desenvolvedor, eu me deparo com aqueles tipos de problemas que nós nunca cogitamos que viria a ser um problema. Eu aposto que problemas de CORS já te deu dor de cabeça em algum momento. Neste artigo vou tentar explicar brevemente meu problema específico e como eu resolvi ele."
image: "/articles/solving-cors-problems-with-docker-nginx/cors-problems.png"
imageAlt: "Imagem de um computador com o console do navegador aberto, mostrando um erro de CORS, e ao lado um homem com dor de cabeça."
---

# O que fazer quando o CORS impede o desenvolvimento: uma solução com Docker e Nginx

##### Mar 25, 2023 · 8 min - Pietro Bondioli

## Introdução

Não são poucas as vezes que, como desenvolvedor, eu me deparo com aqueles tipos de problemas que nós nunca cogitamos que viria a ser um problema. Alguns meses atrás eu possuia o seguinte cenário:

- Havia uma aplicação monolito, e meu trabalho era basicamente desacoplar o front-end do back-end.
- Por conta de ser um back-end pesado (com diversas aplicações necessárias para o correto funcionamento do sistema), não era uma opção deixar o app rodando em background enquanto eu desenvolvia - na época a nasa ainda não havia enviado um computador para mim.

Em um primeiro pensamento a solução parece simples, podemos apenas apontar todas as chamadas de API para o servidor remoto - é aqui que chega na parte do problema não cogitado: o mecanismo de CORS (Cross-Origin Resource Sharing) não estava configurado/ativado, o que faz muito sentido, já que por ser uma aplicação monolítica não havia necessidade.

Então, eu precisava de alguma maneira de retirar este impedimento do meu caminho, de preferência sem ter que alterar nada no backend - já que eu não era o responsável pelo back-end e mudanças no back-end geralmente tem impactos mais críticos em uma aplicação. Felizmente havia uma solução simples para o problema, envolvendo dois gigantes do desenvolvimento de software: Docker e Nginx.

Neste artigo vou tentar explicar brevemente o porquê do problema ter ocorrido e qual foi a solução de fato usada. Espero que gostem!

## O que é CORS?

Para entender o que é CORS primeiro precisamos entender o que é a Same-origin policy.

A Same-origin policy é uma política de segurança que impede que um site acesse recursos de outro site/server sem permissão explícita. O CORS (Cross-Origin Resource Sharing) é um mecanismo que existe em navegadores web e serve para configurar essa permissão no server. Ao configurar o CORS, dizemos a determinadas rotas que elas devem permitir que o request ocorra caso a origin do request seja uma das origens permitidas pelo servidor.

É importante lembrar que habilitar o CORS é abrir portas que antes estavam fechadas, portanto, é preciso levar em conta todos os prós e contras. Caso ainda reste alguma dúvida sobre o conceito básico de CORS eu criei um [guia ilustrado](/pt-BR/articles/cors-illustrated-guide) que talvez possa te ajudar

## Então, como eu resolvi o problema?

Para resolver o problema de CORS, criei um container Docker com um servidor Nginx que funcionava como um proxy reverso. O Nginx é uma ferramenta de servidor web que pode ser usada de diversas maneiras possíveis - é talvez uma das ferramentas mais úteis a se aprender como desenvolvedor web. Finalmente, como esse servidor resolveu meu problema?  O servidor Nginx foi configurado para encaminhar todos os requests para o servidor remoto, e então devolver as respostas para o front-end, e, ao mesmo tempo, ele também era responsável por configurar/habilitar o CORS, permitindo que o front-end fizesse as chamadas de API sem problemas.

## O código (provavelmente você scrollou direto para cá)

O código abaixo é referente ao arquivo de configuração do Nginx, ele deverá ser nomeado `default.conf.template` e ficar sob uma pasta nomeada `templates`:

```nginx
    server {
        listen 80;

        location / {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            if ($request_method = 'OPTIONS') {
                return 204;
            }

            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' '*';
            add_header 'Access-Control-Allow-Headers' '*';

            rewrite /(.*) /$1 break;

            proxy_pass http://backend:3000;
        }
    }
```

Você precisará referênciar a pasta templates dentro do seu arquivo de `docker-compose.yaml`:

```yaml
    services:
    cors_proxy:
        container_name: cors_proxy
        image: nginx
        env_file:
        - .env
        volumes:
        - ./templates:/etc/nginx/templates
        restart: on-failure
        ports:
        - "${EXPOSED_PORT}:80"
```

Para finalizar basta criar um arquivo `.env` juntamente com o seu `docker-compose.yaml`:

```txt
    REMOTE_HOST=#{REMOTE_HOST}
    EXPOSED_PORT=#{EXPOSED_PORT}
```

Substitua os valores:

- #{REMOTE_HOST} → URL do server remoto
- #{EXPOSED_PORT} → porta que será exposta na sua máquina local

Caso ainda tenha alguma dúvida eu criei um [repositório](https://github.com/bondiolipietro/cors-proxy-nginx-server) no github com todo o código. Eu também criei um [repositório](https://github.com/bondiolipietro/docker-nginx-reverse-proxy-example) simulando cada ponto do ambiente que foi descrito neste artigo - o frontend e nginx em localhost, e um servidor remoto.

## Conclusão

Vimos aqui como problemas “exóticos” que aparecem no nosso dia-a-dia podem ser resolvidos com ferramentas simples - mas poderosas - como o docker e o nginx. Espero que vocês tenham aprendido algo com este artigo, e que ele seja útil para alguém algum dia.
