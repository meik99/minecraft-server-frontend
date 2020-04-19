FROM nginx:latest
COPY dist/MinecraftServerFrontend /usr/share/nginx/html
COPY deployment/nginx-config /etc/nginx/conf.d/default.conf
