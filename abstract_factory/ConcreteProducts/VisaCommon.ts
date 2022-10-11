import CommonProduct from "../Types/commonProduct";

class VisaCommon implements CommonProduct {
    
    get comission(): number{
        return 0;
    }

    get benefits(): string{
        return "beneficios visa comun";
    }

    get balance(): number{
        return 10;
    }
}

export default VisaCommon;