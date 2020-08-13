import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6dl8L01_YsHXJXjoVhcUAg-PKubQCnEtS3n5C78N-rA'
    }

});

