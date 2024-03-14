import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

// eslint-disable-next-line react/prop-types
export const DefaultTemplate = ({ children }) => {
    return (
        <>
        <Header />
        <main className="container">{children}</main>
        <Footer />
        </>
    );
};
