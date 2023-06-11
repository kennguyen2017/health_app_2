import { Interface } from "readline";

export Interface IButton {
  buttonText:string,
  handleClick: string
}
export default function Button(props: IButton) {
  function handleClick(e)=>{
    console.log("e")
  }
  return (
    <>
      <button onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
}