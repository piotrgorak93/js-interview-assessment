FROM node:24.14.0-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts

COPY . .

ARG VITE_API_URL
ARG VITE_API_KEY
ARG VITE_DEFAULT_CURRENCY_FROM
ARG VITE_DEFAULT_CURRENCY_TO
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_KEY=$VITE_API_KEY
ENV VITE_DEFAULT_CURRENCY_FROM=$VITE_DEFAULT_CURRENCY_FROM
ENV VITE_DEFAULT_CURRENCY_TO=$VITE_DEFAULT_CURRENCY_TO

RUN yarn build

FROM nginx:alpine

RUN rm /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
