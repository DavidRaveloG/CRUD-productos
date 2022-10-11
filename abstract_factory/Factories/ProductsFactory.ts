import ProductType from "../Types/enumProductType";
import MasterCardFactory from "./masterCardFactory";
import VisaFactory from "./VisaFactory";
import PaypalFactory from "./PaypalFactory";
import CardGold from "../ConcreteProducts/CardGold";
import CardCommon from "../ConcreteProducts/CardCommon";
import IGoldenProduct from "../Types/goldProduct"
abstract class ProductsFactory{

  
    public abstract getCardCommon():IGoldenProduct;
    public abstract getCardGold():IGoldenProduct;
    /*public static createProduct(producto: String){
        if(producto === 'MasterCard'){
            return new MasterCardFactory();
        }
        if(producto === 'PayPal'){
            return new VisaFactory();
        }
        if(producto === 'Visa'){
            return new PaypalFactory();
        }
         throw new Error("Invalid payment method type")
    }*/
}

export default ProductsFactory;