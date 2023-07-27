import { Request, Response, NextFunction } from "express";

interface SessionData {
  authenticated?: boolean;
  email?: string;
}

interface Session extends Partial<SessionData> {}

const requireAuth = (
  req: Request & { session: Session },
  res: Response,
  next: NextFunction
) => {
  if (req.session && req.session.authenticated) {
    next();
  } else {
    console.log("req.session:", req.session);
    res.send("no req.session");
  }
};

export { requireAuth, Session };
