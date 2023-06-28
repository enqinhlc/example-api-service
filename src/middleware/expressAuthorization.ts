import verifyAuth from '@/utils/verifyAuth';
import { NextFunction, Response } from 'express';

const expressAuthorization = async (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    const { uid, error, token } = await verifyAuth(req.headers.authorization);
    if (uid === null) {
      return res.json(error);
    } else {
      req.uid = uid;
      req.token = token!;
      next();
    }
  }

  return res.json({
    code: 'auth/id-token-not-found',
    message: 'You have to provide id token!',
  });
};

export default expressAuthorization;
