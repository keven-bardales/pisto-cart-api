Bienvenidos a pisto-cart-api

Esta api se encarga de servir la informacion necesaria para la aplicacion, provee lo que son los usuarios, categorias, productos etc.
A futuro se comenzara a implementar de una mejor manera la logica de negocio del proyecto, por los momentos se ha avanzado con cruds.

La estructura de el proyecta esta basada en Clean architecture y DDD Domain Driven Design.

Estructura Basica:

1. api : Esta es nuestra capa de presentacion o mejor dicho lo que vamos a exponer a la interfaz, aca podremos encontrar controladores, esquemas de validacion, middlewares y las rutas expuestas.

2. config: Encontramos cualquier tipo de configuracion necesaria para el funcionamiento del proyecto en este caso variables de entorno.

3.data: cualquier conexion o configuracion necesaria con nuestro origen de los datos, en este caso se encuentra el cliente de la orm a utlizar Prisma.

4. domain: es la capa mas importante de la aplicacion en ella se encuentran todas las entidades, dtos, enums, repositorios, datasources y entidades. La idea de esta capa es abstraer lo mas que se pueda la dependencia del proyecto tanto del framework o la base de datos por ejemplo. Aca podremos tener todos los casos de uso para cada una de las features que el proyecto contendra.

5. infrastructure: En esta capa vamos a encontrar las implementaciones de nuestras interfaces definidas en nuestra capa de dominio. La idea de esto es separar responsabilidades para la facilidad de los cambios. Nuestro dominio no necesita saber cual es la implementacion de donde obtiene la informacion el solo necesita saber que llama a un repositorio el cual llama a un datasource que le brinda la informacion. Lo maravilloso de esto es que en cualquier momento necesitemos hacer un cambio de base de datos por ejemplo si el requerimiento del proyecto cambiase. Podriamos hacerlo con una mayor facilidad.

Bien ahora para instalar el proyecto es necesario tener pnpm instalado es nuestro manejador de paquetes en este caso.

Luego simplemente es necesario instalar las dependencias con pnpm install

Luego hay que configurar el archivo env con la conexion de postgres para prisma:
DATABASE_URL="postgres://dbUser:host/dbName"

Luego es necesario realizar las migraciones con pnpm dlx prisma migrate dev

Por ultimo es necesario correr el proyecto con pnpm run start
