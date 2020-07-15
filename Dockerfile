FROM alpine

RUN apk add git \
        && apk add yarn \
        && git clone https://github.com/DanShR/docker-app-1.git \
        && cd docker-app-1
        && yarn

WORKDIR ./docker-app-1

CMD yarn start

EXPOSE 3000