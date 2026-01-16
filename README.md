npm install
create .env file and add DATABASE_URL variable
npx prisma init --datasource-provider postgresql --output ../generated/prisma
npx prisma migrate dev --name init
npx prisma generate
