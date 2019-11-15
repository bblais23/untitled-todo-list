import React from 'react';

export default function UntitledItem({children, checked}) {
	return <label>
		<input type="checkbox" checked={checked}></input>
		<input type="text" value={children}></input>
	</label>;
}