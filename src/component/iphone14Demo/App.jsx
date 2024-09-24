
const App = ({ icon, index }) => (
    <div className="app" data-indeck={index}>
        <div className="icon" style={{ backgroundImage: `url(../Icons/${icon}.png)` }}></div>
    </div>
);


export default App;