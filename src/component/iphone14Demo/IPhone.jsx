import Buttons from "./Buttons";
import BackSide from "./BackSide";
import BlackBorder from "./BlackBorder";
import { useState } from "react";


const IPhone = () => {
    const [isLocked, setIsLocked] = useState(true);

    const unlockPhone = () => {
        setIsLocked(false);
    };

    return (
        <div className="iphone initAnimation">
            <div className="borderColor">
                <Buttons />
                <BackSide />
                <BlackBorder isLocked={isLocked} unlockPhone={unlockPhone} />
            </div>
        </div>
    );
};

export default IPhone;