import { useForm } from "react-hook-form";

function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="ContactPage">
                <div className="ContactPage-info">
                    <div className="ContactPage-info-caution">
                        <p>
                            La mise à jour des données est un dialogue entre
                            votre entreprise et OpenClimat qui vérifie les
                            données. Aucune information soumise dans ce
                            formulaire ne sera publiée sans discussion
                            préalable.
                        </p>
                        <p>
                            Prochaine analyse: <span>Décembre 2023</span>
                        </p>
                    </div>
                    <div className="ContactPage-info-update">
                        <p>
                            Vous souhaitez demander une mise à jour de votre
                            page publique OpenClimat?
                        </p>
                        <p>
                            Voici les éléments que vous pouvez mettre à jour
                            (tout ou parite)
                        </p>
                        <ul>
                            <li>
                                Performance climatique (% de réduction des
                                émissions sur vos scopes 1&2 et 3)
                            </li>
                            <li>
                                Bilan carbone (données brutes de vos émissions
                                de CO2 sur vos scopes 1&3 et 3)
                            </li>
                            <li>Labels liés au climat (SBTi, CDP)</li>
                        </ul>
                    </div>
                </div>

                <form
                    className="ContactPage-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p>Contact</p>

                    {/* ContactPage_form_lastname */}
                    <div className="ContactPage-form-lastname">
                        <label htmlFor="lastname">Nom</label>
                        <input
                            type="text"
                            className="ContactPage-form-input"
                            {...register("lastname", {
                                required: "Ce champ est requis",
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ ]+$/i,
                                    message:
                                        "Caractères alphabétiques uniquement",
                                },
                            })}
                            placeholder="Nom ..."
                        />
                    </div>
                    {/* Affichage des erreurs pour le champ lastname */}
                    {errors.lastname && (
                        <span className="ContactForm-error">
                            {errors.lastname.message}
                        </span>
                    )}

                    {/* ContactPage_form_firstname */}
                    <div className="ContactPage-form-prenom">
                        <label htmlFor="firstname">Prénom</label>
                        <input
                            type="text"
                            className="ContactPage-form-input"
                            {...register("firstname", {
                                required: "Ce champ est requis",
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ ]+$/i,
                                    message:
                                        "Caractères alphabétiques uniquement",
                                },
                            })}
                            placeholder="Prénom ..."
                        />
                    </div>
                    {/* Affichage des erreurs pour le champ firstname */}
                    {errors.firstname && (
                        <span className="ContactForm-error">
                            {errors.firstname.message}
                        </span>
                    )}

                    {/* ContactPage_form_jobtitle */}
                    <div className="ContactPage-form-prenom">
                        <label htmlFor="jobtitle">Votre poste</label>
                        <input
                            type="text"
                            className="ContactPage-form-input"
                            {...register("jobtitle", {
                                required: "Ce champ est requis",
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ ]+$/i,
                                    message:
                                        "Caractères alphabétiques uniquement",
                                },
                            })}
                            placeholder="Intitulé poste ..."
                        />
                    </div>
                    {/* Affichage des erreurs pour le champ jobtitle */}
                    {errors.jobtitle && (
                        <span className="ContactForm-error">
                            {errors.jobtitle.message}
                        </span>
                    )}

                    {/* ContactPage_form_email */}
                    <div className="ContactPage-form-email">
                        <label htmlFor="email">Adresse email</label>
                        <input
                            type="text"
                            className="ContactPage-form-input"
                            {...register("email", {
                                required: "Ce champ est requis",
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                    message:
                                        "Merci de renseigner un email valide",
                                },
                            })}
                            placeholder="Email"
                        />
                    </div>
                    {/* Affichage des erreurs pour le champ email */}
                    {errors.email && (
                        <span className="ContactForm-error">
                            {errors.email.message}
                        </span>
                    )}

                    {/* ContactPage_form_phonenumber */}
                    <div className="ContactPage-form-phonenumber">
                        <label htmlFor="phonenumber">Numéro de téléphone</label>
                        <input
                            type="text"
                            className="ContactPage-form-input"
                            {...register("phonenumber", {
                                required: "Ce champ est requis",
                                pattern: {
                                    value: /^(0|\+33)?[1-9][0-9]{8}$/,
                                    message:
                                        "Merci de renseigner un numéro de téléphone valide",
                                },
                            })}
                            placeholder="Numéro ..."
                        />
                    </div>
                    {/* Affichage des erreurs pour le champ phonenumber */}
                    {errors.phonenumber && (
                        <span className="ContactForm-error">
                            {errors.phonenumber.message}
                        </span>
                    )}

                    <button className="ContactPage-form-button" type="submit">
                        Commencer
                    </button>
                </form>
            </div>
        </>
    );
}

export default ContactPage;
