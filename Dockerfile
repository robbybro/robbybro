FROM node:boron

# speed up npm install a little on docker
RUN npm config set registry http://registry.npmjs.org/

# install webpack and forever globally
RUN npm install webpack -g
RUN npm install forever -g

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# build production app w/ webpack
RUN webpack -p --config webpack.production.config.js

ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start" ]