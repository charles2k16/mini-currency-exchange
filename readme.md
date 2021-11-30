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

Create an env file in the config folder. File name should be :

```
config.env
```

Set up the env variable by adding these variales as follows:

```javascript
NODE_ENV=development
PORT=5000

ACCESS_KEY_ID= // your fixer keys http://data.fixer.io/api/apikeys
ACCESS_KEY_ID_RATES= // free currency api key here  https://freecurrencyapi.net/api/access_key
```

## Configure frontend code seperately

# This part is optional

To run frontend seperately, you would have to copy the frontend folder to your prefered destination.

## Configure frontend code to alter changes

To run or change frontend code or make some changes, cd into the directory and install the cli dependencies

```
cd frontend
```

```
npm i
```

After installing dependencies you can successfully make changes and build to take effect

```
npm run build
```
