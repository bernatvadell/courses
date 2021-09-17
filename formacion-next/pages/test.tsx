import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Layout } from "../components/templates/_layout";

const TestPage: FC = () => {
  // states
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState<any[]>([]);
  const items = useMemo(() => values.splice(0, 10), [values]);

  // callbacks
  const handleIncrementa = useCallback(() => {
    setCounter((currentState) => currentState + 1);
  }, []);

  // effects
  useEffect(() => {
    console.log("paso por aqui...");
  }, [handleIncrementa]);

  return (
    <Layout>
      <p>{counter}</p>
      <button onClick={handleIncrementa}>Incrementalo!!!!!</button>
    </Layout>
  );
};

export default TestPage;
