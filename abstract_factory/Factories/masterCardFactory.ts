import ProductsFactory from "./ProductsFactory";
import CardGold from "../ConcreteProducts/CardGold";
import CardCommon from "../ConcreteProducts/CardCommon";
import ProductType from "../Types/enumProductType";
class MasterCardFactory extends ProductsFactory {
    
    getCardCommon(): CardCommon{
        return new CardGold();
    }

    getCardGold(): CardGold{
        return new CardCommon();
    }
}

export default MasterCardFactory;