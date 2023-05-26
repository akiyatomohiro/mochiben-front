FROM --platform=linux/amd64 node:18-alpine

RUN apk update

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH
ENV APP_HOME /app

# ソースコードをDockerImageに埋め込む
COPY . $APP_HOME

WORKDIR /app
