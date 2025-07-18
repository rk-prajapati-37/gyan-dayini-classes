import { Router } from 'express';
import { 
    createParent, 
    getParent, 
    updateParent, 
    deleteParent 
} from '../controllers/parentController';

const router = Router();

// Route to create a new parent
router.post('/', createParent);

// Route to get a parent by ID
router.get('/:id', getParent);

// Route to update a parent by ID
router.put('/:id', updateParent);

// Route to delete a parent by ID
router.delete('/:id', deleteParent);

export default router;