import App from "./App";


const AppScreen = () => (
    <div className="appScreen">
        <div className="mainApps">
            <div className="wrapperApps"></div>
        </div>
        <div className="wrapperDots"></div>
        <div className="deckApps">
            <App icon="Phone" index="1" />
            <App icon="Safari" index="2" />
            <App icon="iOsMessage" index="3" />
            <App icon="AppleMusic" index="4" />
        </div>
    </div>
);

export default AppScreen;

