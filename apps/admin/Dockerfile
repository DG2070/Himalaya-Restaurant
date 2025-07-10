FROM node:lts-alpine

ARG VITE_BASE_URL

ENV VITE_BASE_URL=${VITE_BASE_URL}

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 4173

RUN npm run build

RUN npm install -g vite

CMD ["vite", "preview", "--host"]