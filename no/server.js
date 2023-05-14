import authRoutes from './app/auth/auth.routes.js'
import { prisma } from './app/prisma.js'
import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

async function main() {
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'))

		app.use(express.json())
		app.use(`/api/auth`, authRoutes)

		const PORT = process.env.PORT || 5000

		app.listen(PORT, () => {
			console.log(
				`Server running in ${process.env.NODE_ENV} on port ${PORT}`.blue.bold
			)
		})
	}
}
main().then(async () => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
})
