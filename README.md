# typescript-apollo
Tutorial for HowToGraphQL with Typescript, Apollo-Server, Nexus and Prisma.


### Installation

1. Install dependencies: `npm install`
2. Start a PostgreSQL database with docker using: `docker-compose up -d`. 
    - If you have a local instance of PostgreSQL running, you can skip this step. 
3. Create a `.env` file and add the `DATABASE_URL` environment variable with a [PostgreSQL connection string](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-details).
    - The `.env.example` file is provided as reference. 
4. Apply database migrations: `npx prisma migrate dev` 
5. Start the project:  `npm run dev`
6. Access the project at http://localhost:3000/


**Note:** The state of the codebase at the beginning of [chapter-9](https://www.howtographql.com/typescript-apollo/9-deployment/) is available in the [`chapter-9-start`](https://github.com/howtographql/typescript-apollo/tree/chapter-9-start) branch.
