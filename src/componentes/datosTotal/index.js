import { DivTotales,ThumbItemTotal } from "./style";

const DatosTotales = () => {
    return ( 
        <DivTotales>
            <ThumbItemTotal>
                <label>Subtotal</label>
                <p>$600</p>
            </ThumbItemTotal>
            
            <ThumbItemTotal>
                <label>Descuento (%)</label>
                <input placeholder="Descuento"></input>
            </ThumbItemTotal>
            <ThumbItemTotal>
                <h5>TOTAL</h5>
                <p>$600</p>
            </ThumbItemTotal>
        </DivTotales>
     );
}
 
export default DatosTotales;