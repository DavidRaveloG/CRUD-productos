import IGoldenProduct from "../Types/commonProduct";

class CardCommon implements IGoldenProduct {
    
    get comission(): number{
        return 0;
    }

    get benefits(): string{
        return "beneficios mastercard comun";
    }

    get balance(): number{
        return 10;
    }
}

export default CardCommon;