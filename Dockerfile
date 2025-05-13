ARG NODE_VERSION=22.15.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /usr/src/app
COPY ./package*.json .
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "dist"]
