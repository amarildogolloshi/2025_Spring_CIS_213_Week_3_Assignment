import './Restart.css'

const Restart = (props) => {

   let  handleClick = () => {
        props.setRestart(true);
    }
    return (
        <div className="restart">
            <button onClick={() => handleClick()}>Restart</button>
        </div>
    );
};

export default Restart;