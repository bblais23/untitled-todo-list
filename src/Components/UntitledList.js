import React from 'react';

import Item from './UntitledItem';

import './UntitledList.css';

export default function UntitledList() {
	return <main className="listPaper">
		<h1>to do:</h1>
		<Item>A list Item</Item>
	</main>
}