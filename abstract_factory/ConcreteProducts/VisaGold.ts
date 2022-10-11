import GoldProduct from "../Types/goldProduct";

class VisaGold implements GoldProduct {
    
    get comission(): number{
        return 10;
    }

    get benefits(): string{
        return "beneficios visa gold";
    }

    get balance(): number{
        return 100;
    }
}

export default VisaGold;