import { render, screen } from "@testing-library/react"
import PostFetchMock from "../components/PostFetchMock"


jest.mock("../api/api", ()=> {
    // High order Func Here return mean function
    return () => {
        return [
            {title: "title 1", body: "body 1"},
            {title: "title 2", body: "body 2"},
        ]
    }
})

test ("render post fetch mock component", async ()=> {
    render(<PostFetchMock/>)
    const element = await screen.findAllByRole("heading");
    expect(element).toHaveLength(2);
})