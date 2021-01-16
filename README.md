# is-object

is-object package for Deno. Checks whether a given value is an object.

## Usage

```typescript
import isObject from "https://github.com/piyush-bhatt/is-object/raw/main/mod.ts";

const isObject = isObject({}); // true
const isObject = isObject([]); // true
const isObject = isObject(35); // false
const isObject = isObject('foo'); // false
const isObject = isObject(true); // false
const isObject = isObject(null); // false
const isObject = isObject(undefined); // false
const isObject = isObject(() => {}); // false
```

## MIT Licensed
