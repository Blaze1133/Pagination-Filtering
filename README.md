#PAGINATION AND FILTERING

##STEPS

Steps to Run a basic NodeJs Project

1. Install the dependencies, run npm init,  install      mongoose etc,express

2. Set up the .env file and also the define the schema and model

3. Insert the data into Pre-generated data into MongoDb



##Hierarchy of folders

app.js [import the  router,db func,create a start func serv == db]
*Db -> connect.db [import the mongoose model]
*routes -> routes.js [import express,controllers]
*controllers -> controllers.js [main logic & model**]
.env
.gitignore
*models -> products.js [defining schema and model,mongoose is required]

Always insert the data into collection before performing any operation
