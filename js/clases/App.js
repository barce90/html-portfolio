import {datosCita, nuevaCita} from '../funciones.js';

import {mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario} from '../selectores.js';


class App{
    constructor(){
       this.iniApp();
    }

    iniApp(){
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        //formulario nuevas citas
        formulario.addEventListener('submit', nuevaCita);

    }
}

export default App;