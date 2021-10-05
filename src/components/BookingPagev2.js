import './../styles/bookingPagev2.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

const RoomDetails = () => {
  return (
    <div className="detailsDiv" style={{ flexGrow: "1" }}>
      <IconButton size="small" id="iconBtn">
        <KeyboardArrowDownIcon style={{ color: "rgba(155, 155, 155, 0.84)", transform: "translate(0, 19px)" }}></KeyboardArrowDownIcon>
      </IconButton>
    </div>
  )
}

const RoomBlock = ({roomTitle, availability}) => {
  return (
    <div className={"columnDiv"}>
      <div className="roomBlock">
        <div style={{ flexGrow: "6", width: "38%" }}>
          <h3 className="roomTitle">{roomTitle}</h3>
          <div className="availabilityP"><i>Available: {availability} min</i></div>
        </div>
        <RoomDetails></RoomDetails>
        <div style={{ flexGrow: "3", textAlign: "end"/*, margin: "auto 0"*/}}>
          <button className="bookBtnStyle">Quick book</button>
        </div>
      </div>
    </div>
  )
}

const BookingPagev2 = () => {
  return (
    <div className="bookingPageStyle">
      <div className="centerBlock">
        <h2 className="titleStyle">Available rooms</h2>
        <div className="roomSelection">            
          <RoomBlock roomTitle={"Hermia joku"} availability="30"></RoomBlock>
          <RoomBlock roomTitle={"Kuitunen Observ..."} availability="45"></RoomBlock>
          <RoomBlock roomTitle={"Huone A"} availability="30"></RoomBlock>
          <RoomBlock roomTitle={"Kuitunen Observ..."} availability="90"></RoomBlock>
          <RoomBlock roomTitle={"Joku huone"} availability="15"></RoomBlock>
        </div>
      </div>
      <div className="menuPanelStyle">
        <MenuIcon className="burger"></MenuIcon>
      </div>
    </div>
  )
}

export default BookingPagev2;
