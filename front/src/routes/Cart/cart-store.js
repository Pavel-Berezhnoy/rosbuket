import Cookies from "js-cookie"

const cartStore = {
    getItems: () => {
        return Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];
    },
    addItem: (item) => {
        let cart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];
        if (!cart.find(cartItem => cartItem.id == item.id)) cart.push(item);
        Cookies.set('cart', JSON.stringify(cart), { 
            expires: 2592000, 
            sameSite: 'lax'
        });
    },
    deleteItem: (idItem) => {
        const cart = JSON.parse(Cookies.get('cart'));
        const filteredCart = cart.filter(cartItem => cartItem.id != idItem);
        Cookies.set('cart', JSON.stringify(filteredCart), { expires: 2592000, sameSite: 'lax' });
    },
    updateItem: (idItem,qtyItem) => {
        const cart = JSON.parse(Cookies.get('cart'));
        const filteredCart = cart.map(cartItem => cartItem.id == idItem ? {...cartItem, quantity: qtyItem} : cartItem);
        Cookies.set('cart', JSON.stringify(filteredCart), { expires: 2592000, sameSite: 'lax' });
    }
}

export default cartStore;