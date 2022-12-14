# Landing - Angular

Este en proyecto está la landing de un producto, el cual tiene toda la información necesaria de lanzamiento.

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Licencia](#licencia)
- [Credits](#credits)

## DevOps

![DevOps](https://i.imgur.com/nou6qXe.png)

## Instalación

1. Hacer fork de este proyecto en tu espacio personal
1. Clonar el repositorio desde tu espacio personal en tu computadora
1. Instalar dependencias, con el comando `npm install`
1. Comprobar ambiente, con el comando `ng serve`

## Configuración

El proyecto ya viene con la configuración por defecto que maneja Angular, así:

```
.
├── README.md
├── angular.json
├── dist
├── karma.conf.js
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── app
│   ├── assets
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── scss
│   ├── styles.scss
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

El sitio  usa sass para los estilos donde se llama el archivo principal `src/app/styles.scss`,  y todas las imágenes  en `src/assets/images/*`.

```
.
├── app
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── components
│   └── pages
├── assets
│   └── images
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── scss
│   ├── animate.scss
│   ├── base.scss
│   ├── layout.scss
│   ├── typography.scss
│   └── vars.scss
├── styles.scss
└── test.ts
```

La aplicación ya tiene componentes para cada sección de la siguiente manera:

```
.
├── app-routing.module.ts
├── app.component.html
├── app.component.ts
├── app.module.ts
├── components
│   ├── contact
│   ├── customers
│   ├── features
│   ├── hero
│   ├── integrations
│   ├── navbar
│   ├── snippets
│   ├── stats
│   └── summary
└── pages
    └── home
```

# GitHub Actions

.github/workflows/ci.yml

```yml
name: CI
on:
  push:
    branches: [ '*' ]
  pull_request:
    branches: [ main, master ]
jobs:
  linter:
  tests:
  lhci:
```

# Automatizar Linter

```yml
linter:
  name: Linter
  runs-on: ubuntu-latest
  steps:
    - name: Git clone
      uses: actions/checkout@v3
    - name: Setup NodeJs
      uses: actions/setup-node@v3
      with:
        node-version: 18.x
    - name: Install
      run: npm ci
    - name: Run Linter
      run: npm run lint
```


# Automatizar Unit tests

```yml
tests:
  name: Unit tests
  runs-on: ubuntu-latest
  steps:
    - name: Git clone
      uses: actions/checkout@v3
    - name: Setup NodeJs
      uses: actions/setup-node@v3
      with:
        node-version: 18.x
    - name: Install
      run: npm ci
    - name: Run Tests
      run: npm run test -- --no-watch --code-coverage --browsers=ChromeHeadlessCI
```

```sh
npm run test -- --no-watch --code-coverage --browsers=ChromeHeadlessCI
# "test:ci": "ng test --no-watch --code-coverage --browsers=ChromeHeadlessCI",
npm run test:ci
```



# Automatizar Lighthouse

```yml
lhci:
  name: Lighthouse
  runs-on: ubuntu-latest
  steps:
    - name: Git clone
      uses: actions/checkout@v3
    - name: Setup NodeJs
      uses: actions/setup-node@v3
      with:
        node-version: 18.x
    - name: Install
      run: npm ci
    - name: Run Lighthouse
      run: npm run lhci
```

## Licencia

Este proyecto se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Credits

- [Freebie: Oasis](https://tympanus.net/codrops/2018/04/20/freebie-oasis-jekyll-website-template/)

