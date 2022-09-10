const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        minlength: 7,
        maxlength: 11,
    },
    address: {
        type: String,
        required: true,
    }
}
);

const Student = mongoose.model("Student", studentsSchema);

module.exports = Student;