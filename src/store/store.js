import { proxy } from "valtio";


const state = proxy({
    items: [],
    price: 0,
    q: 0,
    buyNow: {
        item: {
            name: "",
            img: "",
            price: "",
            link: ""
        },
        q: 0,
        price: 0
    }
});

export default state;
