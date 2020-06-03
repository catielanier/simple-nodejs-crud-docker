# Grab current LTS node version
FROM node:12.8

# Create app directory
WORKDIR /usr/src/app

# Grab package.json for installing node modules
COPY package*.json ./

# install node modules
RUN npm i

# Bundle
COPY . .

# Expose the port
EXPOSE 8080

# Run the app
CMD [ "node", "server.js" ]