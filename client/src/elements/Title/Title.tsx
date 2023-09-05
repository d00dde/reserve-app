import style from "./Title.module.css";

type TProps = {
  content: string,
}

export function Title({ content } : TProps) {
  return (
    <h3 className={style.title}>{content}</h3>
  );
}
