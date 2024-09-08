import { useEffect, useState } from 'react';
export const useGetTodoList = () => {
	const [todoList, setTodoList] = useState();
	const [isLoading, setIsLoading] = useState();
	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((result) => setTodoList(result))
			.catch((error) => console.error(error));
		setIsLoading(false);
	}, []);
	return {
		todoList,
		isLoading,
	};
};
