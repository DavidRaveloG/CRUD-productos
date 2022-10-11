import ProductsFactory from "./ProductsFactory";
import CardGold from "../ConcreteProducts/masterCardCommon";
import CardCommon from "../ConcreteProducts/masterCardGold";
import ProductType from "../Types/enumProductType";
import IGoldenProduct from "../Types/goldProduct"

class MasterCardFactory extends ProductsFactory {
    
    getCardCommon(): IGoldenProduct{
        return new CardGold();
    }

    getCardGold(): IGoldenProduct {
        return new CardCommon();
    }
}

export default MasterCardFactory;