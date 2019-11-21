import React from 'react';

import './UntitledItem.css';

export default function UntitledItem({children, checked, setChecked}) {

	return <label className="untitled-item">
		<input 
			type="checkbox" 
			onChange={e => setChecked(e.target.checked)}
			checked={checked}
		/>
		<p className="todo-text">
			{children}
		</p>
	</label>;
}