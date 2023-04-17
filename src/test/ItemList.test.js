import { render, screen } from "@testing-library/react"
import { ItemList } from "../components/ItemList";

describe("ItemListComponent", ()=> {
    test("check tasks list is empty", ()=> {
        render (<ItemList tasks={[]}/>)
        const taskElement = screen.queryAllByTestId('task');
        expect(taskElement).toHaveLength(0);

    });
    test("check title no data found when list is empty", ()=> {
        render (<ItemList tasks={[]}/>)
        const noDataTitle = screen.getByTestId('noDataTitle');
        expect(noDataTitle).toBeInTheDocument();

    });
    test("check tasks list have data", ()=> {
        const tasks = [{id: 1, name: "Task 4", done: false},{id: 2, name: "Task 4", done: false},{id: 3, name: "Task 4", done: false}]
        render (<ItemList tasks={tasks}/>)
        const taskElement = screen.queryAllByTestId('task');
        expect(taskElement).toHaveLength(3);

    })
})