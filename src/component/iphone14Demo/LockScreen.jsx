import SysIcon from "./SysIcon";


const LockScreen = ({ unlockPhone }) => (
    <div className="lockScreen" onClick={unlockPhone}>
        <div className="up">
            <div className="lockIcon"></div>
            <div className="hour"></div>
            <div className="date">Wednesday, 16 of September</div>
        </div>
        <div className="down">
            <SysIcon icon="flash" />
            <SysIcon icon="camera" />
        </div>
        <div className="unlockBar" data-msg="Swipe up to Unlock"></div>
    </div>
);

export default LockScreen;