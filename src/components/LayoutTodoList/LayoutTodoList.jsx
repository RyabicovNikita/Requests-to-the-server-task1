import './TodoList.scss';
export const LayoutTodoList = ({ todoList }) => (
	<div className="container">
		<div className="container__scrollable">
			<ul className="scrollable__todoList">
				{todoList?.map((todo) => (
					<li className="todoList__todo">
						<input
							className="todo__completed-checkbox hidden"
							id="todoCompleted"
							type="checkbox"
							checked={todo.completed}
						/>
						<label className="todo__completed" for="todoCompleted"></label>
						<span className="todo__description">{todo.title}</span>
					</li>
				))}
			</ul>
		</div>
	</div>
);
