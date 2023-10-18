import axios from "axios";

const url = "https://back-end-blog.vercel.app";

const noticiasApi = axios.create({baseURL: url});

async function getNoticias() {
    const response = await noticiasApi.get("/noticias");

    return response.data
}

export{
    getNoticias
}