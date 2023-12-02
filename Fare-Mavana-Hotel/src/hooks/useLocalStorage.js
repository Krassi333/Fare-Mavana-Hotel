import { useState } from "react"

export default function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState((defaultValue => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        } else {
            return defaultValue;
        }
    }));

    const setLocalStorageState = (value) => {
        setState(value);
        let serializedValue;

        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);

        }

        localStorage.setItem(key, serializedValue);
    }

    return [
        state,
        setLocalStorageState
    ]
}