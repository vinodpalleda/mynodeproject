FROM tomcat:latest
EXPOSE 8091
COPY dist/super-app-master/* /var/www/html
