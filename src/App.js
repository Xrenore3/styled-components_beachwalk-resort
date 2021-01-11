import { useState } from 'react';
import GlobalsStyles from './components/globals/GlobalsStyles';
import Home from './pages/Home';
import rooms from './components/home/rooms-data'


function App() {
  const initialState = { showBannerDetails: false, showAboutDetails: false, rooms:rooms };
  const [state, setState] = useState(initialState);

  const setBannerDetails = () => setState({ ...state, showBannerDetails: true });
  const setAboutDetails = () => setState({ ...state, showAboutDetails: true });
  const setRoomDetails = (id) => {
  
    return setState({
      ...state, rooms: state.rooms.map(room => {
        if (id === room.id) {
          return { ...room, showDetails: !room.showDetails }
        } else { return room }
      })
    })
  }


  return (
    <>
      <GlobalsStyles />
      <Home state={state}
        setBannerDetails={setBannerDetails}
        setAboutDetails={setAboutDetails}
        setRoomDetails={setRoomDetails} />
    </>
  );
}

export default App;
