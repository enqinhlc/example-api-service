import firebaseAdmin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = require('../service_key/firebase-service-key.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
});

interface VerifyAuthResponse {
  error: { code: string; message: string } | null;
  uid: string | null;
  token: MyCustomDecodedIdTokenFields | null;
}

const verifyAuth = async (idToken: string): Promise<VerifyAuthResponse> => {
  try {
    const decodedToken: MyCustomDecodedIdTokenFields =
      await getAuth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    if (!decodedToken.manager) {
      return {
        error: {
          code: 'auth/user-not-manager',
          message: 'User is not manager',
        },
        uid: null,
        token: null,
      };
    } else {
      return {
        error: null,
        uid,
        token: decodedToken,
      };
    }
  } catch (error) {
    return {
      error: {
        code: error.code,
        message: 'Authorization id token not verified',
      },
      uid: null,
      token: null,
    };
  }
};

export default verifyAuth;
