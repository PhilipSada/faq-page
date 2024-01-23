import { rest } from "msw";

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(
          Array.from({ length: 10 }, (_, index) => ({
            userId: index + 1,
            id: index + 1,
            title: `Title ${index + 1}`,
            body: `Body ${index + 1}`,
          }))
        )
      );
    }),
];