import { Request, Response, NextFunction } from "express";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if(req.headers.authorization){
    const token = req.headers.authorization.split()
  }
};
