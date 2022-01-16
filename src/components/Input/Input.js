import './Input.css';

function Input(props){

    return(
        <div className='input-root'>
            <label>{props.label}</label> <br />
            <input type={props.type} value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default Input;