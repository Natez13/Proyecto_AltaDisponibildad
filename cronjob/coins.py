import grpc
import cron_pb2
import cron_pb2_grpc
import requests
from bs4 import BeautifulSoup
import re
import time

def main():
    with grpc.insecure_channel('backend:8050') as channel:
        stub = cron_pb2_grpc.DataStub(channel)
        # enter city name
        
        # creating url and requests instance
        url = "https://www.google.cl/search?q="+"dolar clp"
        url2 = "https://www.google.cl/search?q="+"euro clp"
        url3 = "https://www.google.cl/search?q="+"uf clp"
        #url20 = "https://si3.bcentral.cl/indicadoressiete/secure/indicadoresdiarios.aspx"
        
        html = requests.get(url).content
        soup = BeautifulSoup(html, 'html.parser')
        dolar_arr = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
        aux = dolar_arr.split(' ')
        dolar = aux[0]
        html = requests.get(url2).content
        soup = BeautifulSoup(html, 'html.parser')
        euro_arr = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
        aux = euro_arr.split(' ')
        euro = aux[0]
        html = requests.get(url3).content
        soup = BeautifulSoup(html, 'html.parser')
        uf_arr = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
        aux = uf_arr.split(' ')
        uf = aux[0]
        epoch_time = str(int(time.time()))
        
        request = cron_pb2.GetCoinsDataRequest(dolar=dolar,euro=euro,uf=uf,time=epoch_time)
        result2 = stub.GetCoinsData(request)
        print(result2.msn)
if __name__=='__main__':
    main()

#print ("Our test works at", datetime.now())