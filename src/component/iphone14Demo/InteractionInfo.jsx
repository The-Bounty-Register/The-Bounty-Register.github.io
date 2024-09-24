
const InteractionInfo = () => (
    <div className="interactionInfo hidden">
        <h1>The FitMeIn demo mobile application</h1>
        <p>Interactive interface of <b>iPhone 12</b> with the new <b>iOS 14.</b></p>
        <p>Some functions are interactive, events have been added to simulate the touch gestures of cell phones, for now, it only works on PC.</p>
        <p className="important">The camera app shows its interface and shows the new indicator led for camera and microphone use.</p>
        <div className="buttons">
            <div className="button buttonTurn" data-front="See Rear" data-back="See Front"></div>
        </div>
        <p>Follow the instructions below to test FitMeIn!</p>
        <ul>
            <li>Unlock the iPhone as usual, by scrolling up on the lock screen.</li>
            <li>Navigate to the FitMeIn mobile application (on the first screen)</li>
            <li>Once the application is loaded, use the following credentials to log in:</li>
            <ul>
                <li><b>Username:</b> johndoe</li>
                <li><b>Password:</b> johndoe123</li>
            </ul>
            <li>You will now be able to book machines!</li>
        </ul>
    </div>
);

export default InteractionInfo;