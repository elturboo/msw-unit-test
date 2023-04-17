import { rest, setupWorker } from "msw";


// worker use in browser environment
export const createMswWorker = (config) => {
  const handler = config.map((con) => {
    return rest[con.method || 'get'](con.url, (req, res, ctx) => {
      return res(ctx.json(con.response));
    });
  });

  const worker = setupWorker(...handler);
//   only worker.start() ;
  worker.start();
};
