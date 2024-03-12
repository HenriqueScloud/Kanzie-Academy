
// eslint-disable-next-line react/prop-types
export const StudentCard = ({name, age, country}) => {
    return (
        <section>
            <h1>{name}</h1>
            <p>{age}</p>
            <span>{country}</span>
        </section>
    )
}