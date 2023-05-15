import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

// @desc    create new workout
// @route   GET /api/workouts
// @access  Private

export const createNewWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body
	const workout = await prisma.exercise.create({
		data: {
			name,
			exercises: {
				connect: exerciseIds.map(id => ({ id: +id }))
			}
		}
	})
	res.json(workout)
})

//@desc GET exercises
//@descr GET /api/exercises
//@access Private

export const getWorkout = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			exercises: true
		}
	})

	const minutes = Math.ceil(workout.exercises.length * 3, 7)

	res.json({ ...workouts, minutes })
})

export const getWorkouts = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findMany({
		include: {
			exercises: true
		}
	})
	res.json(workouts)
}) 

//@desc update workout
//@descr patch /api/workouts/:id
//@access Private

export const updateWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body
	try {
		const workout = await prisma.workout.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				exercises: {
					connect: exerciseIds
				}
			}
		})
		res.json(workout)
	} catch (error) {
		res.status(400)
		throw new Error('Exercise not found')
	}
})

//@desc delete exercises
//@descr delete  /api/exercises/:id
//@access Private

export const deleteWorkout = asyncHandler(async (req, res) => {
	try {
		const workout = await prisma.workout.delete({
			where: {
				id: +req.params.id
			}
		})
		res.json({ message: 'Workout deleted' })
	} catch (error) {
		res.status(404)
		throw new Error('Workout not found')
	}
})
