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


function Tag(props) {
	const {onDeleteTag, children, classes} = props

	return (
		<Chip
			label={children}
			onDelete={onDeleteTag && onDeleteTag(children)}
			color="secondary"
			className={classes.chip}
		/>
	)
}

Tag.propTypes = {
	children: PropTypes.string.isRequired,
	onDeleteTag: PropTypes.func,
}


export default withStyles(styles)(Tag)
