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

function handleDelete() {
	alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function Tag(props) {
	const {isInImageDialog, children, classes} = props

	return (
		<Chip
			label={children}
			onDelete={isInImageDialog && handleDelete}
			color="secondary"
			className={classes.chip}
		/>
	)
}

Tag.propTypes = {
	children: PropTypes.string.isRequired,
	isInImageDialog: PropTypes.bool.isRequired,
}

Tag.defaultProps = {
	isInImageDialog: false,
}

export default withStyles(styles)(Tag)