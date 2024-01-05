import { useState, useEffect, useRef, useCallback } from "react";
import * as LR from "@uploadcare/blocks";
import styled from "styled-components";
LR.registerBlocks(LR);

export default function EditPage() {
  const dataOutputRef = useRef();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({ 
    price: 0, 
    title: "", 
    description: "" ,
    imageUuid: []
  });
  
  const handleUploaderEvent = useCallback((e) => {
    const { data } = e.detail;
    setFiles(data);
  }, []);
  // console.log("files", files);
  // console.log(files[0]?.uuid? files[0].uuid : '' );
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
  
    // If the name is "price," parse the value to an integer
    const parsedValue = name === 'price' ? parseInt(value) || 0 : value;
  
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImageUuid = files[0].uuid;
    console.log("image uuid", newImageUuid);
    console.log(formData, "FormData with json stringified");
    formData.imageUuid.push(newImageUuid);
    console.log(formData, "formdata finished");

    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Server response:', data);

      // Reset the form fields
      setFormData({
        price: '',
        title: '',
        description: '',
        imageUuid: []
      });

      setFiles([]);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };


  return (
    <EditPageWrapper id="EditPageWrapper">
     
      <Title id="div">Bienvenida a la página de edición</Title>

      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>

        <FormWrapper id="FormWrapper"  >
          {/* just found out i cant modify form with styled components because it wont bind the onSubmit part */}
          <form id="Form" style={formStyles} onSubmit={handleSubmit}>
            Precio:

            <InputWrapper>
              <Input 
                placeholder="precio" 
                name="price" 
                value={formData.price} 
                onChange={handleInputChange}
              />
            </InputWrapper>
            
            Nombre de la prenda:
            <InputWrapper>
              <Input 
              placeholder="titulo" 
              name="title" 
              value={formData.title} 
              onChange={handleInputChange}
              />
            </InputWrapper>
            
            Breve descripción:
            <InputWrapper>
              <Input 
                placeholder="descripcion" 
                name="description" 
                value={formData.description} 
                onChange={handleInputChange} 
              />
            </InputWrapper>
              {/* below is the uploader settings */}
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
              {/* this is the actual uuploader button */}
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

            <Button  type="submit" id='Button'>Guardar</Button >
          </form>
          <div>
          {files.map((file) => (
            <img key={file.uuid} src={file.cdnUrl} alt="Preview" style={{width: "500px", height: "auto"}}/>
          ))}
        </div>
        </FormWrapper>
      
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
  min-height: 100vh;
  height: auto;
  background: conic-gradient( 
    from 180deg at 50% 50%,
    hsl(300, 100%, 35%),
    hsl(315, 100%, 50%), 
    hsl(333, 100%, 50%),
    hsl(315, 100%, 50%), 
    hsl(300, 100%, 35%)
    );
  //position: relative;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  justify-content:center;
  padding: 40px;
`;


const FormWrapper = styled.div`
  /* position: absolute; */
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

const formStyles = {
  color: 'hsl(171, 100%, 49%)',
  fontWeight: 600,
  display: 'flex',
  gap: '.8rem',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingBottom: '2rem',
};

const InputWrapper = styled.div`
  background-color: white;
  padding: .5rem;
  border-radius: .5rem;
`
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
  background-color: hsl(171, 0%, 94%);
  color: hsl(198, 82%, 5%);
  font-weight: 600;
`;

