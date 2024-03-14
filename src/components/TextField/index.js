import "./TextField.css"

const TextField = (props) => {

    const handleTyped = (event) => {
        props.handleChanged(event.target.value)
    }

    return (
        <div className="organo-text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={handleTyped} required={props.required} type="text" placeholder={props.placeholder} />
        </div>
    );
}

export default TextField