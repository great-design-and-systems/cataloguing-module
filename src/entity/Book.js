import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
    title : {
        type: String,
        required: [true, 'Book title is required.']
    },
    statementOfResponsibility: String,
    seriesTitle: String,
    isbn: String,
    publisher: String,
    numberOfPages: Number,
    subTitle: String,
    edition: String,
    author: {
        type: String,
        required: [true, 'Author is required.']
    },
    lccn: String,
    publishedDate: Date,
    summary: String,
    studyProgram: String,
    titlePoints: String,
    internetResource: String,
    generalNote: String,
    readingLevel: String,
    resourceType: String,
    barcode: String,
    location: String,
    cost: String,
    vendor: String,
    copyDate: Date,
    callNumber: String,
    format: String,
    currency: String,
    fund: String
}, {
    timestamps: true
});

const Book = mongoose.model('book', BookSchema);
export default Book;