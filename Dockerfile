FROM node:latest

RUN npm install -g yarn pm2 --registry https://registry.npm.taobao.org

RUN git clone https://github.com/LinkXSystem/lex-system.git

WORKDIR lex-system

RUN git checkout -b deploy origin/deploy

RUN yarn install

EXPOSE 4500

CMD ["pm2", "start", "ecosystem.config.js"]

