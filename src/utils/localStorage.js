function localStorageSetItem(key, value) {
    if (typeof key !== 'string') {
        console.log('Error: Key must be a string');
        return;
    }

    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (error) {
        console.log('Erorr setting item in localStorage: ', error);
    }
}

function localStorageGetItem(key) {
    const value = localStorage.getItem(key);
    
    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
}

function localStorageRemoveItem(key) {
    localStorage.removeItem(key);

}

function localStorageClear() {
    localStorage.clear();
}

export { localStorageSetItem, localStorageGetItem, localStorageRemoveItem, localStorageClear }