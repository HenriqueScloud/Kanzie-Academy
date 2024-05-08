export const HomePage = ({user}) =>{
    return(
        <>
            <h1>Home Page</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </>
    )
}