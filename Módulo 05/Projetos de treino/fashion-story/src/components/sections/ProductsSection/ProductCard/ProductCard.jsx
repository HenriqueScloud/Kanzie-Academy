
// eslint-disable-next-line react/prop-types
export const ProductCard = ({ image, title, price} ) => {

    return (
        <li>
            <img src={image} alt="Product Image" />
            <p>{title}</p>
            <p>R$ {price}</p>
        </li>
    );
};