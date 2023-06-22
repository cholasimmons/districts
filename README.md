# Districts

## About this Package

A small library about Zambian Provinces, Districts and Constituencies.

### Last Updated
Country data is updated when necessary and the timestamp is also updated in each country class, this can be accessed by calling `Zambia.timestamp()` which prints a console log and returns a date object.

#
## Installing Package

Run this command in the root of your project

```bash
pnpm add @justchola/districts

# or 

npm install @justchola/districts

```

and include the library in your project like so:

```typescript
import { Zambia } from '@justchola/districts';
```

upon typing the word `Zambia`, your IDE's intellisense should kick in to show you the available functions which should be self-explanatory.
Standard values across countries will be `Zambia.currency`, `Zambia.country` e.tc...