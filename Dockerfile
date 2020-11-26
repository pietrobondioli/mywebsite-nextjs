FROM node:14-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app
RUN yarn

# Bundle app source
COPY . /usr/src/app

# Building app
RUN yarn build
EXPOSE 3000

# Running app
CMD ["yarn", "dev"]
