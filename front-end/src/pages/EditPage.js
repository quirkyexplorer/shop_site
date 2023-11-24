import React from 'react'
import { Link } from 'react-router-dom';
import * as LR from "@uploadcare/blocks";
import styled from 'styled-components'
LR.registerBlocks(LR);

const EditPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
            
const Form = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

export default function EditPage() {
  return (
    <EditPageWrapper>

      <div style={{height: 100}}>
        <Link to={'/'}>home</Link>
      </div>
      <h2>
      Bienvenida a la página de edición
      </h2>
      <Form onSubmit={'handleSubmit'}>
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
      </Form>

      <lr-config
        ctx-name="my-uploader"
        pubkey="b739047dcf890df23203"
        img-only="true"
        multiple="false"
        max-local-file-size-bytes="524288000"
        use-cloud-image-editor="true"
        source-list="local, camera, instagram"
      >
      </lr-config>
      <lr-file-uploader-regular
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.25.0/web/lr-file-uploader-regular.min.css"
        ctx-name="my-uploader"
        class="my-config"
      >
      </lr-file-uploader-regular>
    </EditPageWrapper>
  )
};
