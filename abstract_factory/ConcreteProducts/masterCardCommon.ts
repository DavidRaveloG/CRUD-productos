import CommonProduct from "../Types/commonProduct";

class MasterCardCommon implements CommonProduct {
    
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

export default MasterCardCommon;