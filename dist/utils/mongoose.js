"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacancies = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var vacancySchema = new mongoose_1.default.Schema({
    employer_questions: {
        type: Object,
        required: true,
    },
    job_category: {
        type: String,
        required: true,
    },
    job_description: {
        type: Object,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    position_and_responsibilities: {
        type: Object,
        required: true,
    },
    position_type: {
        type: String,
        required: true,
    },
    salary: {
        type: Object,
        required: true,
    },
    skills_and_qualifications: {
        type: Object,
        required: true,
    },
    vacancy: {
        type: String,
        required: true,
    },
    company_id: {
        type: String,
        required: true,
    },
});
vacancySchema.statics.build = function (attrs) {
    return new exports.Vacancies(attrs);
};
exports.Vacancies = mongoose_1.default.model("vacancies", vacancySchema);
//# sourceMappingURL=mongoose.js.map