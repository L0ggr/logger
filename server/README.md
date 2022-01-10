# Logger Server

## Development environment

Have local MongoDB instance.
Default routes and credentials.

Terminal:

> `npm install`  
> `npm start`

VSCode(debug):

> `Runner(Ctrl + Shift + D)` > `Backend Serve`

### Environment Variables

```
MONGO_URL = Database URL
```

## Architecture

Refer to:  
[Apollo Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/)

**`import/require`** basics:  
`./folder/index.ts`

```js
export * from "path";
export const MyVar = "value";
// export default
```

`./file.ts`

```js
// reads index.ts/js in a folder
import { myVar } from "./folder";
```

**Folder**:

- `orm`: Database to language object models
- `services`: interaction implementation
- `types`: typescript function parameters typing
- `interface`: graphql typedefs, resolvers
