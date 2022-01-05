# Logger Server

## Development environment

Use PostgreSQL: uncomment/comment `orm/index.ts` `l.12`  
OR  
Use SQLITE: uncomment/comment `orm/index.ts` `l.10`

Terminal:  
> `npm install`  
> `npm start` 

VSCode(debug):  
> `Runner(Ctrl + Shift + D)` > `Backend Serve`

## Architecture

Refer to:  
[Apollo Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/)  
[Sequelize Getting Started](https://sequelize.org/master/manual/model-basics.html)

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
