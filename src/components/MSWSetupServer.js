import { rest } from "msw";
import { setupServer } from "msw/lib/node";

// server use in node environment
export const createMswReq = (config) => {
  const handler = config.map((con) => {
    return rest[con.method || 'get'](con.url, (req, res, ctx) => {
      return res(ctx.json(con.response));
    });
  });

  const server = setupServer(...handler);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
};
