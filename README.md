npm install \n
create .env file and add DATABASE_URL variable \n
npx prisma init --datasource-provider postgresql --output ../generated/prisma \n
npx prisma migrate dev --name init \n
npx prisma generate
