
const StatusBar = () => (
    <div className="statusBar">
        <div className="leftSide">
            <div className="operator">Jio</div>
            <div className="hour hidden"></div>
            <div className="widgetPlus"></div>
        </div>
        <div className="rightSide">
            <div className="signal mid"><i className="bar"></i></div>
            <div className="data">4G</div>
            <div className="battery mid">
                <div className="shell">
                <div className="percent" style={{ width: '65%' }}></div>
                </div>
                <div className="lead">
                <div className="tip"></div>
                </div>
                <div className="percent-value" style={{ color: 'black', fontWeight: 'bold', fontSize: '9px', zIndex: 9, margin: '80px' }}></div>
            </div>
            <div className="exitShake">Done</div>
        </div>
    </div>
);

export default StatusBar;