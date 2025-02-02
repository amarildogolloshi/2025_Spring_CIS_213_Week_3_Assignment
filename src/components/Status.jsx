import  './Status.css'

const Status = (props) => {
    return (
        <div className="status">
            <p>{props.status}:<span>{props.turn}</span> </p>
        </div>
    );
};

export default Status;