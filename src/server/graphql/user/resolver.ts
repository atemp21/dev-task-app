import { User } from "../../models/user";
import bcrypt from 'bcrypt';

const resolvers = {
    Query: {
        user: async(_: any, {input}: any, { res }: any, info: any) => {

        }
    },
    Mutation: {
        signUp: async(_: any, { input }: any) => {

        }
    }

}