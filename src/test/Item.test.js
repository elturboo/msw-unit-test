import { render, screen } from "@testing-library/react";
import { Item } from "../components/Item";
import userEvent from "@testing-library/user-event";

describe('ItemComponent', ()=> {
    test('check component render one item', ()=> {
        const task = [{id: 1, name: "Task 4", done: false}]
        render(<Item task = {task}/>);
        const itemTaskElement = screen.getByTestId('item-task');
        expect(itemTaskElement).toBeInTheDocument();
    });
    test('check delete btn is work', async()=> {
        const task = [{id: 1, name: "Task 4", done: false}];
        const mockDelete = jest.fn();
        render(<Item task = {task} onDeleteTask={mockDelete}/>);
        const deleteBtnElement = screen.getByTestId('deleteBtn');
        await userEvent.click(deleteBtnElement);
        expect(mockDelete).toBeCalledWith(task);
        
    }); 

      test('check edit btn is work', async()=> {
        const task = [{id: 1, name: "Task 4", done: false}];
        const mockEdit = jest.fn();
        render(<Item task = {task} onEditTask={mockEdit}/>);
        const editBtnElement = screen.getByTestId('editBtn');
        await userEvent.click(editBtnElement);
        const editInput = screen.getByTestId('item-edit');
        expect(editInput).toBeInTheDocument();
        expect(mockEdit).toHaveBeenCalled();
    })


    // test('check done btn is work', async()=> {
    //     const task = [{id: 1, name: "Task 4", done: false}];
    //     const mockDone = jest.fn();
    //     render(<Item task = {task} onDoneTask={mockDone}/>);
    //     const doneBtnElement = screen.queryByTestId('doneBtn');
    //     await userEvent.click(doneBtnElement  );
    //     expect(mockDone).toHaveBeenCalled();
    // })

    
  
})