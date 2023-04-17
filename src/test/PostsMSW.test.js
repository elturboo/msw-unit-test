import { render, screen } from "@testing-library/react";
import PostFetchMock from "../components/PostFetchMock";
import { createMswReq } from "../components/MSWSetupServer";

createMswReq([
  {
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    response: [
      { title: "title 1", body: "body 1" },
      { title: "title 2", body: "body 2" },
    ],
  },
]);

test("MSW have length two", async () => {
  render(<PostFetchMock />);
  const element = await screen.findAllByRole("heading");
  expect(element).toHaveLength(2);
});
