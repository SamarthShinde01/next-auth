FROM node:20-alpine

WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install

COPY prisma ./
RUN npx prisma generate

COPY . .
ENV NEXTAUTH_URL=http://localhost:3005
ENV NEXTAUTH_SECRET=I5n49cHZUdvBBCsI2AmtOKxf+dgYmbyYbqOyRgXKciI=
ENV DATABASE_URL="postgresql://neondb_owner:dexRUn3lg6vy@ep-sparkling-flower-a5rqhdzn.us-east-2.aws.neon.tech/test-use?sslmode=require"
RUN npm run build

CMD [ "npm","run","start" ]