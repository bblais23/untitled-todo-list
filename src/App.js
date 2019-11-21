import React, {useState} from 'react';

import UntitledList from './Components/UntitledList';

const todoItemsDefault = [
	{
		item: 'create todo list',
		checked: true,
	},
	{
		item: 'store items locally',
		checked: false,
	},
	{
		item: 'list in prod',
		checked: false,
	},
];

export default function App() {

	const [todoItems, setTodoItems] = useState(todoItemsDefault);

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