import verifyAuth from '@/utils/verifyAuth';
import { GraphQLError } from 'graphql';

const apolloContext = async ({ req, res }: MyContext) => {
  if (req.headers.authorization) {
    const { uid, error, token } = await verifyAuth(req.headers.authorization);

    if (uid === null) {
      throw new GraphQLError(error!.code);
      // return res.json(error);
    } else {
      req.uid = uid;
      req.token = token!;
    }
  } else {
    throw new GraphQLError('auth/id-token-not-found');
    // return res.json({
    //   code: 'auth/id-token-not-found',
    //   message: 'You have to provide id token!',
    // });
  }

  return { req, res };
};

export default apolloContext;
