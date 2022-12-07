import IGoldenProduct from "../Types/commonProduct";

class VisaCommon implements IGoldenProduct {
    
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