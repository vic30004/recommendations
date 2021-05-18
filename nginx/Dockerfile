FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf 

COPY default.conf.template /etc/nginx/conf.d/default.conf.template


CMD /bin/bash -c "envsubst '\$CLIENTPORT' '\$SERVERPORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

