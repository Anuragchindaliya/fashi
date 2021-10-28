export const apiTypeCreator = (type) => {
    return {
        [`${type}_FETCH`]:`${type}_FETCH`,
        [`${type}_SUCCESS`]:`${type}_SUCCESS`,
        [`${type}_ERROR`]:`${type}_ERROR`,
        [`${type}_RESET`]:`${type}_RESET`
    }
}