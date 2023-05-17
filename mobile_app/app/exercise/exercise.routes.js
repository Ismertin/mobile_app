import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { createNewExercise, getExercises } from './exercise.controller.js'
import {createNewExerciseLog} from "./log/exercise.log.js";

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercises)

router.route('/log/:exerciseId').post(protect, createNewExerciseLog)

export default router
