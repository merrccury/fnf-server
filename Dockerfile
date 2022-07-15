FROM node:lts-gallium

WORKDIR app

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

COPY package.json package-lock.json tsconfig.json tsconfig.build.json ./
COPY start.sh .
COPY src ./src

RUN npm install
RUN npm run build

CMD ["npm", "run", "start:dev"]




