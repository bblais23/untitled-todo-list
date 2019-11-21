import React, {useState} from 'react';

import Item from './UntitledItem';

import './UntitledList.css';

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
]

export default function UntitledList() {

	const [todoItems, setTodoItems] = useState(todoItemsDefault);

	const [newItem, setNewItem] = useState();

	const addNewItem = _ => {
		setTodoItems([...todoItems, {item: newItem, checked: false}]);
		setNewItem('');
	}

	const updateOneItem = (updateItem, updateIndex) => 
		setTodoItems(
			todoItems.map(
				(item, index) => 
					index === updateIndex ? updateItem : item));

	const items = todoItems.map(
		({item, checked}, index) => 
			<Item
				setChecked={checked => updateOneItem({item, checked}, index)}
				key={index}
				checked={checked}>
					{item}
			</Item>
	);

	return <main className="listPaper">
		<h1>to do:</h1>
		{items}
		<label className="addNew">
			<input 
				type="text"
				value={newItem}
				onChange={e => setNewItem(e.target.value)}
			/>
			<button onClick={addNewItem}>+</button>
		</label>
	</main>;
}