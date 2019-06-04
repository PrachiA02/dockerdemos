FROM ubuntu
RUN apt-get update && apt-get install -y apache2
EXPOSE 80
COPY ./dist/client /var/www/html
CMD apachectl -D FOREGROUND
