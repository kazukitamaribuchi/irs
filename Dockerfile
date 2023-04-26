FROM node:lts-buster-slim as builder
# cat /etc/issue
#  => Debian GNU/Linux 10
# node --version 
#  => v18.15.0

WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
    net-tools \
    sudo \
    bzip2 \
    curl \
    gcc \
    git \
    vim

USER root
EXPOSE 8080
