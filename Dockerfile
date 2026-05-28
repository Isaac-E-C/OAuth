FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 10000

CMD sh -c "printf 'window.__APP_CONFIG__ = { GOOGLE_CLIENT_ID: \"%s\" };' \"${GOOGLE_CLIENT_ID:-$VITE_GOOGLE_CLIENT_ID}\" > /usr/share/nginx/html/config.js && nginx -g 'daemon off;'"
