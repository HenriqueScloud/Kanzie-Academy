import style from "./style.module.css"


export const TitleSection = () => {
    return (
        <>
            <section className={style.titleSection}>
                <div className="container">
                    <h1 className={style.leadingTitle}>Bora comer Pizza</h1>
                </div>
            </section>
        </>
    )
}