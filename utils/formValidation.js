const isEmpty = (value, error = "Can't be empty") => {
    const result = value == null || value.length == 0
    return result ? error : ""
}
const minLength = (value, length) => {
    const result = value.length < length
    return result ? `Enter at least ${length} characters` : ""
}
const email = (value) => {
    const result = !value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    return result ? 'Enter a valid email' : ''
}
const phone = (value) => {
    const result = !value.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    )
    return result ? 'Enter a valid phone' : ''
}

export default { isEmpty, minLength, email, phone}