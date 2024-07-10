# Usa la imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Crea un directorio para los certificados SSL
RUN mkdir -p /app/ssl

# Comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]