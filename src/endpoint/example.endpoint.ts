import { Request, Response } from 'express';

export const Example = async (_: Request, res: Response) => {
  return res.json({
    status: true,
    text: 'example',
  });
};
