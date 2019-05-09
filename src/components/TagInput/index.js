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
		tag: '',
	}

	handleChange = prop => event => {
		this.setState({[prop]: event.target.value})
	}

	handleClickShowPassword = () => {
		this.setState(state => ({showPassword: !state.showPassword}))
	}

	render() {
		const {classes} = this.props

		return (
			<div className={classes.root}>
				<TextField
					id="tag"
					className={classNames(classes.margin, classes.textField)}
					variant="outlined"
					type="text"
					label="تگ"
					value={this.state.tag}
					onChange={this.handleChange('tag')}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<IconButton
									aria-label="Toggle password visibility"
									onClick={this.handleClickShowPassword}
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
}

export default withStyles(styles)(InputAdornments)