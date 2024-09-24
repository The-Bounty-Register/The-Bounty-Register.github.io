import Notch from "./Notch";
import MainScreen from "./MainScreen";

const BlackBorder = ({ isLocked, unlockPhone }) => (
    <div className="blackBorder">
        <Notch />
        <MainScreen isLocked={isLocked} unlockPhone={unlockPhone} />
    </div>
);

export default BlackBorder;