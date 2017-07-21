export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action
    // and object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}