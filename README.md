Cloudflare worker for https://simmervig.org, using [hono](https://hono.dev).

Its a very simple worker, providing the validation token for BlueSky (served
from /.well-known/atproto-did) and redirecting everything else to
https://lucaspardue.com.

# Installation / Deployment

```
npm install
npm run dev
```

```
npm run deploy
```

# Verification

```
curl -v https://simmervig.org/.well-known/atproto-did
```