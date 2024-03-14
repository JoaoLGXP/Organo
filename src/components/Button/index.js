import "./Button.css";

const Button = (props) => {
    return (
        <button className="organo-button">
            {props.children}
        </button>
    );
}

export default Button