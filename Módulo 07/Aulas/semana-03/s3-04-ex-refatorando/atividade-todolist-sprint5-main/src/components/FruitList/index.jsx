import { FruitCard } from "./FruitCard";

export const FruitList = ({fruitList, setFruitList}) => {
    const removeFruit = (fruitId) => {
        const newFruitList = fruitList.filter(fruit => fruit.id !== fruitId);
        setFruitList(newFruitList);
    }

    return(
        <ul>
            {fruitList.map(fruit => (
                <FruitCard key={fruit.id} fruit={fruit} removeFruit={removeFruit} />
            ))}
        </ul>
    )
}