import CardCommon from "../ConcreteProducts/CardCommon";
import CardGold from "../ConcreteProducts/CardGold";
import ProductsFatory from "./ProductsFactory";

class PaypalFactory extends ProductsFatory {
        
    getCardCommon(): CardCommon{
        return new CardCommon();
    }

    getCardGold(): CardGold{
        return new CardGold();
    }
}

export default PaypalFactory;