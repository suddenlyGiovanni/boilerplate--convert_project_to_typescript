# boilerplate--convert_project_to_typescript

## What not to do

- Functional changes at the same time
- Attempt this with low test coverage
- Let the perfect be the enemy of the good
- Forget to add test for your types
- Publish types for consumer use while they're in a "weak" state

## [Step 1](/src/step1/README.md) - Compiling in "loose mode"

- Start with test passing
- Rename all `.js` to `.ts`, allowing implicit any
- Fix only things that are not type-checking, or causing compile errors
- Be careful to avoid changing behavior
- Get the test passing again

> MAKE A PULL REQUEST!

## [Step 2](/src/step2/README.md) - Explicit Any

- Start with tests passing
- Ban implicit any `"noImplicitAny": true`
- Where possible, provide a specific and appropriate type
  - Import types for dependencies from [DefinitelyTyped](http://definitelytyped.org/)
  - otherwise **_explicit_** `any`
- Get the tests passing again

> MAKE A PULL REQUEST!

## [Step 3](/src/step3/README.md) - Squash explicit anys, enable strict mode

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

[Next Step](/src/step2/README.md) ->

Kudos to [Mike North](https://github.com/mike-north)
