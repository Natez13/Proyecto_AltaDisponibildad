#from datetime import datetime
import grpc
from concurrent import futures
import cron_pb2
import cron_pb2_grpc
import pymongo
from pymongo import MongoClient
import requests

def get_db():
    client = MongoClient(host='db',
                         port=27017, 
                         username='root', 
                         password='pass',
                        authSource="admin")
    db = client["animal_db"]
    return db

class Data(cron_pb2_grpc.DataServicer):
    def GetWeatherData(self, request, context):
        db = get_db()
        db.clima.insert_one({'temp':request.temp, 'time':request.time})
        response = cron_pb2.ReturnMessage(msn="WEATHER Insert Temp: "+request.temp+" Time: "+request.time)
        return response
    def GetCoinsData(self, request, context):
        db = get_db()
        db.divisa.insert_one({'dolar':request.dolar,'UF':request.uf,'euro':request.euro,'time':request.time})
        response = cron_pb2.ReturnMessage(msn="WEATHER Insert dolar: "+request.dolar+" UF: "+request.uf+" euro: "+request.euro+" time: "+request.time)
        return response



def main():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    cron_pb2_grpc.add_DataServicer_to_server(Data(),server)

    server.add_insecure_port('[::]:8050')
    server.start()
    print('Server para el Cronjob Arriba')
    server.wait_for_termination()
    #print('HOLA')

if __name__=='__main__':
    main()
