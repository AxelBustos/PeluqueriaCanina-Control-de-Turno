import React,{Fragment,useState} from 'react';
import uuid from 'uuid/dist/v4';


const Fromulario = ({crearCita}) => {
    
    //state de cita

    const [cita, actualizarCita] = useState({

        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        descripcion:''
    });

    //actualizar State cada vez que se escribe

    const actualizarState = e => {

        actualizarCita({...cita, [e.target.name]: e.target.value})
            
    }

    //state para mostrar error

    const [error, actualizarError] = useState(false);
    
    //trear los datos
    const {mascota,propietario,fecha,hora,descripcion} = cita;
    //cuando el usuario presione submit

    const submitCita = e => {
        e.preventDefault();
        if(mascota.trim()==='' ||propietario.trim()==='' ||fecha.trim()==='' ||hora.trim()==='' || 
            descripcion.trim()===''){
            actualizarError(true);
            return;
        }
    //agregar id a la cita
    cita.id=uuid();
    // después de enviar el formulario desaparece el error
    actualizarError(false);

    crearCita(cita);

    //limpiar formulario despues que se envia
    actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        descripcion:''
    });
    }
    //

    return (  
    
            <Fragment>
                <h2>Crear Cita</h2>
                {error?<p className="alerta-error">Todos los campos son requeridos</p> :null}
                <form
                    onSubmit={submitCita}
                >
                    <label>Nombre de la mascota</label>
                    <input 
                    name="mascota"
                    type="text" 
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={mascota}

                    />

                    <label>Nombre del dueño</label>
                    <input 
                    name="propietario"
                    type="text" 
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={propietario}

                    />
                    <label>Fecha</label>
                    <input 
                    name="fecha"
                    type="date" 
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}

                    />

                    <label>Hora de entrada</label>
                    <input 
                    name="hora"
                    type="time" 
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}

                    />
                    
                    <label>Descripción de cita</label>
                    <textarea
                    name="descripcion" 
                    className="u-full-width"
                    placeholder="Descripción de la cita"
                    onChange={actualizarState}
                    value={descripcion}
                    ></textarea>

                    <button
                    type="submit"
                    className="u-full-width button-primary"
                    >Agregar</button>



                </form>
            </Fragment>
            

        
        
    );
}
 
export default Fromulario;
