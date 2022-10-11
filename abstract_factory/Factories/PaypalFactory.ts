import CardCommon from "../ConcreteProducts/paypalCommon";
import CardGold from "../ConcreteProducts/paypalGold";
import ProductsFatory from "./ProductsFactory";
import IGoldenProduct from "../Types/goldProduct"
class PaypalFactory extends ProductsFatory {
        
    getCardCommon(): IGoldenProduct{
        return new CardCommon();
    }

    getCardGold(): IGoldenProduct{
        return new CardGold();
    }
}

export default PaypalFactory;