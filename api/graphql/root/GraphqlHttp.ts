import { Request, Response } from "express";
import { GraphQLError } from "graphql";
import * as graphqlHTTP from "express-graphql";
import { IsJsonString } from "../../utils/jsonHelper";
import MergeSchema from "../schema/index";
import GraphqlRoot from "./GraphqlRoot";

const GraphqlHttp = () => {

    return graphqlHTTP((request: Request, response: Response) => {

        return {
            schema: MergeSchema,
            rootValue: GraphqlRoot(),
            context: {
                req: request,
                res: response
            },
            formatError: formatError
        }
    }
    )
};

const formatError = (error: GraphQLError) => {

    let message = IsJsonString(error.message) ? JSON.parse(error.message) : error.message;

    return {
        error: message,
        path: error.path,
        message: message
    }
};

export default GraphqlHttp;