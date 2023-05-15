import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	createNewWorkout,
	deleteWorkout,
	getWorkouts,
	getWorkout,
	updateWorkout
} from './workout.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewWorkout).get(protect, getWorkouts)

router
	.route('/:id')
	.put(protect, updateWorkout)
	.get(protect, getWorkout)
	.delete(protect, deleteWorkout)

export default router
