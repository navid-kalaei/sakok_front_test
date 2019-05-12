import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AddCircleIcon from '@material-ui/icons/AddCircle'


const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: 8,
	},
	margin: {
		margin: theme.spacing.unit,
	},
	textField: {
		flexBasis: 200,
	},
	inputLabel: {
		marginTop: 16,
	}
})


class InputAdornments extends React.Component {
	state = {
		tagInput: '',
	}

	handleChange = prop => event => {
		this.setState({[prop]: event.target.value})
	}


	render() {
		const {onAddTag, classes} = this.props
		const {tagInput} = this.state

		return (
			<div className={classes.root}>
				<TextField
					id="tag"
					className={classNames(classes.margin, classes.textField)}
					variant="outlined"
					type="text"
					label="تگ"
					value={this.state.tag}
					onChange={this.handleChange('tagInput')}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<IconButton
									aria-label="Add tag icon"
									onClick={onAddTag(tagInput)}
									color="primary"
								>
									<AddCircleIcon/>
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</div>
		)
	}
}

InputAdornments.propTypes = {
	classes: PropTypes.object.isRequired,
	onAddTag: PropTypes.func,
}

export default withStyles(styles)(InputAdornments)