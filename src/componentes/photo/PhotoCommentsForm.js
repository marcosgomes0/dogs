import React from "react";
import { COMMENT_POST } from "../../api";
import useFetch from "../../hooks/useFetch";

import Error from "../interface/Error";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import Styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { error, request } = useFetch();
  const [comment, setComment] = React.useState(null);

  function handleChange({ target }) {
    setComment(target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, token, { comment });

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={`${Styles.form} ${single  ? Styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={Styles.textarea}
        value={comment ? comment : ""}
        name="comment"
        id="commnet"
        placeholder="Comente..."
        onChange={handleChange}
      />
      <button className={Styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
