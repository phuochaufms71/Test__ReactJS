import axios from "axios";

const fakeStore = (url) => {
    return axios.create({
        baseURL: url
    })
}

export { fakeStore };