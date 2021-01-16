# is-object

is-object package for Deno. Checks whether a given value is an object.

## Usage

```typescript
import isObject from "https://github.com/piyush-bhatt/is-object/raw/main/mod.ts";

const isObjectAnObject = isObject({}); // true
const isArrayAnObject = isObject([]); // true
const isNumberAnObject = isObject(35); // false
const isStringAnObject = isObject('foo'); // false
const isBooleanAnObject = isObject(true); // false
const isNullAnObject = isObject(null); // false
const isUndefinedAnObject = isObject(undefined); // false
const isFunctionAnObject = isObject(() => {}); // false
```

## MIT Licensed
