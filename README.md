Reddit Top Posts Client 

#### Developmet

Install yarn globally

``` bash
$ npm install -g yarn
```

Install project dependencies

``` bash
$ yarn
```

Run it locally

``` bash
$ yarn start
```

#### Tests

Run jest tests.

``` bash
$ yarn test
```

#### Building

Generate build folder

``` bash
$ yarn build
```

#### Deploy

- You will need permission to deploy to this firebase app

Generate build folder + deploy to firebase

``` bash
$ yarn deploy
```

#### TO DOs:

- Write more tests and ones that test functionalities of the components.
- Add error handling for the application.
- Add linter rules.
- Parse and filter data comming from reddit api to keep in the store only the relevant stuff.
- Use better persistance for readed/dismissed posts.