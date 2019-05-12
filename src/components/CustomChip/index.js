import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
	chip: {
		margin: theme.spacing.unit,
		paddingLeft: theme.spacing.unit,
	},
});


function CustomChip(props) {
	const {onDeleteChip, children, classes} = props

	return (
		<Chip
			label={children}
			onDelete={onDeleteChip && onDeleteChip(children)}
			color="secondary"
			className={classes.chip}
		/>
	)
}

CustomChip.propTypes = {
	children: PropTypes.string.isRequired,
	onDeleteChip: PropTypes.func,
}


export default withStyles(styles)(CustomChip)
