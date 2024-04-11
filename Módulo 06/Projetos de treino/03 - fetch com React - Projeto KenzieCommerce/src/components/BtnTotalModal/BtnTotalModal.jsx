import { useEffect } from "react";

export const BtnTotalModal = ({ totalBagItems, bagItems }) => {
    useEffect(() => {
        return <span className="title three">{totalBagItems(bagItems)}</span>;
    },[]);
};