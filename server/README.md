# Logger Server

## ENV

NOTE: the .env should be in the `server` folder

| KEY | VALUE |
|-|-|
| DB_MONGO_URL | Ex: mongodb://localhost:27017/ |
| DB_MONGO_DATABASE | Ex: test |


## Development environment

Have local MongoDB instance.
Default routes and credentials.

Terminal:  
> `npm install`  
> `npm start` 

VSCode(debug):  
> `Runner(Ctrl + Shift + D)` > `Backend Serve`

## Architecture

Refer to:  
[Apollo Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/)

__`import/require`__ basics:  
`./folder/index.ts`
```js
export * from "path"
export const MyVar = "value";
// export default 
```
`./file.ts`
```js
// reads index.ts/js in a folder
import { myVar } from "./folder";
```

__Folder__:
- `orm`: Database to language object models
- `services`: interaction implementation
- `types`: typescript function parameters typing
- `interface`: graphql typedefs, resolvers
