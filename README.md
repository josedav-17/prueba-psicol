# prueba-psicol

vgit clone https://github.com/josedav-17/prueba-psicol.git

#composer install

#npm install(no se ejecute en el contenedor docker)


editar base de datos en archivo .env
APP_URL=YOUR_APP_URL
.
DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=laravel

DB_USERNAME=root

DB_PASSWORD=


#php artisan key:generate
 php artisan migrate:fresh --seed
 or 
 php artisan migrate
 php artisan db:seed
php artisan storage:link

##Api´s para crear, editar, modificar y eliminar.


#http://127.0.0.1:8000/api/clientes
{
        "id": 2,
        "nombre": "prueba",
        "apellido": "prueba&email",
        "cedula": "121312",
        "telefono": "12123",
        "correo": "prueba@email.com",
        "direccion": "cae 232"
 }

http://127.0.0.1:8000/api/reservas
{
 "id_reserva": "1",
 "id_boleteria": 2,
 }

http://127.0.0.1:8000/api/boleteria
{
        "evento": "prueba6",
        "fecha": "2/22/21",
        "hora": "12:00",
        "lugar": "prueba",
        "precio": 1312,
        "cantidad": "1"
}
