FROM node:latest
WORKDIR /app
EXPOSE 80

COPY ./ ./
ARG VITE_APP_TIDDIX_BASE_URL
ENV VITE_APP_TIDDIX_BASE_URL=$VITE_APP_TIDDIX_BASE_URL
RUN yarn version

RUN npm install -g serve

RUN yarn install

RUN yarn run build

ENV PORT=80

CMD ["serve", "-s", "build"]
