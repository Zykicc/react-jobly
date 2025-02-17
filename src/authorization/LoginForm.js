import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";

function LoginForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div>
      <div>
        <h3>Log In</h3>

        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <button onSubmit={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
