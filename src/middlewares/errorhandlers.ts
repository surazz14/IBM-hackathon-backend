import { Request, Response} from "express";
import buildError from "../utils/buildError";

/**
 * Generic error response middleware for validation and internal server errors.
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function genericErrorHandler(
  err: any,
  req: Request,
  res: Response,
) {
  const error = buildError(err);

  res.status(error.code).json({ error });
}
