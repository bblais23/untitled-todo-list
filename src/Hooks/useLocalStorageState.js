import { useState, useEffect } from 'react'

export default function useLocalStorageState(localStorageKey, defaultValue) {
	const [value, setValue] = useState(
		JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
	);

	useEffect( _ => {
		localStorage.setItem(localStorageKey,JSON.stringify(value));
	}, [value]);

	return [value, setValue];
}