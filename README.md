# My Website - Next.Js
This website was created by me with the intention of being a place where I can better present my work and skills, ando also share my knowledge, thoughts and ideas (through my articles and projects).

## Notes
I've used Docker to virtualize the project during development due to the various changes of operating system I was making.

## Installation
If you want to run this web site locally in development mode you can use Docker:
```
docker-compose up --build
```
You can run it without the docker container, first you need to build the application:
```
npm i yarn -g && yarn && yarn build
```
then you can run it in development mode:
```
yarn dev
```
or in production mode:
```
yarn start
```

## Author
- Pietro Bondioli ([@bondiolipietro](https://github.com/bondiolipietro))

## License
[MIT](https://opensource.org/licenses/MIT)
