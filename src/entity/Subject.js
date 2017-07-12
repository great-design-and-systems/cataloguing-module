import mongoose from 'mongoose';

const SubjectSchema = mongoose.Schema({
    subjectName: {
        type: String,
        required: [true, 'Subject is required.']
    },
    source: String,
    personalName: String,
    dates: String,
    fullName: String,
    workTitle: String,
    formSubdivision: String,
    generalSubdivision: String,
    chronologicalSubdivision: String,
    georaphicSubdivision: String
}, {
    timestamps: true
});

const Subject = mongoose.model('subject', SubjectSchema);
export default Subject;