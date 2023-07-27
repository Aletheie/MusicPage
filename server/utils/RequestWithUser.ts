import UserType from "./Login";
import { Request } from "express";

interface RequestWithUser extends Request {
  user?: UserType;
}

export default RequestWithUser;
