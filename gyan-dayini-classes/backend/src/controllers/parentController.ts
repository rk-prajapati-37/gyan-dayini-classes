import { Request, Response } from 'express';
import Parent from '../models/parent';

// Create a new parent profile
export const createParent = async (req: Request, res: Response) => {
    try {
        const parent = new Parent(req.body);
        await parent.save();
        res.status(201).json(parent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all parents
export const getAllParents = async (req: Request, res: Response) => {
    try {
        const parents = await Parent.find();
        res.status(200).json(parents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a parent by ID
export const getParentById = async (req: Request, res: Response) => {
    try {
        const parent = await Parent.findById(req.params.id);
        if (!parent) return res.status(404).json({ message: 'Parent not found' });
        res.status(200).json(parent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a parent profile
export const updateParent = async (req: Request, res: Response) => {
    try {
        const parent = await Parent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!parent) return res.status(404).json({ message: 'Parent not found' });
        res.status(200).json(parent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a parent profile
export const deleteParent = async (req: Request, res: Response) => {
    try {
        const parent = await Parent.findByIdAndDelete(req.params.id);
        if (!parent) return res.status(404).json({ message: 'Parent not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};