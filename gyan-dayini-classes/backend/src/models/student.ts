import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'Parent',
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Student = model('Student', studentSchema);

export default Student;