import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'d16bc0e940674455acf5b71e12e1f0cf'
    }
})