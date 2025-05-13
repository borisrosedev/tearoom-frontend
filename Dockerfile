# STAGE ONE: build 
FROM node:20.13.1 AS build
WORKDIR /frontend
COPY package.json package-lock.json ./
COPY . .
RUN npm install && npm run build

# STAGE 2 : SERVE W/ NGINX
FROM nginx:stable-alpine
COPY --from=build /frontend/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf