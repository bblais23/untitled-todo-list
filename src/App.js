import React from 'react';
import useLocalStorageState from './Hooks/useLocalStorageState';

import UntitledList from './Components/UntitledList';

export default function App() {

	const [todoItems, setTodoItems] = useLocalStorageState('untitledTodo',[]);

	const addNewItem = item => 
		setTodoItems([...todoItems, item]);

	const checkOneItem = (updateIndex, checked) => 
			setTodoItems(
				todoItems.map(
					(item, index) =>
						index === updateIndex ? {...item, checked} : item
				)
			);

	return <UntitledList
		items={todoItems}
		checkItem={checkOneItem}
		addItem={addNewItem}
	/>;
}