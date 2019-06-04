
FROM ubuntu
#FROM 200.0.1.1:5000/ubuntu

RUN apt-get update && apt-get install -y apache2

EXPOSE 80

COPY ./website/ /var/www/html/

CMD apachectl -D FOREGROUND
