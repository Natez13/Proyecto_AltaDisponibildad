#Imagen Base
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
#Ambiente Produccion
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
