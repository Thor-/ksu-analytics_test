import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DtoTransformInterceptor<TEntity, TDto> implements NestInterceptor<Partial<TEntity>, TDto> {
  constructor(private destinationType: ClassType<TDto>) {

  }

  intercept(context: ExecutionContext, next: CallHandler<TEntity>): Observable<TDto> | Promise<Observable<TDto>> {
    return next.handle().pipe(
      map(data => {
        return plainToClass(this.destinationType, data);
      })
    );
  }

}