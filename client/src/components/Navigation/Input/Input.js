import './Input.css';

const Input = props => (
    <input className="input" type={props.type} name={props.name} placeholder={'Enter your ' + props.name + ' here...'}/>
)

export default Input;