import mongoose from 'mongoose';

const SubjectSchema = mongoose.Schema({
   field: String, 
   value: {
        type: String,
        required: [true, 'Subject is required.'],
        unique: true
    }
}, {
    timestamps: true
});

const Subject = mongoose.model('subject', SubjectSchema);
export default Subject;