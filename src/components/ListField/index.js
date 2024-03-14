import "./ListField.css";

const ListField = (props) => {

    const handleTyped = (event) => {
        props.handleChanged(event.target.value)
    }

    return (
        <div className="organo-list-field">
            <label>{props.label}</label>
            <select onChange={handleTyped} required={props.required} value={props.value}>
                <option value="" disabled>Selecione uma função...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListField