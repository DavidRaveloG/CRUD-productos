import IGoldenProduct from "../Types/commonProduct";

class PaypalCommon implements IGoldenProduct {
    
    get comission(): number{
        return 0;
    }

    get benefits(): string{
        return "beneficios paypal comun";
    }

    get balance(): number{
        return 10;
    }
}

export default PaypalCommon;