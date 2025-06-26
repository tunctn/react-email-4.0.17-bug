## Environment

- **react-email version**: 4.0.17
- **@react-email/components version**: 0.1.1  
- **@react-email/render version**: ^1.1.3
- **Node.js version**: v22.16.0
- **Package manager**: pnpm 10.12.4
- **Operating System**: macOS (darwin 24.5.0)

## Bug Description

The React Email dev server (`email dev`) fails to resolve TypeScript modules when using TypeScript path aliases (`@packages/*`), specifically when the target package exports modules without explicit `.ts` extensions.

## Error Message

```
[Error: ENOENT: no such file or directory, open '/Users/tunc/Projects/wust/scan-documents-app/packages/shared/src/utils/array.utils'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/tunc/Projects/wust/scan-documents-app/packages/shared/src/utils/array.utils'
}

    shutting down dev server
 ELIFECYCLE  Command failed with exit code 1.
```

## Reproduction Steps

1. **Set up a monorepo structure** with TypeScript path aliases:
   ```
   packages/
   ├── emails/
   │   ├── tsconfig.json (with path alias "@packages/*": ["../*"])
   │   ├── package.json (depends on "@packages/shared")
   │   └── src/emails/
   └── shared/
       └── src/
           ├── index.ts (exports * from "./utils")
           └── utils/
               ├── index.ts (exports * from "./array.utils")
               └── array.utils.ts
   ```

2. **Configure TypeScript** with path mapping:
   ```json
   // packages/emails/tsconfig.json
   {
     "extends": "@tools/tsconfig/nextjs.json",
     "compilerOptions": {
       "paths": {
         "@packages/*": ["../*"]
       }
     }
   }
   ```

3. **Import from the shared package** in email templates:
   ```typescript
   // packages/emails/src/lib/email-service.tsx
   import type { Locale } from "@packages/shared";
   ```

4. **Run the dev server**:
   ```bash
   pnpm dev
   # or: pnpm dev:4.0.16
   # or: pnpm dev:4.0.17
   ```

## Expected Behavior

The dev server should successfully resolve the `@packages/shared` import and follow the export chain to load `array.utils.ts`.

## Actual Behavior  

The dev server tries to open `/path/to/array.utils` (without `.ts` extension) and fails with `ENOENT: no such file or directory`.

## Root Cause Analysis

The issue appears to be in how React Email's dev server resolves modules through TypeScript path aliases. When it encounters:

```typescript
// packages/shared/src/utils/index.ts
export * from "./array.utils";
```

It tries to resolve `array.utils` literally instead of `array.utils.ts`, which suggests the module resolution isn't properly handling TypeScript file extensions in the context of path-mapped imports.


## Additional Context

- This appears to be specific to the dev server (`email dev`) and doesn't affect production builds
- The issue only manifests when using TypeScript path aliases pointing to packages with re-exported modules
- Regular imports (without path aliases) work fine
- The error specifically mentions missing `.ts` extension in the file path
