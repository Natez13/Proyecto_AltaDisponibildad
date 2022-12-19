
from flask import Flask, jsonify, request
from flask_cors import CORS
import pymongo
from pymongo import MongoClient
import requests
from bs4 import BeautifulSoup
import re
import time

number_pattern = "^\\d+$"
re.match(number_pattern, '42') # Returns Match object
re.match(number_pattern, 'notanumber') # Returns None
# Extract number from a string
number_extract_pattern = "\\d+"


app = Flask(__name__)
CORS(app)
def set_FirstData():
    # enter city name
    city = "Santiago Chile"
    
    # creating url and requests instance
    url = "https://www.meteored.cl/tiempo-en_Santiago+de+Chile-America+Sur-Chile-Region+Metropolitana+de+Santiago-SCEL-1-18578.html"
    html = requests.get(url).content
    
    # getting raw data
    soup = BeautifulSoup(html, 'html.parser')
    temp = soup.find('span', attrs={'class': 'dato-temperatura changeUnitT'}).text
    temp = re.findall(number_extract_pattern, temp)[0]
    epoch_time = str(int(time.time()))

    # creating url and requests instance
    url = "https://www.google.cl/search?q="+"dolar clp&gl=cl&hl=es"
    url2 = "https://www.google.cl/search?q="+"euro clp&gl=cl&hl=es"
    url3 = "https://www.google.cl/search?q="+"uf a clp&gl=cl&hl=es"
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

    db = get_db()
    db.divisa.insert_one({'dolar':dolar,'UF':uf,'euro':euro,'time':epoch_time})
    db.clima.insert_one({'temp':temp, 'time':epoch_time})
    

def get_db():
    client = MongoClient(host='db',
                         port=27017, 
                         username='root', 
                         password='pass',
                        authSource="admin")
    db = client["animal_db"]
    return db

@app.route('/')
def ping_server():
    return "Welcome to Chile Today API REST server"

@app.route('/weather')
def weather():
   
    # enter city name
    city = "Santiago Chile"
    
    # creating url and requests instance
    url = "https://www.google.cl/search?q="+"clima"+city
    html = requests.get(url).content
    
    # getting raw data
    soup = BeautifulSoup(html, 'html.parser')
    temp = soup.find('div', attrs={'class': 'BNeawe iBp4i AP7Wnd'}).text
    temp = re.findall(number_extract_pattern, temp)[0]
    epoch_time = str(int(time.time()))
    
    db = get_db()
    db.clima.insert_one({'temp':temp, 'time':epoch_time})
    # printing all data
    print("Temperature is", temp)
    return jsonify({'Temp':temp,'time':epoch_time})

@app.route('/divisas')
def divisas():
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

    db = get_db()
    db.divisa.insert_one({'dolar':dolar,'UF':uf,'euro':euro,'time':epoch_time})
    
    # printing all data
    print("dolar", dolar)
    print("uf: ", uf)
    print("euro: ", euro)

    
    
    response = jsonify({'dolar':dolar,'uf':uf,'euro':euro,'time':epoch_time})
    return response


@app.route('/get_data')
def get_stored_data():
    db = get_db()
    _clima = db.clima.find().sort([('time', -1)]).limit(1)
    climas = [{ "time": clima["time"], "clima": clima["temp"]} for clima in _clima]
    _divisa = db.divisa.find().sort([('time', -1)]).limit(1)
    divisas = [{ "dolar": divisa["dolar"], "UF": divisa["UF"], "Euro": divisa["euro"],"time": divisa["time"]} for divisa in _divisa]
    return jsonify({"climas": climas,"divisas": divisas})

'''
@app.route('/get_divisa')
def get_stored_divisa():
    db = get_db()
    _divisa = db.divisa.find().sort([('time', -1)]).limit(1)
    divisas = [{ "dolar": divisa["dolar"], "UF": divisa["UF"], "Euro": divisa["euro"]} for divisa in _divisa]
    return jsonify({"divisas": divisas})

'''

if __name__=='__main__':
    set_FirstData()
    app.run(debug=True,host="0.0.0.0", port=5000)