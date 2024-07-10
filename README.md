<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
  <a href="https://nextjs.org" target="blank"><img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="Next Logo" width="150" /></a>
</p>

# Admin ToDos

1. Moverse a la carpeta `backend` y levantar la base de datos de desarrollo

```
cd backend
```

```
docker-compose up -d
```

2. Crear una copia del archivo `.env.example` a `.env` y completarlo con las variables de entorno

3. Levantar el backend en desarrollo

```
yarn dev
```

4. Ejecutar el seed para llenar la base de datos local con data de ejemplo

```
http://localhost:4000/api/v1/seed
```
