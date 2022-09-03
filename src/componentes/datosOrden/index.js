import { DivDatosOrden, SelectOrden } from "./style";
import { DatePicker } from "@material-ui/pickers";
import { useState } from "react";

const DatosOrden = () => {
    const [fechaSeleccionada, SetFechaSeleccionada] = useState(new Date);
    return (
        <DivDatosOrden>

            <SelectOrden>
                <h5>Fecha de Entrega</h5>
                <DatePicker value={fechaSeleccionada} onChange={SetFechaSeleccionada}>

                </DatePicker>

            </SelectOrden>


            <SelectOrden>
                <h5>Forma de Pago</h5>
                <select>
                    <option>opcion1</option>
                    <option>opcion2</option>
                    <option>opcion3</option>
                    <option>opcion4</option>
                </select>
            </SelectOrden>
            <SelectOrden>
                <h5>Tipo de Cliente</h5>
                <select>
                    <option>opcion1</option>
                    <option>opcion2</option>
                    <option>opcion3</option>
                    <option>opcion4</option>
                </select>
            </SelectOrden>
            <SelectOrden>
                <h5>Rango Horario</h5>
                <select>
                    <option>Mañana</option>
                    <option>Tarde</option>
                </select>
            </SelectOrden>
        </DivDatosOrden>

    );
}

export default DatosOrden;