# My Website - Next.Js

This website was created by me with the intention of being a place where I can better present my work and skills, ando also share my knowledge, thoughts and ideas (through my articles and projects).

## Notes

I've used Docker to virtualize the project during development due to the various changes of operating system I was making.

If you want 'sendMail' api route to work correctly you should add your domain to 'cors' whitelist (at src/api/sendMail.js) and create a dot-env(.env) file at the root folder with the following parameters:

```env
EMAIL=your_email_here
EMAIL_PASSWORD=your_password_here
```

Note that, unless you create a new gmail account to use only for this purpose, this isn't the more secure way to use 'node-mailer' since you'll need to activate 'less secure apps support' on your gmail account, the best approach here would be use OAuth2 to log in to your gmail account. You can get more information [here](https://nodemailer.com/usage/using-gmail/).

## Installation

If you want to run this web site locally in development mode you can use Docker:

```bash
docker-compose up --build
```

You can run it without the docker container, first you need to build the application:

```bash
npm i yarn -g && yarn && yarn build
```

then you can run it in development mode:

```bash
yarn dev
```

or in production mode:

```bash
yarn start
```

## Author

- Pietro Bondioli ([@bondiolipietro](https://github.com/bondiolipietro))

## License

[MIT](https://opensource.org/licenses/MIT)
