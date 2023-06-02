import { useRef } from "react";
import { Button } from "./Button";

export default function Button({ buttonText, handleAddTodoListItem }) {
  const ref = useRef(null!);
  return (
    <>
      <Button onClick={handleClick} ref={ref}>
        Test
      </Button>
    </>
  );
}