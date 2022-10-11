import ProductsFatory from "./ProductsFactory";
import CardCommon from "../ConcreteProducts/CardCommon";
import CardGold from "../ConcreteProducts/CardGold";

class VisaFactory extends ProductsFatory {
        
    getCardCommon(): CardCommon{
        return new CardCommon();
    }

    getCardGold(): CardGold{
        return new CardGold();
    }
}

export default VisaFactory;