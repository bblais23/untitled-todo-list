import React from 'react';

import './UntitledItem.css';

export default function UntitledItem({children, checked, enabled, setChecked, setEnabled, setTitle}) {

	const textInput = enabled ? 
		<input 
			className="todo-text" 
			type="text" 
			value={children} 
			onChange={e => setTitle(e.target.value)}
		/> :
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