# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
sudo docker-compose up -d
```

- el -d significa **detached**

## Mongo DB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## configurar las variables de entorno

renombrar el archivo **.env.template**

## Lenar la base de datos con datos de prueba

ir al endpoint /api/seed
