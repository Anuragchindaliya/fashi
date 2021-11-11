export const apiTypeCreator = (type) => {
    return {
        FETCH:`${type}_FETCH`,
        SUCCESS:`${type}_SUCCESS`,
        ERROR:`${type}_ERROR`,
        RESET:`${type}_RESET`
    }
}