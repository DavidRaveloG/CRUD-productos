import CommonProduct from "../Types/commonProduct";

class PaypalCommon implements CommonProduct {
    
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