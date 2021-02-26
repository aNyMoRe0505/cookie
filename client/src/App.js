import { useState } from 'react';

const API_HOST = 'http://localhost:3000'

function App() {
  const [result, setResult] = useState();

  const setCookie = () => {
    fetch(`${API_HOST}/set-cookie`, {
      credentials: 'include',
    });
  };

  const readCookie = () => {
    fetch(`${API_HOST}/read-cookie`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(jsonResult => {
        setResult(jsonResult);
      });
  };

  return (
    <div>
      <button
        type="button"
        onClick={setCookie}>
        fetch /set-cookie
      </button>
      <button
        type="button"
        onClick={readCookie}>
        fetch /read-cookie
      </button>
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
}

export default App;
