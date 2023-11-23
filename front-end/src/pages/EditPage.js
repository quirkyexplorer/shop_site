import React from 'react'

export default function EditPage() {
  return (
    <div>
      <h2>
      Welcome to the edit page
      </h2>
      <form onSubmit={'handleSubmit'}>
        <input placeholder='Producto'>Nombre del Producto:</input>
        <br/>
        <input placeholder='Price'>Precio:</input>
        <br/>
        <input placeholder='Descripcion'>Breve descripcion:</input>
        <br/>
        <button type='submit'></button>
      </form>
    </div>
  )
}
