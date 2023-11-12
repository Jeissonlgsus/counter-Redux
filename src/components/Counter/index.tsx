// Importa las dependencias necesarias
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, increment, decrement } from '../../store'; // asume que 'store.ts' contiene la configuración de Redux
import styles from './styles.module.css'
// Componente de contador
const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.countainer}>
      <h1 className={styles.title}>Contador Redux</h1>
      <p className={styles.counter}>Contador:</p>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttons}>        
        <button className={styles.button} onClick={() => dispatch(increment())}>Incrementar</button>
        <button className={styles.button} onClick={() => dispatch(decrement())}>Decrementar</button>
      </div>
    </div>
  );
};

export default Counter;
