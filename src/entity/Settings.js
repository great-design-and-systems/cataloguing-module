import mongoose from 'mongoose';

const SettingsSchema = mongoose.Schema({
    schoolId: {
        type: String,
        required: [true, 'School Id is required.']
    },
    funds: [String],
    currencies: [String],
    resourceTypes: [String]
}, {
        timestamps: true
    });

const Settings = mongoose.model('settings', SettingsSchema);
export default Settings;