# exchange Api

**Exchange App** is used small currency converter used to get exchnage rates for currencies below:

```javascript
['Euro', 'Dollar', 'Pound sterling', 'Canadian Dollar'];
```

### Project setup

To set up project install project dependencies by running

```
npm install
```

## Compiles and hot-reloads for development

Run the project locally on your computer for development. This runs the nodemon server for hot-reloads

```
npm run dev
```

## Compiles for production

Starts the server in production enviroment.

```
npm run start
```

### Set up environmental variables

Create an env file in the root directory

```
config.env
```

Set up the env variables by adding these variales as follows:

```javascript
NODE_ENV=development
PORT=5000

ACCESS_KEY_ID= // get your fixer keys here from https://fixer.io/
ACCESS_KEY_ID_RATES= // get a free currency api key here with rates from https://freecurrencyapi.net
```

## Configure frontend code seperately

### This part is optional

To run frontend seperately, you would have to copy the frontend folder to your prefered destination.
Once its done you can run your code in dev mode by running

```
npm run serve
```

The next step is to uncomment cors code from the server.js file in the node project

```javascript
// app.use(
//   cors({
//     origin: 'http://localhost:8080',
//   })
// );
```

## Configure or Run frontend internally

To run or change frontend code or make some changes, cd into the directory and install the cli dependencies

```
cd frontend
```

```
npm install
```

After installing dependencies you can successfully make changes and build to take effect

```
npm run build
```
