import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.gameName}</h1>
        </div>
    );
};

export default Header;