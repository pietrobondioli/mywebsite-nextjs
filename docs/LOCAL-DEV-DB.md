# How to run a db locally to test the app

## Start you dev db

```bash
docker-compose --profile database up -d
```

## Put db connection string in .env

```bash
DATABASE_URL='mysql://root:root@localhost/database'
```

## Generate prisma types

```bash
npx prisma generate
```

## Push prisma schema to db

```bash
npx prisma db push
```

All right! Everything is ready to go!

## Notes

-   If you want to configure your prod db just change the connection string in `.env` file and run the prisma commands.
