# React SSR with Module Fedration and NX

## local setup: 

```

pnpm i
pnpm nx serve store 
```

### NX CLI to add apps: 

```

npx nx g @nrwl/react:host HOSTAPP --ssr --remotes=REMOTEAPP1,REMOTEAPP2,REMOTEAPP3
npx nx g @nrwl/react:remote REMOTEAPP4 --host=HOSTAPP
```