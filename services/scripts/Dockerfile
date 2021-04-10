FROM alpine:3.7

RUN apk update
RUN apk add --no-cache mysql-client

WORKDIR /src

COPY src/entrypoint.sh /
COPY src /srv

RUN chmod +x /entrypoint.sh
RUN mkdir /environment

ENTRYPOINT /entrypoint.sh