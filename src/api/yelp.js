import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: { 
        common: {
             Authorization: 'Bearer H030fDX5j6XFQEtGId_K3lkXb8rrAxR67TjO4T7TAAKyKQmXIkvChNEYWT_Iidfz0qZarlDExi9mmgSOoA3Lnhs_glNblRx7dtTUKqQjPE0qlvcKasjDJlPSr8rAX3Yx'
        }
       
    }
})

