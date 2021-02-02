import React,{Fragment, useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Citas'


function App() {

  // agregar citas al localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales=[];
  }
  //arreglo de citas
 const [citas, guardarCitas] = useState([]);

 // guardar las citas para luego mostrarlas

 const crearCita = cita => {
    guardarCitas([...citas, cita])
 }

 useEffect( () => {
  if(citasIniciales){

    localStorage.setItem('citas',JSON.stringify(citas))

  }else{
    localStorage.setItem('sitas',JSON.stringify([]));
  }

},[citas,citasIniciales]);
 
 //funcion para eliminar cita

 const eliminarCita = id =>{
  const nuevasCitas = citas.filter(cita => cita.id !== id);
  guardarCitas(nuevasCitas);
}

//mostrar titulo dependiendo si hay citas

const titulo = citas.length ===0? 'No hay citas' :'Administra tus citas';

  return (

    <Fragment>

    <h1>Administrador de pacientes</h1>
    <div className="container">
      <div className="row"> 
        <div className="one-half column">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                    <Cita 
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
  
                    />
                  ))}
              
          </div>
      </div>
    </div>

</Fragment>
      
  );
}

export default App;
