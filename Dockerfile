# Use specific Node version
FROM node:20.19.0

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you have it)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Expose whatever port your app runs on (example: 3000)
EXPOSE 3000

# Start the app (replace app.js with your actual entry point if it's different)
CMD ["node", "app.js"]
