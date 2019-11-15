import React from 'react';

export default function UntitledItem({children, checked, enabled}) {

	const textInput = enabled ? 
		<input type="text" value={children}></input> :
		<p>{children}</p>;

	return <label>
		{!enabled && <input type="checkbox" checked={checked}></input>}
		{textInput}
	</label>;
}