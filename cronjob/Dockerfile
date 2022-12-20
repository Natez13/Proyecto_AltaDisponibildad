FROM python:3.8.5-alpine
COPY . /cronjob
WORKDIR /cronjob
RUN apk add gcc musl-dev python3-dev libffi-dev openssl-dev 
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install -U flask-cors
RUN crontab mycron
#RUN python3 -m grpc_tools.protoc -I protos --python_out=/backend --grpc_python_out=. protos/cron.proto
#RUN python3 -m grpc_tools.protoc -I protos --python_out=/backend --grpc_python_out=/backend protos/cron.proto
#CMD ["python3","-u","app.py"]
CMD crond && tail -f /cronjob/out.log -f /cronjob/out2.log
