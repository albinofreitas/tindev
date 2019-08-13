import React, { useState } from "react";

import api from "../../services/api";
import "./Login.css";
import logo from "../../assets/logo.svg";

function Login({ history }) {
  const [username, setUsername] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setAlert(false);

    if (!username) return;

    setLoading(true);

    api
      .post("devs", { username })
      .then(res => {
        const { _id } = res.data;

        history.push(`/dev/${_id}`);
      })
      .catch(() => {
        setAlert("Usuário inválido.");
        setLoading(false);
      });
  }

  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev Logo" />
        <input
          type="text"
          placeholder="Digite seu usuário do github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {alert && <label>{alert}</label>}
        <button type="submit" disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? "Carregando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default Login;
