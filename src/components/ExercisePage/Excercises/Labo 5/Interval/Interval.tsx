import { useEffect, useState } from "react";

const Timer = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    }

  }, [number]);

  return <p>{number}</p>;
};

const Date2 = () => {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    let dateTimer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(dateTimer);
    }

  }, []);

  return <p>{`${Time.getHours()}:${Time.getMinutes()}:${Time.getSeconds()}`}</p>;
};

const Random = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setNumber((number) => number = Math.floor((Math.random() * 100)));
    }, 1000);

    return () => {
      clearInterval(timer);
    }

  }, [number]);

  return <p>{number}</p>;
};

const Random2 = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setNumber((number) => number = Math.floor((Math.random() * 100) + 100));
    }, 1000);

    return () => {
      clearInterval(timer);
    }

  }, [number]);

  return <p>{number}</p>;
};

const Interval = () => {
  return (
    <div>
      <h1>Labo 5</h1>
      <Timer />
      <Date2 />
      <Random/>
      <Random2/>
    </div>
  );
};

export default Interval;
