import axios from 'axios';

const ax = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=4586b6112b39c01d552d28a0946192d7&language=en-US&page=1',
    headers:{
        withCredentials: true,
    }
});


export async function GetData() {
    try {
        const response = await ax.get();
        return response.data.results;
    }catch (e) {
        console.log(e);

    }
}

export async function PostData(url,body) {
    try {
        const response = await ax.post(url,body);
        return response;
    }catch (e) {
        console.log(e)
    }
}


