import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// @descr Auth user
// @route POST /api/user/login
// @access Public

export const authUser = asyncHandler(async (req, res) => {
    const user = await prisma.user.findMany({
        where: {
            password: 'asda'
        },
        res.json(user)
    })
