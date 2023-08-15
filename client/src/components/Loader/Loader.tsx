import { useAppSelector } from "../../store/hooks";
import { selectMain } from "../../store/mainSlice";
import styles from './Loader.module.css';

export function Loader() {
  const { loading } = useAppSelector(selectMain);
  return(
    <>
      {loading ?
        <div className={styles.loader}>
          <div className={styles.ldsring}><div></div><div></div><div></div><div></div></div>
        </div>
        : null}
    </>
  )
}
