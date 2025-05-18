import './Generic.css'

type ButtonProps = {
    isPrimary: boolean;
    action: (e: unknown) => void;
    btnText: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button 
    className={props.isPrimary ? 'primaryBtn' : 'secondaryBtn'} 
    onClick={props.action}>
        {props.btnText}
    </button>
  )
}

export default Button