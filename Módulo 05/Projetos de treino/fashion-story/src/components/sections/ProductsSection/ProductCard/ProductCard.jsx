import style from "../style.module.css"
// eslint-disable-next-line react/prop-types
export const ProductCard = ({ image, title, price} ) => {

    return (
        <li className={style.card}>
            <img src={image} alt="Product Image" />
            <h3 className='title3'>{title}</h3>
            <p  className='price'>R$ {price}</p>
        </li>
    );
};