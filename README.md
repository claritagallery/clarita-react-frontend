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

Environment variables `PUBLIC_URL` and `REACT_APP_API_BASE_URL` must be set at build time so generated files point to the URL where frontend is hosted and the URL where Clarita API is available, respectively.

Build the project for release:

    export PUBLIC_URL=https://server.example.com/
    export REACT_APP_API_BASE_URL=https://clarita.example.com
    yarn build

Using Docker:

    docker build . -t clarita-frontend:latest --build-arg PUBLIC_URL=https://server.example.com/ --build-arg REACT_APP_API_BASE_URL=https://clarita.example.com

## License

Clarita is licensed under the GNU Affero General Public License v3 (AGPLv3) or later.
See [LICENSE](LICENSE) for the full licensing text.
