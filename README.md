### safe-get

Simple function to get nested object values
The module is shipped as 
- ES module
- UMD Bundle
- CJS Bundle

```
npm install @eatsjobs/safe-get --save
// OR
yarn add @eatsjobs/safe-get

// in code you can require it
import safeGet from '@eatsjobs/safe-get'
const User = { name: 'John', { address: { zip: '0000' } } }

const zipCode = safeGet(User, [ 'address', 'zip' ], 'myDefaultValue');

// or in 2000 old fashion way
<script src="https://unpkg.com/@eatsjobs/safe-get@1.1.0/lib/safe-get.umd.js"></script>
```

```
/**
 * Check if the object has the nested keys list
 * @example
 * safeGet({a:{b:[1,2,3]}}, ["a", "b", 2])); // returns 3
 * safeGet({a:{b:[1,2,3]}}),"a.b.0"); // returns the b[0]
 * @export
 * @param {Object} object - the object to be checked
 * @param {Array|String} keys - a string point separated or a list of string keys
 * @param {any} [defaultReturn=null]
 * @returns {any|null} returns any value for that key or null if the key is undefined
 */
```