import './Button.css';

function Button(props){

    return(
        <div className='button-root'>
            <button onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default Button;