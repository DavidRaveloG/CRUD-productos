import ProductsFatory from "./ProductsFactory";
import CardCommon from "../ConcreteProducts/VisaCommon";
import CardGold from "../ConcreteProducts/VisaGold";
import IGoldenProduct from "../Types/goldProduct"
class VisaFactory extends ProductsFatory {
        
    getCardCommon(): IGoldenProduct{
        return new CardCommon();
    }

    getCardGold(): IGoldenProduct{
        return new CardGold();
    }
}

export default VisaFactory;