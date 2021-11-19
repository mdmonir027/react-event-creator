## Event creator.

### Install Packages

1. Clone this repo
2. Run `yarn` or `npm install`
3. Run `cd frontend ` and `yarn` or `npm install`

### Setup Environment Variable

1. Rename the `.env.example` to `.env`
2. And fill this property with values

```
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
SALT_ROUND=
JWT_TOKEN_SECRET=
MAIL_HOST_NAME=
MAIL_PORT=
USER_MAIL_NAME=
USER_MAIL_PASSWORD=
```

`If you setup this on server you need at this environment on server`

3. Open your database and import `database.sql` file
4. Default username `admin` and password `pass1234`

### Commands

1. `yarn start`: Run only the backend in production mode
2. `yarn run server`: Run only the backend in development mode
3. `yarn run client`: Run only the frontend in development mode
4. `yarn run dev`: Run both frontend and backend in development mode

Good Luck.
