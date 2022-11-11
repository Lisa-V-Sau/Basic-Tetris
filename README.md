# Basic-Tetris

Using the MERN techstack: MongoDB, Express, React, Node.JS.

Views: HTML, JS, CSS.

Server: Express, MongoDB.

### Run MongoDB before running server
NOTE: Install MongoDB before running the following command. 
Docs on installation: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
```
Run the following 'brew services start mongodb-community@6.0'
```

### Run Express Server
Once MongoDB is up and running in the background, you can now run Express server with the following command.
More information on Express JS: https://expressjs.com/en/guide/routing.html
NOTE: run npm install package as Express is a Dev dependency.
```
'npm run devStart'
```

### Deplopyments
Railyway is our deployment service. 
For more information on running this refer to the documents here:
https://docs.railway.app/getting-started 
```
https://basic-tetriscom-production.up.railway.app/
```
### MongoDB Clusters
As we are also using Mongo DB for our database, we will also need to generate a cluster so that it can be used as the env variable within Railway.
More information on building clusters: https://www.mongodb.com/atlas/database
```
Account cluster held here: https://cloud.mongodb.com/v2/636d05afcaf9127b806c19e3#clusters
```
