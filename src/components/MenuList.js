import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '10em',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    //maxHeight: '140px',
    maxHeight: '42px',  // TODO: pienempi valintaboksi, overlappää buttonit, yhtä leveät (tai ainakin yhtä korkeat?) buttonit ja otsikkoteksti
    margin: '-10px auto',
  },
  listSection: {
    backgroundColor: 'inherit',
    height: '2.1em',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

const listItemStyle = {
  border: '1px grey solid',
  borderBottom: '0px white solid',
  height: '2.5em',
  textAlign: 'center',
}

function PinnedSubheaderList(props) {
  const { classes } = props;

  return (
    <List className={classes.root} subheader={<li />}>
      <li key={`section`} className={classes.listSection}>
        <ul className={classes.ul}>
          {["Hermia", "Tampere, Keskusta", "Helsinki", "Jyväskylä", "Mikkeli"].map(item => (
            <ListItem style={listItemStyle} key={`item-${item}`}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}

PinnedSubheaderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PinnedSubheaderList);