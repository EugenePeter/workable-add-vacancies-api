import { Vacancies } from "../../utils";

export const vacancy_resolvers = {
  Query: {
    // doesEmailExist: async (parent: any, { email }: any, context: any) => {
    //   console.log("PARENT:", parent);
    //   const result = await Company.findOne({ email });
    //   console.log("doesEmailExist result:", result);
    //   if (result) throw new Error("email exist");
    //   try {
    //     console.log("GRAPH EMAIL:", email);
    //     const result = await Vacancies.findOne({ email });
    //     console.log("doesEmailExist result:", result);
    //     if (result) throw new Error("email exist");
    //   } catch (e) {
    //     console.log("EMAIL ALREADY EXIST", e);
    //     return e;
    //   }
    //   return result;
    // },
  },
  Mutation: {
    addVacancy: async (_: any, args: any) => {
      const { params } = args;
      console.log("ARG:", args);
      console.log("PARAMS:", params);
      const vacancies = Vacancies.build({
        ...params,
      });
      await vacancies.save();
      console.log("VACANCIES", vacancies);
      const result = {
        message: `Succcessfully added ${vacancies.vacancy} to vacancies`,
        success: true,
        ...vacancies,
      };
      return result;
    },
  },
};
