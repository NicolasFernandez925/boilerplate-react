 <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="100">    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg" alt="TypeScript Logo" width="100"/>


# Boilerplate de React con TypeScript 

Este proyecto proporciona una base sólida y organizada para comenzar una aplicación de React utilizando TypeScript para una mayor legibilidad y mantenibilidad del código. Se han aplicado diversas herramientas y buenas prácticas para mejorar la calidad y eficiencia del desarrollo.

## Instalación de dependencias :package: 
Antes de comenzar a trabajar en el proyecto, es necesario instalar las dependencias. Para ello, se utiliza el manejador de paquetes yarn. Ejecuta el siguiente comando en la terminal:

```
yarn install
```

## Inicio de la aplicación 🚀
Una vez instaladas las dependencias, puedes levantar la aplicación con el siguiente comando:

```
yarn start
```

La aplicación se abrirá en el navegador en la dirección http://localhost:3000/.

## Autoformateador y calidad de código ⚙️
Para mantener la calidad y legibilidad del código, se han implementado diversas herramientas y buenas prácticas, tales como:

- **Prettier**: para el formateo automático del código.
- **ESLint**: para detectar y corregir problemas en el código.
- **husky**: para ejecutar ESLint y Prettier antes de realizar un commit.

De esta manera, se garantiza que el código subido al repositorio sea limpio y de calidad.

## Tipos de datos con TypeScript <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg" alt="TypeScript Logo" width="25"/>
Se utiliza TypeScript para mejorar la legibilidad y mantenibilidad del código, permitiendo la definición de tipos de datos en las variables, funciones, etc.

## Pruebas unitarias y de integración ✅
Para garantizar el correcto funcionamiento de la aplicación, se han instalado diversas herramientas para realizar test unitarios y de integración:

- **jest-ts**
- **react-testing-library**

Puedes ejecutar todas las pruebas con el siguiente comando:

```
yarn run test:w
```

Esto ejecutará todos los archivos con extensión .spec o .test dentro de la carpeta src y generará una carpeta `coverage`  en el root de la aplicación mostrando en detalle el porcentaje de líneas/ramas cubiertas por las pruebas.
