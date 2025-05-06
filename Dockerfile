# Estágio de build
FROM node:18-alpine AS build

WORKDIR /app

# Copiar arquivos de configuração
COPY frontend/package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY frontend/ ./

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copiar configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos de build
COPY --from=build /app/dist/osiris-rise/browser /usr/share/nginx/html

# Expor porta
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]