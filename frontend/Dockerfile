FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install --verbose
RUN npm install -g @angular/cli --verbose
COPY . .
RUN ng build --configuration=production
FROM nginx:latest
COPY --from=build app/dist/frontend /usr/share/nginx/html
EXPOSE 80

FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli --verbose
RUN npm install --verbose
CMD ["ng", "serve", "--host", "0.0.0.0"]
