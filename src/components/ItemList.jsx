import { Item } from "./Item";

export const ItemList = ({ tasks, onDeleteTask, onDoneTask, onEditTask }) => {
  return (
    <div className="item-list-container">
    {tasks.length > 0 ? (tasks.map((task, index) => {
      return (
        <div
          data-testid="task"
          key={index}
          className="w-100 d-flex justify-content-center"
        >
          <Item
            task={task}
            onDoneTask={onDoneTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        </div>
      );
    })) : <h4 data-testid="noDataTitle" className="text-center mt-3">No Data Found</h4>}
     
    </div>
  );
};
