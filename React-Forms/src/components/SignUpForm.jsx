import { useState } from "react";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

export default function SignUpForm() {
  return <h2>Sign Up!</h2>;

  <form>
    <label>
       Username: <input type="text"value={username} onChange={(e) => setUsername(e.target.value)} />/>
    </label>
    <label>
      Password: <input type="text"value={password} onChange={(e) => setPassword(e.target.value)} /> />
    </label>
    <button>Submit</button>
  </form>
}