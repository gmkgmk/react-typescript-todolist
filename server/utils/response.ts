import * as Koa from 'koa';

export interface Response {
  msg?: string;
  data?: any;
}

/**
 *
 *
 * @date 2019-05-05
 * @export
 * @param {Koa.Context} ctx
 * @param {Response} [result={}]
 * @param {boolean} [success=true]
 * @param {number} [status=200]
 */
export function response(
  ctx: Koa.Context,
  result: Response,
  success: boolean = true,
  status: number = 200
) {
  ctx.body = {
    success,
    status,
    result,
  };
}
export function fail(
  ctx: Koa.Context,
  result: Response,
  success: boolean = false,
  status: number = 500
) {
  ctx.body = {
    success,
    status,
    result,
  };
}
