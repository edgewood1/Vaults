# Next.js ecosystem



1. App
	1. Client
		1. UI components
			1. React
			2. Tailwind
			3. Format.js
		2. Client state
			1. Zustand 
			2. Context
		3. Routing
			1. File-system
			2. App/page router
			3. Rendering
	4. Backend/service layer
		1. Business logic
			1. BFF/edge - next api routes
			2. Core server (node rest/graphQL
			3. Jobs (background workers/queues)
		2. Data
			1. Persistent DB (Postgres + ORM)
			2. Ephemeral (redis/cache)
				1. Redis- shared cache
				2. In-memory (variables in cache)
			3. Assets (S3/blob storage)
				1. Storing large images (and save link in db)
4. Tooling/devops
	1. Creating (Dev) (code created)
		1. Local env (docker/makefiles)
		2. Standards (linting / typescript)
		3. Testing (jest/playwright)
	2. Pipeline (CI/CD) (how code moves)
		1. Integration (GH actions - building)
		2. Delivery (Vercel-awsDeploy)
		3. Versioning (Git/SemVer)
	3. Infrastructure (where code lives)
		1. Compute (Serverless / containers)
		2. Network (CDN / Edge caching)
		3. Security (firewalls / WAF)
4. Health/observability
	1. Metrics - is it healthy?
		1. Performance (latency/CPU usage)
		2. Business (signups per min)
		3. Uptime (heartbeat checks)
	2. Logs - what happened?
		1. Access Logs (who hit the API)
		2. App logs (debug/info message)
		3. Audit trails (security records)
	3. Traces (where did it break)
		1. Error tracking (sentry stack traces)
		2. Distributed tracing (request flow)
		3. Alerting (pager duty / slack)


Deploy tiers 
1. CDN - closes to user where static files (images / css) live.  Cloudflare, Vercel Edge - bug in UI? 
2. BFF - next.js server - build fails?
3. Node server - server slow? 
4. DB
