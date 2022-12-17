FROM python:3.8.5-alpine
COPY . /API
WORKDIR /API
RUN apk add gcc musl-dev python3-dev libffi-dev openssl-dev
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install -U flask-cors
ENTRYPOINT ["python"]
CMD ["app.py"]

