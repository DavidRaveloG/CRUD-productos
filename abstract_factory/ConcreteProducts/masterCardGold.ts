import GoldProduct from "../Types/goldProduct";

class MasterCardGold implements GoldProduct {
    
    get comission(): number{
        return 10;
    }

    get benefits(): string{
        return "beneficios mastercard gold";
    }

    get balance(): number{
        return 100;
    }
}

export default MasterCardGold;