import React from 'react'
import { Link } from 'react-router-dom';

export default function EditPage() {
  return (
    <div>

      <div style={{height: 100}}>
        <Link to={'/'}>home</Link>
      </div>
      <h2>
      Bienvenida a la página de edición
      </h2>
      <form onSubmit={'handleSubmit'}>
        Nombre de la prenda:
        <input type={'text'} placeholder='Producto' value={''}/>
        <br/>
        Precio:
        <input type={'text'} placeholder='Price' value={''}/>
        <br/>
        Breve descripción:
        <input type={'text'} placeholder='Descripcion' value={''}/>
        <br/>
        <button type='submit'>Guardar</button>
      </form>
    </div>
  )
};
