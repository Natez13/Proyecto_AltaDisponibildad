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

        city = "Santiago Chile"

        # creating url and requests instance
        url = "https://www.meteored.cl/tiempo-en_Santiago+de+Chile-America+Sur-Chile-Region+Metropolitana+de+Santiago-SCEL-1-18578.html"
        html = requests.get(url).content

        # getting raw data
        soup = BeautifulSoup(html, 'html.parser')
        temparature = soup.find('div', attrs={'span': 'dato-temperatura changeUnitT'}).text
        temparature = re.findall(number_extract_pattern, temparature)[0]
        epoch_time = str(int(time.time()))
        print('SEND: ',temparature,' AND ',epoch_time)
        request = cron_pb2.GetWeatherDataRequest(temp=temparature,time=epoch_time)
        result = stub.GetWeatherData(request)
        print(result.msn)
if __name__=='__main__':
    main()

#print ("Our test works at", datetime.now())