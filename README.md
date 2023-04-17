# Clarita Web Gallery Frontend

This projects is a React-based frontend for the Clarita Web Gallery.

## Development

Copy _.env_:

    cp .env.sample .env

Install dependencies:

    yarn

Run the development server:

    yarn start

Run the tests:

    yarn test

### Using Docker for development

    docker-compose up client

## Release

Build the project for release:

    yarn build

Using Docker:

    docker build . -t clarita-frontend:latest

## License

Clarita is licensed under the GNU Affero General Public License v3 (AGPLv3) or later.
See [LICENSE](LICENSE) for the full licensing text.
