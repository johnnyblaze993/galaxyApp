FROM node:20
WORKDIR /app

# Temporarily set a different working directory for installing node_modules
WORKDIR /install 
COPY package*.json ./
RUN npm install

# Set NODE_PATH to point to the installed node_modules
ENV NODE_PATH=/install/node_modules

# Change back to the application's working directory
WORKDIR /app
COPY . .
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
