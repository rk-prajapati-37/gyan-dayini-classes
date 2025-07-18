import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import studentRoutes from './routes/studentRoutes';
import parentRoutes from './routes/parentRoutes';
import teacherRoutes from './routes/teacherRoutes';
import authMiddleware from './middleware/authMiddleware';

const app = express();

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/parents', parentRoutes);
app.use('/api/teachers', teacherRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/gyan-dayini-classes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});