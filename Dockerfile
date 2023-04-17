FROM node:lts as build
RUN mkdir -p /app/node_modules && chown -R node:node /app
USER node
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
ARG PUBLIC_URL
ENV PUBLIC_URL=$PUBLIC_URL
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
RUN yarn run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
