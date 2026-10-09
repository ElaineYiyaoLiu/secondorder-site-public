SecondOrder bilingual home page, v0.4.

Scenario, Markets, Procedure, Homology and Stock open inside the site and deploy independently. Stock is the fifth full-width module.

Run `npm run build` to generate `dist`.

Stock currently uses https://secondorder-stock-public.vercel.app for both the embedded workspace and standalone link. Its custom domain is registered in Vercel but awaits the Cloudflare DNS CNAME `stock` → `6566be7da1f8802b.vercel-dns-017.com` (DNS only). Switch the Stock URL only after the domain is verified.

Test is a separate homology-led research workspace at `/test`. Homology, Stock and Test have parallel home-page entries; the existing Stock and Homology apps retain their deployments.

Test currently uses https://secondorder-test-public.vercel.app. Its custom domain awaits the Cloudflare DNS CNAME `test` → `0d1515ac80d710d1.vercel-dns-017.com` (DNS only).
