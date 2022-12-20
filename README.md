# Proyecto_AltaDisponibildad
Proyecto Final de Alta Disponibilidad


Intregrantes: Lucas Almonacid & Benjamin Fernandez


La Aplicacion contiene:

- Conexion entre el backend y el cronjob a traves de GRPC
- Un Cronjob que obtiene los datos de temperatura de santiado de Chile cada 5 minutos y los dataos de diferenes divisas en pesos chilenos cada 20 minutos
- Un backend el cual recibe los datos del Cronjob y los guarda en una base de datos 
- Un Frontend el cual muestra los datos de temperatura y divisas, los cuales solicita cada 30 segundos a una API
- Una API REST la cual tiene una funcion que obtiene los valores mas actuales de la base de datos y los retorna
- Un Kuberenetes que levanta todos los servicios
- Github Actions que permiten realizar CI/CD en Google Cloud

- El servico esta subido a un Cluster de Kubernetes de Google Cloud
