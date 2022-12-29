import React, { useState } from 'react';
import { Triangle } from 'react-loader-spinner';


const Loading = () => {

  const [loading, setLoading] = useState(false);

  loading ? setTimeout(() => {setLoading(false)}, 3000) : <div/>

  return (
    <>
      {loading ? <Triangle/> : <button onClick={() => setLoading(true) }>Start Loading</button>}
      
    </>
  );
}

export default Loading;
