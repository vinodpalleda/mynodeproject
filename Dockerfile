FROM tomcat:latest
RUN mkdir -p /var/www/html
EXPOSE 8091
COPY dist/super-app-master/* /var/www/html
