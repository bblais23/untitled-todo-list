import React from 'react';

import './UntitledItem.css';

export default function UntitledItem({children, checked, enabled, setChecked}) {

	const textInput = enabled ? 
		<input className="todo-text" type="text" value={children}></input> :
		<p className="todo-text">{children}</p>;

	return <label className="untitled-item">
		<input 
			type="checkbox" 
			onChange={e => setChecked(e.target.checked)} 
			checked={checked} 
		/>
		{textInput}
	</label>;
}