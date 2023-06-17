FROM node:18
WORKDIR /srv/app
COPY package.json ./
ARG PORT=3002
RUN  apt-get install libkrb5-dev
RUN npm install
COPY . .
RUN npm run build
EXPOSE "${PORT}"
ENV DB_URI=postgres://root:root@192.168.1.12:5432/hotelDB
ENV SECRET_TEXT=d2f72927943064fa19d00bc15644b7ee
ENV PORT="${PORT}"
CMD ["node", "build/index.js"]