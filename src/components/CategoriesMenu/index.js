import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {withStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import styles from './styles'
import BACKEND_API from '../../config/apis'


class TextFields extends React.Component {

	componentDidMount() {
		axios.get(BACKEND_API.category).then(({data}) => {
			this.setState({categories: data})
		})
	}

	state = {
		selectedCategory: '',
		categories: [],
	}

	handleChange = name => event => {
		const selectedCategoryValue = event.target.value
		this.setState({[name]: selectedCategoryValue})
		const selectedCategoryId = this.state.categories.filter(category => category.value === selectedCategoryValue)[0]._id
		this.props.handleSelectedCategoryId(selectedCategoryId)
	}

	render() {
		const {classes} = this.props
		const {selectedCategory, categories} = this.state

		return (
			<form className={classes.container} noValidate autoComplete="off">

				<TextField
					id="category"
					select
					label="دسته‌بندی"
					className={classes.textField}
					value={selectedCategory}
					onChange={this.handleChange('selectedCategory')}
					SelectProps={{
						MenuProps: {
							className: classes.menu,
						},
					}}
					margin="normal"
					variant="outlined"
				>
					{categories.map(option => (
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
	handleSelectedCategoryId: PropTypes.func.isRequired,
}

export default withStyles(styles)(TextFields)