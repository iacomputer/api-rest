FROM arm64v8/node:23.8.0

WORKDIR /api-rest

COPY package*.json ./
COPY src ./src

RUN npm install
RUN npm run build

CMD ["sh", "-c", "npm run node-watch & npm run swc-watch > /dev/null 2>&1"]