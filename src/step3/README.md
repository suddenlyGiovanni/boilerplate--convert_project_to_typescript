# Step 3 - Squash explicit anys, enable strict mode

- Incrementally, in small chunks...
- Enable strict mode

```json
  "strict": true,               /* Enable all strict type-checking options. */
  "strictNullChecks": true,     /* Enable strict null checks. */
  "strictFunctionTypes": true,  /* Enable strict checking of function types. */
  "strictBindCallApply": true,  /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
```

- Replace explicit anys with more appropriate types
- Try really hard to avoid unsafe casts (`as`)

> MAKE A PULL REQUEST!

<<-[Start](/README.md) || <-[Back](/src/step2/README.md) |

Kudos to [Mike North](https://github.com/mike-north)
