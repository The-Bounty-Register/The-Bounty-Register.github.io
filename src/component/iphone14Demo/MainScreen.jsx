import StatusBar from "./StatusBar";
import LockScreen from "./LockScreen";
import AppScreen from "./AppScreen";


const MainScreen = ({ isLocked, unlockPhone }) => (
    <div className={`mainScreen ${isLocked ? 'locked' : ''}`}>
        <StatusBar />
        {isLocked ? <LockScreen unlockPhone={unlockPhone} /> : <AppScreen />}
    </div>
);

export default MainScreen;