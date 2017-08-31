import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const PermissionSchema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User Id is required.']
    },
    permissionType: {
        type: String,
        enum: ['ADMIN', 'LIBRARIAN', 'PERSONNEL', 'STUDENTS'],
        required: [true, 'Permission Type is required']
    },
    libraryId: String,
    schoolId: String
}, {
        timestamps: true
    });

PermissionSchema.plugin(mongoosePaginate);

const Permission = mongoose.model('permission', PermissionSchema);
export default Permission;