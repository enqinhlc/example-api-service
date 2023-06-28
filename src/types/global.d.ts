import { Request, Response } from 'express';
import type { DecodedIdToken } from 'firebase-admin/auth';

declare global {
  type MyRequest = Request & {
    uid: string;
    token: MyCustomDecodedIdTokenFields;
  };

  type MyContext = {
    req: MyRequest;
    res: Response;
  };

  interface MyCustomDecodedIdTokenFields extends DecodedIdToken {
    ndbId?: string;
  }
}
