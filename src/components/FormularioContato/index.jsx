import emailJs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

import style from "./style.module.scss";
import { useState } from 'react';

const FormularioContato = () => {

    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");
    const [messageEnv, SetMessageEnv] = useState(false);

    const activeAlert = () => {
        SetMessageEnv(!messageEnv)
    }

    const { t } = useTranslation();

    function resetText(e) {
        e.preventDefault();

        const templateNames = {
            from_name: name,
            message: message,
            email: email,
        }

        emailJs.send("service_udgr1nr", "template_x1mr9lg", templateNames, "h3rygo_OtQHeplRCn")
            .then(() => {
                SetName("");
                SetEmail("");
                SetMessage("");
                activeAlert();

            }, (error) => {
                console.log("erro", error);
            })
    }

    return (
        <div className={style.ContainerEmail}>
            <form onSubmit={resetText}>
                <div className={style.textForm}>
                    <h6 >{t("form-titulo")}</h6>
                    <p className={messageEnv ? `${style.message} ${style.active}` : style.message}>{t("message")}</p>
                </div>
                <div className={style.InputContent}>
                    <input
                        type="text"
                        placeholder={t("input1")}
                        required
                        onChange={(e) => SetName(e.target.value)}
                        value={name} />
                    <input type="email"
                        placeholder={t("input2")}
                        required
                        onChange={(e) => SetEmail(e.target.value)}
                        value={email} />
                </div>
                <div className={style.textareaCheck}>
                    <textarea name="message"
                        placeholder={t("input3")}
                        required
                        onChange={(e) => SetMessage(e.target.value)}
                        value={message} />
                </div>
                <div className={style.ContainerBtn}>
                    <button >{t("btn1")}</button>
                    <a href='#' download={true}><button type='button'>Dowload CV</button></a>
                </div>
            </form>
        </div>
    );
};

export default FormularioContato;