import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

const STATIC_TOKEN = process.env.STATIC_TOKEN;

@Injectable()
export class StaticTokenGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    return token === `Bearer ${STATIC_TOKEN}`;
  }
}