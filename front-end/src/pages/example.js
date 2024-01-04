import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  // using the react hook form -> library https://react-hook-form.com/form-builder
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="precio" {...register("precio", {required: true})} />
      <input type="text" placeholder="titulo" {...register("titulo", {required: true})} />
      <input type="text" placeholder="descripcion" {...register("descripcion", {required: true})} />
      <input type="number" placeholder="imagenes" {...register("imagenes", {required: true})} />

      <input type="submit" />
    </form>
  );
}