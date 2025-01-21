# easy-ts

`easy-ts` is a TypeScript utility library that simplifies coding by providing commonly needed functions and types.

## Installation

```bash
npm install https://github.com/StumbDev/easy-ts.git
```

## Usage

Async Utilities
```typescript
import { debounce, retry } from "easy-ts";

const log = debounce((msg) => console.log(msg), 500);
log("Hello");

const fetchData = async () => { /* fetch logic */ };
await retry(fetchData, 3);
```

String Utilities

```typescript
import { capitalize, snakeToCamel } from "easy-ts";

console.log(capitalize("hello")); // "Hello"
console.log(snakeToCamel("snake_case")); // "snakeCase"
```

Type Utilities

```typescript
import { Nullable, PartialExcept } from "easy-ts";

type User = { id: number; name: string; age?: number };
const user: PartialExcept<User, "id"> = { id: 1 }; // Requires id
const name: Nullable<string> = null;
```
### License
MIT


### Building the Library
Run the following commands:
1. Install dependencies: `pnpm install`
2. Build the library: `pnpm run build`
