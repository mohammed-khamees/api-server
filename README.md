# api-server

[heroku](https://khamees-api-server.herokuapp.com/api)

[PR](https://github.com/mohammed-khamees/api-server/pull/1)

## how to work with this repo:

1. `npm init -y`
2. `npm i express dotenv cors morgan mongoose`
3. `npm i -D supertest jest @code-fellows/supergoose`

**On the `package.json` change the `script` to**

```
"scripts": {
    "start": "node index.js",
    "test": "jest --verbose --coverage"
}

```

![UML](UML2.png)
