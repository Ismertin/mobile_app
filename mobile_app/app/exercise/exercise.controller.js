import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body
	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath
		}
	})
	res.json(exercise)
})

//@desc GET exercises
//@descr GET /api/exercises
//@access Private

export const getExercises = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany()

	res.json(exercises)
})
