export const token = {
    saveToken: (token) => {
        localStorage.setItem('access',token);
    },
    removeToken: () => {
        localStorage.removeItem('access');
    },
    getToken: () => {
        return localStorage.getItem('access');
    }
}