# Use official Cypress Docker image with everything pre-installed
FROM cypress/included:12.17.1

# Set working directory in container
WORKDIR /e2e

# Copy your project files into container
COPY . .

# Install dependencies
RUN npm install

# Run Cypress tests on container start
CMD npx cypress run --spec cypress/e2e/Feature/Demo-Banesco/LoginDemo.feature
