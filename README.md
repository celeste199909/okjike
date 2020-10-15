## How to run

### clone

```bash
git clone https://github.com/iceream/okjike.git
```

```bash
cd okjike-master
```

### run frontend

```bash
npm install
npm run serve
```

### run backend 

- the project use sequelize;
- before run the backend, you need config you mysql database, see more detail in api/configs folder;
- bout sequelize's config in `.sequelizerc` file;
- database models in api/models, if you want not to create table by youself, you can opne `follows.sync({force: true})` in the three models file.

```bash
npm install
nodemon
# if you have not install nodemon, you can install it by `npm i nodemon -g`
```
