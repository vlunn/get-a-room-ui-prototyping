import './../styles/bookingPage.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RoomDetails = () => {
  return (
    <div className="detailsDiv">
      <KeyboardArrowDownIcon style={{ color: "#464646" }}></KeyboardArrowDownIcon>
    </div>
  )
}

const RoomBlock = ({roomTitle, availability}) => {
  return (
    <div className={"columnDiv"}>
      <div className="roomBlock">
        <div style={{ flexGrow: "2" }}>
          <h3 className="roomTitle">{roomTitle}</h3>
          <div className="availabilityP"><i>Available: {availability} min</i></div>
        </div>
        <div style={{ flexGrow: "1", textAlign: "end"/*, margin: "auto 0"*/}}>
          <button className="bookBtnStyle">Quick book</button>
        </div>
      </div>
      <RoomDetails></RoomDetails>
    </div>
  )
}

const BookingPage = () => {
  return (
    <div className="bookingPageStyle">
      <div className="menuPanelStyle">
        <MenuIcon className="burger"></MenuIcon>
      </div>
      <div className="centerBlock">
        <h2 className="titleStyle">Available rooms</h2>
        <div className="roomSelection">            
          <RoomBlock roomTitle={"Huone A"} availability="30"></RoomBlock>
          <RoomBlock roomTitle={"Kuitunen Observat..."} availability="90"></RoomBlock>
          <RoomBlock roomTitle={"Joku huone"} availability="15"></RoomBlock>
          <RoomBlock roomTitle={"Joku toinen huone"} availability="15"></RoomBlock>
        </div>
      </div>
    </div>
  )
}

export default BookingPage;
