import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import styles from './styles'


const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
]

class TextFields extends React.Component {
	state = {
		currency: 'EUR',
	}

	handleChange = name => event => {
		this.setState({[name]: event.target.value})
		this.props.handleCategoryValue(event.target.value)
	}

	render() {
		const {classes} = this.props

		return (
			<form className={classes.container} noValidate autoComplete="off">

				<TextField
					id="standard-select-currency"
					select
					label="دسته‌بندی"
					className={classes.textField}
					value={this.state.currency}
					onChange={this.handleChange('currency')}
					SelectProps={{
						MenuProps: {
							className: classes.menu,
						},
					}}
					margin="normal"
					variant="outlined"
				>
					{currencies.map(option => (
						<MenuItem key={option.value} value={option.value} className={classes.rtl}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</form>
		)
	}
}

TextFields.propTypes = {
	classes: PropTypes.object.isRequired,
	handleCategoryValue: PropTypes.func.isRequired,
}

export default withStyles(styles)(TextFields)