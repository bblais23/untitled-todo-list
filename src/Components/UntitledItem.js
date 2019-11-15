import React from 'react';

import './UntitledItem.css';

export default function UntitledItem({children, checked, enabled}) {

	const textInput = enabled ? 
		<input className="todo-text" type="text" value={children}></input> :
		<p className="todo-text">{children}</p>;

	return <label className="untitled-item">
		<input type="checkbox" checked={checked}></input>
		{textInput}
	</label>;
}