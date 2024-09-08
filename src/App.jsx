import './App.scss';
import { LayoutTodoList } from './components/LayoutTodoList/LayoutTodoList';
import { useGetTodoList } from './hooks';

const App = () => {
	const { todoList, isLoading } = useGetTodoList();
	return !isLoading && <LayoutTodoList todoList={todoList} />;
};

export default App;
