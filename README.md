#Procedimiento de instalación local
#No estan importados los archivos de node_modules por lo cual ya deben estar instalados en tu entorno
##Crear e Importar la base de datos
Crear la base de datos messages en tu MySQL o phpmyadmin
CREATE DATABASE messages;
-Ahora importamos el archivo sql que se encuentra en este proyecto messages.sql dentro de phpmyadmin o abrimos en un bloc de notas para copiar las tablas y datos de prueba

##Configurar los puertos para ejecutar en local
en la raíz de la carpeta backend busca el archivo .env , configura el puerto local a tu modo o solo utiliza el localhost, ejemplo:
DB_HOST=localhost
DB_PORT=3308
DB_USER=root
DB_PASSWORD=
DB_NAME=messages

haz lo mismo para otros archivos como serverless.yml , guíate de los archivos


##PRIMERO Iniciar proyecto backend:
`cd backend`             -->Navega hasta la carpeta backend
`serverless offline`     -->Inicia el servicio serverless en modo offline



##LUEGO Iniciar proyecto frontend:
`cd frontend`           -->Navega hasta la carpeta frontend
`ng serve`              -->Inicia el front con angular en su última version


##Endpoints y Operaciones OPENAPI

POST /campaigns
Descripción: Permite crear una nueva campaña.
RequestBody: Se espera un objeto JSON que cumpla con el esquema definido en #/components/schemas/Campaign.
Respuestas:
201: Indica que la campaña se ha creado exitosamente.

GET /campaigns
Descripción: Permite listar campañas.
Parámetros de Consulta:
startDate (opcional): Filtra las campañas que comienzan después de esta fecha.
endDate (opcional): Filtra las campañas que terminan antes de esta fecha.
Respuestas:
200: Devuelve una lista de campañas según los criterios de filtrado especificados.

GET /campaigns/{campaignId}/messages
Descripción: Permite listar los mensajes de una campaña específica.
Parámetros de Ruta:
campaignId: Identificador único de la campaña de la cual se desean listar los mensajes.
Respuestas:
200: Devuelve una lista de mensajes asociados a la campaña especificada por campaignId.


##AL INGRESAR DATOS EN EL FORMULARIO PARA CREAR CAMPAÑAS
Puede inspeccionar la consola del navegador y ver un arreglo donde correctamente se agrega los datos y hay sincronía entre backend y frontend
#INGRESAR ID=1 para las pruebas
