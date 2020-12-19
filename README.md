# Recommendations

Recommendations is social application where users can create recommendations about anything and share it. Users, will then have the option to follow these recommendations if they find the content shared interesting.

## Tech Being Used

For this project, I am using graphql, node, knex, postgres, Apollo, Docker, React and styled-components.

## How to Run Locally. 

To run this app locally, you will need to have docker set up. You will need to add a .env file. The .env file should be added to the root folder. In the .env file you will need to add these values:

1. DB_HOST = Your db host
2. DB_PORT = This should be set to 5432
3. DB_USER = The db user
4. DB = The name of the db
5. DB_PASSWORD = The db password
6. JWTSECRET = a secret for JWT, could be any string
7. CHOKIDAR_USEPOLLING= true (this is for windows users. This will get docker to check for changes once you apply them.)

Once you have that set up, you are ready to start. To start the application simply run: 

> docker-compose up

This will build the containers and will run the command to start the application. Once that's complete, you will need to run the migrations. You can do that by running this command:

> docker exec -it recommendations_api_1 sh 
> /app #  npm run migrate

And that's it, you will be able to run this application local and test it out. Please note, the run migrate command will rollback previous migrations. What that means, it will reset your local db. If you do not wish to do that, you can run "npx knex migrate:latest". This will update your db without deleting any stored data. 

