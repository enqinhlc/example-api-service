FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy source
COPY ./ ./

# Install dependencies
RUN npm install

# Run on docker 4000
EXPOSE 80

# start the project
CMD exec npm run start