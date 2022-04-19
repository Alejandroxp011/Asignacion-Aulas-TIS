import React from 'react';
import Welcome from '@/Jetstream/Welcome';
import AppLayout from '@/Layouts/AppLayoutTeacher';
import Sidebar from '@/Jetstream/Sidebar';
import { solicitudes } from '@/Const/solicitudes';
import Cardsolicitud from '@/Jetstream/Cardsolicitud';
import { useState, useEffect } from 'react';
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000'
export default function () {
  const [listaEstudiantes, setListaEstudiantes] = useState([])
  const [materia, setMateria] = useState('elementos')
  const [grupos, setGrupos] = useState([])
  useEffect(()=>{
      getEstudiantes();
      getGrupos();
  },[])

  const getGrupos = async () => {
    const grupos = await axios.post(`${endpoint}/grupo`,{materia:'elementos'})
    setGrupos(grupos.data)
    console.log(grupos.data)
  }

  const getEstudiantes = async () => {
      const res = await axios.get(`${endpoint}/solicitudes`)
      setListaEstudiantes(res.data)
      console.log(res.data)
  }
  return (
    <AppLayout title="Informacion">
      <div className='grid grid-cols-6 gap-4'>
      <div className=" colorPrimary mt-6 drop-shadow-lg ">
        <Sidebar></Sidebar>
     
      </div>
      <div className='col-span-5'>
        <div className='ml-5 mt-6 '>
       <h1 className='font-bold'>Solicitudes Pendientes</h1> 
        <div>
         {solicitudes.map((card)=>(
           <Cardsolicitud{...card}/>
         ))}
        </div>
        </div>
  
      </div>

      </div>

    </AppLayout>
  );
}
