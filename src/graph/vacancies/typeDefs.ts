import { gql } from "apollo-server-express";

export const vancancy_type_defs = gql`
  input JobDescription {
    value: String!
    keywords: [String]!
  }

  input EmployerQuestions {
    value: String!
    keywords: [String]!
  }

  input PositionAndResponsibilites {
    value: String!
    keywords: [String]!
  }

  input SkillsAndQualifications {
    value: String!
    keywords: [String]!
  }

  input Salary {
    to: Int
    from: Int
  }

  input AddVacancyParams {
    employer_questions: EmployerQuestions!
    job_category: String!
    job_description: JobDescription
    location: String!
    position_and_responsibilities: PositionAndResponsibilites
    position_type: String!
    salary: Salary
    skills_and_qualifications: SkillsAndQualifications
    vacancy: String!
    company_id: String!
  }

  type Test2 {
    message: String
  }

  type Mutation {
    addVacancy(params: AddVacancyParams): Test2
  }
`;
