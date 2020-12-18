import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { logger } from '../logger';

// tslint:disable-next-line: no-any ban-types
export function loggerMiddleware(
  req: Request,
  res: Response,
  next: Function
): any {
  logger.debug(`${req.method} ${req.originalUrl}`);
  next();
}
