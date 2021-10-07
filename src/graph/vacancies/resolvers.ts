import { Vacancies } from "../../utils";

export const vacancy_resolvers = {
  Query: {},
  Mutation: {
    addVacancy: async (_: any, args: any) => {
      const { params } = args;
      console.log("PARAMS:", params);
      try {
        const vacancies = Vacancies.build({
          ...params,
        });
        await vacancies.save();
        const result = {
          message: `Succcessfully added ${vacancies.vacancy} to vacancies`,
          success: true,
          ...vacancies,
        };
        console.log("VACANCIES RESULTS", vacancies);
        return result;
      } catch (e) {
        console.log("MUTATION ERROR:", e);
      }
    },
  },
};
