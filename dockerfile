FROM cypress

WORKDIR /e2e


# Copy your test project into the container
COPY . .

# Install NPM dependencies
RUN npm install

# Run Cypress tests when container starts
CMD ["npx cypress run --spec cypress/e2e/Feature/Demo-Banesco/*.feature --env TAGS='@demo'"]