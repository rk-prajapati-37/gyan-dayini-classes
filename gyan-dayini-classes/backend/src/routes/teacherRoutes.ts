import { Router } from 'express';
import { 
    createTeacher, 
    getTeachers, 
    getTeacherById, 
    updateTeacher, 
    deleteTeacher 
} from '../controllers/teacherController';

const router = Router();

// Route to create a new teacher
router.post('/', createTeacher);

// Route to get all teachers
router.get('/', getTeachers);

// Route to get a teacher by ID
router.get('/:id', getTeacherById);

// Route to update a teacher by ID
router.put('/:id', updateTeacher);

// Route to delete a teacher by ID
router.delete('/:id', deleteTeacher);

export default router;