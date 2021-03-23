
export const setCurrentUser = (user) => {
    return {
        type: 'SER_CURRENT_USER',
        payload: user
    }
}