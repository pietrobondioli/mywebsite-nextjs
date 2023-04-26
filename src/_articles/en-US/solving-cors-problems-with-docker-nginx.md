---
slug: "solving-cors-problems-with-docker-nginx"
title: "What to do when CORS prevents development: a solution with Docker and Nginx"
published: "2023-03-25"
publishedHumanReadable: "03/25/2023"
lastModified: "2023-03-25"
author: "Pietro Bondioli"
excerpt: "As a developer, I often come across those types of problems that we never thought would be a problem. I bet CORS has already given you a headache at some point. In this article, I will try to briefly explain my specific problem and how I managed to solve it."
image: "/articles/solving-cors-problems-with-docker-nginx/cors-problems.png"
imageAlt: "A pc with the browser console open, showing a CORS error, and beside it a man with a headache"
---

# What to do when CORS prevents development: a solution with Docker and Nginx

##### Mar 25, 2023 · 8 min - Pietro Bondioli

## Introduction

As a developer, I often come across those types of problems that we never thought would be a problem. A few months ago I had the following scenario:

- There was a monolithic application, and my job was basically to decouple the frontend from the backend.
- Due to being a heavy backend (with several applications necessary for the system to function properly), it was not an option to run the backend running in background while I was developing the frontend - at the time NASA had not yet sent me a computer.

At first, the solution seems simple, we can just point all API calls to the remote server - this is where it comes to the part of the problem not considered: the CORS (Cross-Origin Resource Sharing) mechanism was not configured/enabled on backend, which makes a lot of sense, since it was a monolithic application there was no need.

So, I needed some way to remove this impediment from my path, preferably without having to change anything in the backend - since I was not responsible for the backend and changes in the backend usually have more critical impacts on an application. Fortunately, there was a simple solution to the problem, involving two giants of software development: Docker and Nginx.

In this article, I will try to briefly explain why the problem occurred and what the actual solution was. I hope you enjoy it!

## What is CORS?

To understand what CORS is, we first need to understand what the Same-origin policy is.

The Same-origin policy is a security policy that prevents a site from accessing resources from another site/server without explicit permission. CORS (Cross-Origin Resource Sharing) is a mechanism that exists in web browsers and serves to configure this permission on the server. By configuring CORS, we tell certain routes that they should allow the request to occur if the request's origin is one of the origins allowed by the server.

It is important to remember that enabling CORS opens doors that were previously closed, so all pros and cons must be taken into account. If you still have any doubts about the basic concept of CORS, I created an [illustrated guide](/articles/cors-illustrated-guide) that may help you.

## So how did I solve the problem?

To solve the CORS problem, I created a Docker container with an Nginx server that acted as a reverse proxy. Nginx is a web server tool that can be used in various possible ways - it is perhaps one of the most useful tools to learn as a web developer. Finally, how did this server solve my problem? The Nginx server was configured to forward all requests to the remote server, and then return the responses to the front-end, and at the same time, it was also responsible for configuring/enabling CORS, allowing the front-end to make API calls without problems.

## The code (you probably scrolled straight down here)

The code below refers to the Nginx configuration file, it should be named default.conf.template and placed in a folder named templates:

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

You will need to reference the templates folder in your docker-compose.yaml file:

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

Finally, create a .env file alongside your docker-compose.yaml file:

```txt
    REMOTE_HOST=#{REMOTE_HOST}
    EXPOSED_PORT=#{EXPOSED_PORT}
```

Replace the values:

- #{REMOTE_HOST} → URL of the remote server
- #{EXPOSED_PORT} → port that will be exposed on your local machine

If you still have any doubts, I created a [repository](https://github.com/bondiolipietro/cors-proxy-nginx-server) on Github with all the code. I also created a [repository](https://github.com/bondiolipietro/docker-nginx-reverse-proxy-example) simulating each point of the environment described in this article - the frontend and nginx on localhost, and a remote server.

## Conclusion

We have seen how "exotic" problems that arise in our daily lives can be solved with simple but powerful tools like Docker and Nginx. I hope you have learned something from this article and that it will be useful to someone someday.
