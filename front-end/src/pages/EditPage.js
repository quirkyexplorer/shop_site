import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import * as LR from "@uploadcare/blocks";
import styled from "styled-components";
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
  const dataOutputRef = useRef();
  const [files, setFiles] = useState([]);

  const handleUploaderEvent = useCallback((e) => {
    const { data } = e.detail;
    setFiles(data);
  }, []);
  console.log("files", files);
  useEffect(() => {
    const el = dataOutputRef.current;
    el?.addEventListener("lr-data-output", handleUploaderEvent);
    return () => {
      el?.removeEventListener("lr-data-output", handleUploaderEvent);
    };
  }, [handleUploaderEvent]);

  return (
    <EditPageWrapper>
      <div style={{ height: 100 }}>
        <Link to={"/"}>home</Link>
      </div>
      <h2>Bienvenida a la página de edición</h2>
      <Form onSubmit={"handleSubmit"}>
        Nombre de la prenda:
        <input type={"text"} placeholder="Producto" value={""} />
        <br />
        Precio:
        <input type={"text"} placeholder="Price" value={""} />
        <br />
        Breve descripción:
        <input type={"text"} placeholder="Descripcion" value={""} />
        <br />
        <button type="submit">Guardar</button>
      </Form>

      <lr-config
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

      <div>
        {files.map((file) => (
          <img key={file.uuid} src={file.cdnUrl} alt="Preview" />
        ))}
      </div>
    </EditPageWrapper>
  );
}
