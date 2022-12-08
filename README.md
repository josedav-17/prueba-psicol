# prueba-psicol

vgit clone https://github.com/josedav-17/prueba-psicol.git

composer install

npm install(no se ejecute en el contenedor docker)
editar base de datos en archivo .env
APP_URL=YOUR_APP_URL
.
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
php artisan key:generate
 php artisan migrate:fresh --seed
 or 
 php artisan migrate
 php artisan db:seed
php artisan storage:link
