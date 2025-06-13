function removeObjectFromArrayById(arr, id) {
    arr.splice(arr.find(quote => quote.id === id), 1)
}

export { removeObjectFromArrayById }