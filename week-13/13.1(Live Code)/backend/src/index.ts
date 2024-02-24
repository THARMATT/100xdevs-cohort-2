import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,JWT_SECRET: string,
	}
}>();

const prisma = new PrismaClient({
  //@ts-ignore
  datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())
app.post('/api/v1/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}
// @ts-ignore
	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})

app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
   // @ts-ignore
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})
app.post('/api/v1/blog', (c) => {
  return c.text('signin route!')
})
app.put('/api/v1/blog/:id', (c) => {
  const id=c.req.param('id')
  console.log(id);
  return c.text('get blog route')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})


export default app
//postgresql://nigamsharma23112001:o8vk7QgBRcGj@ep-nameless-block-a5loy6na-pooler.us-east-2.aws.neon.tech/meduim?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiODQzYjcyOTAtZTZiMC00NDZmLTllODQtZTlmMjVhMmEzYzQwIiwidGVuYW50X2lkIjoiOWQwNzc3MjA3NGViM2M4MTE3ZTQ5ZGU2ZDllYzI3NjFiYjZjN2EyOWY1YzVkZDM5YTg5ZmE3ZTdjOGNhNTc1YSIsImludGVybmFsX3NlY3JldCI6IjhlZjY3ODI0LTc4YTgtNGQ2ZC05ODAwLTc2MjBhODdiNTA0MiJ9.jI39R5knLHgxl1ta5GqYDIhi0ADwKSOrb9spRLiEP2Q"