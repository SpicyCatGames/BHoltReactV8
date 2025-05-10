```
npm install --save-dev typescript @types/react @types/react-dom
```

Create tsconfig.json with:
```
npx tsc --init
```
Then replace with this
```
#### 📄 `tsconfig.json`

json

CopyEdit

`{   "compilerOptions": {     "target": "ESNext",     "useDefineForClassFields": true,     "lib": ["DOM", "DOM.Iterable", "ESNext"],     "allowJs": true,     "skipLibCheck": true,     "esModuleInterop": true,     "allowSyntheticDefaultImports": true,     "strict": true,     "forceConsistentCasingInFileNames": true,     "module": "ESNext",     "moduleResolution": "Node",     "resolveJsonModule": true,     "isolatedModules": true,     "noEmit": true,     "jsx": "react-jsx"   },   "include": ["src"],   "exclude": ["node_modules", "dist"] }`

---

### Why these options?

- `"strict": true` enables all strict type checks.
    
- `"jsx": "react-jsx"` enables the new JSX transform (React 17+).
    
- `"noEmit": true` disables output; Vite handles compilation.
    
- `"allowJs": true` lets you gradually migrate JS files to TS.
```