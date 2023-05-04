# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install any needed dependencies specified in package.json
RUN yarn install

# Copy the rest of the app's source code into the container at /app
COPY . .

# Make the container's port 3001 and 3002 available to the host machine
EXPOSE 3001 3002

# Run the app when the container launches
CMD [ "yarn", "dev" ]