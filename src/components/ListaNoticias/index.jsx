import { useEffect, useState } from "react";
import { getNoticias } from "../../services/noticias";

import style from "./style.module.scss";

const ListaNoticias = () => {
    const [noticias, setNoticias] = useState([]);

    async function fetchNoticias() {
        const noticiasDaApi = await getNoticias();
        setNoticias(noticiasDaApi);
    }

    useEffect(() => {
        fetchNoticias();
    }, []);

    console.log(noticias);

    const url = "https://back-end-blog.vercel.app/files/"

    return (
        <section className={style.listaNoticias}>
            {noticias.map((element, indice) => (
                <div className={style.containerDiv} key={indice}>
                    <img src={`${url}${element.src}`}/>
                    <p>{element.titulo}</p>
                    <p>{element.descricao}</p>
                </div>
            ))}
        </section>
    );
};

export default ListaNoticias;
