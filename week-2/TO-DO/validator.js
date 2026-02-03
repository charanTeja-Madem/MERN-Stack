function validateTitle(title){
    if (title.length === 0) {
        return "Title is empty"
    }
    if (title.length < 3) {
        return "Title is too short"
    }
    return true;
}

export { validateTitle };