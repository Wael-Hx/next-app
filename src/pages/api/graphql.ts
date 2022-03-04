import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../../graphql/schema";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

let apolloServerHandler: NextApiHandler;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!apolloServerHandler) {
    await apolloServer.start();
    apolloServerHandler = apolloServer.createHandler({ path: "/api/graphql" });
  }

  return apolloServerHandler(req, res);
}

export default handler;
