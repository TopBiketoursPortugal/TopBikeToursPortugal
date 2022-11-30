FROM node:19-alpine
WORKDIR /usr/src
# install python 3
# RUN apt update && apt upgrade
# RUN apt install software-properties-common
# RUN add-apt-repository ppa:deadsnakes/ppa
# RUN apt install python3.9

#install python 2
# RUN apt-get update || : && apt-get install python -y

# RUN apt-get install libpq-dev g++ make

RUN apk update && apk upgrade && apk add git g++ gcc libgcc libstdc++ linux-headers make python3 && apk update
# RUN npm install -g npm@9.1.2
RUN echo npm --version
COPY . /usr/src

# RUN npm config set python python3
RUN npm i --legacy-peer-deps
RUN npm run build