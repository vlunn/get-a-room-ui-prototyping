
import Button from '@material-ui/core/Button';
import './../styles/settingsPage.css';
import ListItemComposition from './MenuList';

const SettingsPage = () => {
  return (
    <div id="appStyle" >
      <h1 style={{ color: '#ff4800' }}>Preferences</h1>
      <div style={{ padding: '1em', paddingTop: '0' }}>
        <p id="titleStyle">
          Choose your office
        </p>
        <ListItemComposition></ListItemComposition>
      </div>
      <div id="buttongroupStyle">
        <Button id="confirmBtnStyle">Confirm</Button>
        <Button id="skipBtnStyle">Skip</Button>
      </div>
    </div>
  );
}

export default SettingsPage;
