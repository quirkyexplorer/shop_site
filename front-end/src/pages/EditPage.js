import { useState, useEffect, useRef, useCallback } from "react";
import * as LR from "@uploadcare/blocks";
import styled from "styled-components";
LR.registerBlocks(LR);

export default function EditPage() {
  const dataOutputRef = useRef();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({ 
    precio: "", 
    titulo: "", 
    descripcion: "" 
  });
  
  const handleUploaderEvent = useCallback((e) => {
    const { data } = e.detail;
    setFiles(data);
  }, []);
  //console.log("files", files);

  useEffect(() => {
    const el = dataOutputRef.current;
    el?.addEventListener("lr-data-output", handleUploaderEvent);
    return () => {
      el?.removeEventListener("lr-data-output", handleUploaderEvent);
    };
  }, [handleUploaderEvent]);

  // input has its own properties called name and value
  const handleInputChange = (event) => {  
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  } 
  console.log('input change', formData);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = {
      price: 50.00,
      title: "Product Title",
      description: "Product Description",
      imageId: [1, 2, 3]
    };

    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Server response:', data);

      // Reset the form fields
      setFormData({
        precio: '',
        titulo: '',
        descripcion: '',
      });
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };


  return (
    <EditPageWrapper id="EditPageWrapper">
     
      <Title id="div">Bienvenida a la página de edición</Title>
      
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "15rem"}}>
        <input 
          placeholder="precio" 
          name="precio" 
          value={formData.precio} 
          onChange={handleInputChange}>
        </input>
        <input 
          placeholder="titulo" 
          name="titulo" 
          value={formData.titulo} 
          onChange={handleInputChange}>
        </input>
        <input 
          placeholder="descripcion" 
          name="descripcion" 
          value={formData.descripcion} 
          onChange={handleInputChange}>
        </input>
        <button type="submit">guardar</button>
      </form>

      {/* <FormWrapper id="FormWrapper"> */}
        {/* <Form id="Form" onSubmit={"handleSubmit"}>
          Nombre de la prenda:

          <InputWrapper>
            <Input type={"text"} placeholder="Producto" value={""} />
          </InputWrapper>
          
          Precio:
          <InputWrapper>
            <Input type={"text"} placeholder="Precio" value={""} />
          </InputWrapper>
          
          Breve descripción:
          <InputWrapper>
            <Input type={"text"} placeholder="Descripcion" value={""} />
          </InputWrapper>
          <Button id='Button' type="submit">Guardar</Button >
        </Form> */}

        {/* <lr-config
          ctx-name="my-uploader"
          pubkey="b739047dcf890df23203"
          img-only="true"
          multiple="false"
          max-local-file-size-bytes="524288000"
          use-cloud-image-editor="true"
          source-list="local, camera, instagram"
        ></lr-config>

        <lr-file-uploader-regular
          ctx-name="my-uploader"
          class="my-config"
          css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.25.0/web/lr-file-uploader-regular.min.css"
        >
          <lr-data-output
            ref={dataOutputRef}
            ctx-name="my-uploader"
            pubkey="b739047dcf890df23203"
            hidden
            use-event
            onEvent={handleUploaderEvent}
          ></lr-data-output>
        </lr-file-uploader-regular>

      </FormWrapper> */}
      

      <div>
        {files.map((file) => (
          <img key={file.uuid} src={file.cdnUrl} alt="Preview" />
        ))}
      </div>
    </EditPageWrapper>
  );
}

/*
  color scheme
  hot pink hsl(315, 100%, 50%);
  dark pink hsl(300, 100%, 35%);
  red pink hsl(333, 100%, 50%);
  light purple hsl(265, 100%, 50%);
  dark purple hsl(265, 100%, 35%);
  dark blue hsl(198, 82%, 5%).
  light teal hsl(171, 100%, 49%)
*/

const EditPageWrapper = styled.div`
  height: 100vh;
  background: conic-gradient( 
    from 180deg at 50% 50%,
    hsl(300, 100%, 35%),
    hsl(315, 100%, 50%), 
    hsl(333, 100%, 50%),
    hsl(315, 100%, 50%), 
    hsl(300, 100%, 35%)
    );
  position: relative;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  justify-content:center;
  padding: 40px;
`;


const FormWrapper = styled.div`
  position: absolute;
  left: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  padding: 1rem 2rem;
  width: fit-content;
  background-color: hsl(265, 100%, 35%);
  border-radius: 1rem;
`;

const InputWrapper = styled.div`
  background-color: white;
  padding: .5rem;
  border-radius: .5rem;
`
const Form = styled.div`
  color: hsl(171, 100%, 49%);
  font-weight: 600;
  display: flex;
  gap: .8rem;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Input = styled.input`
  //background-color: white;
  border: none;
  outline: none;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  width: 8rem;
  align-self: center;
  border-radius: 5rem;
  background-color: hsl(198, 82%, 5%);
  color: hsl(171, 100%, 49%);
  font-weight: 600;
  
`;