import React, {useState} from 'react';

import Item from './UntitledItem';

import './UntitledList.css';

export default function UntitledList({items, addItem, checkItem}) {

	const [newItem, setNewItem] = useState();

	const addNewItem = _ => {
		addItem({item: newItem, checked: false});
		setNewItem('');
	}

	const itemsComponents = items.map(
		({item, checked}, index) => 
			<Item
				setChecked={checked => checkItem(index, checked)}
				key={index}
				checked={checked}>
					{item}
			</Item>
	);

	return <main className="listPaper">
		<h1>to do:</h1>
		{itemsComponents}
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