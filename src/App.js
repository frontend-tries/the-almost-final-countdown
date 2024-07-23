import Player from "./components/Player";
import TimerChallenger from "./components/TimerChallenger";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenger title={"Easy"} targetTime={15} />
        <TimerChallenger title={"Easy"} targetTime={15} />
        <TimerChallenger title={"Easy"} targetTime={15} />
        <TimerChallenger title={"Easy"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
