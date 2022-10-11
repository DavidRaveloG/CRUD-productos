import GoldProduct from "../Types/goldProduct";

class PaypalGold implements GoldProduct {
    
    get comission(): number{
        return 10;
    }

    get benefits(): string{
        return "beneficios paypal gold";
    }

    get balance(): number{
        return 100;
    }
}

export default PaypalGold;