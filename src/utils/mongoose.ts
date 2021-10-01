import mongoose from "mongoose";

interface VancancyFieldAttributes {
  value: string;
  keywords?: string[];
}

interface EmployerQuestions extends VancancyFieldAttributes {}
interface JobDescription extends VancancyFieldAttributes {}
interface PositionAndResponsibilites extends VancancyFieldAttributes {}
interface SkillsAndQualifications extends VancancyFieldAttributes {}

interface Salary {
  to: number;
  from: number;
}

// An interface that describes the properties that are required to create a new company

interface VacancyAtrtibutes {
  employer_questions: EmployerQuestions;
  job_category: string;
  job_description: JobDescription;
  location: string;
  position_and_responsibilities: PositionAndResponsibilites;
  position_type: string;
  salary: Salary;
  skills_and_qualifications: SkillsAndQualifications;
  vacancy: string;
  company_id: string;
}

// An interface that describes the properties that a company model has
interface VacancyModel extends mongoose.Model<VacancyDocument> {
  build(attrs: VacancyAtrtibutes): VacancyDocument;
}

// An interface that describes the properties that a company document has
interface VacancyDocument extends mongoose.Document {
  employer_questions: EmployerQuestions;
  job_category: string;
  job_description: JobDescription;
  location: string;
  position_and_responsibilities: PositionAndResponsibilites;
  position_type: string;
  salary: Salary;
  skills_and_qualifications: SkillsAndQualifications;
  vacancy: string;
  company_id: string;
}

const vacancySchema = new mongoose.Schema({
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

vacancySchema.statics.build = (attrs: VacancyAtrtibutes) => {
  return new Vacancies(attrs);
};

export const Vacancies = mongoose.model<VacancyDocument, VacancyModel>("vacancies", vacancySchema);
