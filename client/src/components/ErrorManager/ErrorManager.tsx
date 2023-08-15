import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectMain } from "../../store/mainSlice";

export function ErrorManager() {
  const [errorMessages, setErrorMessages] = useState<{key: number, message: string, type: string }[]>([]);
  const { message } = useAppSelector(selectMain);
  useEffect(() => {
    if(message) {
      const newItem = { key: Date.now(), message: message.text, type: message.type };
      setErrorMessages((prev) => [...prev, newItem]);
      setTimeout(
        () => setErrorMessages((prev) => prev.filter((item) => item.key !== newItem.key)),
        2000)
    }
  }, [message])
  return (
    <ul className="error-manager">{errorMessages.map((item) => <li key={item.key}>{item.type}:{item.message}</li>)}</ul>
  );
}
