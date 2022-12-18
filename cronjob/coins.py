import grpc
import cron_pb2
import cron_pb2_grpc
import requests
from bs4 import BeautifulSoup
import re
import time

number_pattern = "^\\d+$"
re.match(number_pattern, '42') # Returns Match object
re.match(number_pattern, 'notanumber') # Returns None
# Extract number from a string
number_extract_pattern = "\\d+"

def main():
    with grpc.insecure_channel('backend:8050') as channel:
        stub = cron_pb2_grpc.DataStub(channel)
        # enter city name
        
        # creating url and requests instance
        url = "https://www.google.cl/search?q="+"dolar clp&gl=cl&hl=es"
        url2 = "https://www.google.cl/search?q="+"euro clp&gl=cl&hl=es"
        url3 = "https://www.google.cl/search?q="+"uf clp&gl=cl&hl=es"
        #url20 = "https://si3.bcentral.cl/indicadoressiete/secure/indicadoresdiarios.aspx"
        
        html = requests.get(url).content
        soup = BeautifulSoup(html, 'html.parser')
        dolar_arr = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
        dolar = re.findall(number_extract_pattern, dolar_arr)[0]
        html = requests.get(url2).content
        soup = BeautifulSoup(html, 'html.parser')
        euro_arr = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
        euro = re.findall(number_extract_pattern, euro_arr)[0]
        html = requests.get(url3).content
        soup = BeautifulSoup(html, 'html.parser')
        uf_arr = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
        uf = re.findall(number_extract_pattern, uf_arr)[0]
        epoch_time = str(int(time.time()))
        
        request = cron_pb2.GetCoinsDataRequest(dolar=dolar,euro=euro,uf=uf,time=epoch_time)
        result = stub.GetCoinsData(request)
        print(result.msn)
if __name__=='__main__':
    main()

#print ("Our test works at", datetime.now())