import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import withStayles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CustomChip from '../CustomChip'
import BACKEND_URL from '../../config/apis'


const styles = theme => ({
	rtl: {
		direction: 'rtl',
	},
	description: {
		marginTop: theme.spacing.unit * 2,
	},
	tagBox: {
		justify: 'flex-end',
	},
})


const handleClose = (handleCategoryDialog) => () => (handleCategoryDialog(false))

const onCategoryInputChange = (handleCategoryInput) => (event) => (handleCategoryInput(event.target.value))

const onAddCategory = (newCategory, categories, handleCategories) => () => {
	if(!categories.includes(newCategory)) {
		const categoryAPIReq = {
			label: newCategory,
			value: newCategory
		}

		axios.post(BACKEND_URL.category, categoryAPIReq).then(({data}) => handleCategories([...categories, data.value]))
	}
}

const CategoryDialog = (props) => {
	const {isCategoryDialogOpen, handleCategoryDialog, classes} = props
	const [categories, handleCategories] = useState([])
	const [categoryInput, handleCategoryInput] = useState('')

	useEffect(() => {
		axios.get(BACKEND_URL.category).then(({data}) => (handleCategories(data.map(category => category.label))))
	}, [handleCategories])

	return (
		<Dialog
			open={isCategoryDialogOpen}
			onClose={handleClose(handleCategoryDialog)}
			aria-labelledby="category-management-dialog-title"
			maxWidth="sm"
			fullWidth
		>
			<DialogTitle id="category-management-dialog-title" className={classes.rtl}>مشخصات تصویر</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					id="title"
					name="title"
					type="text"
					value={categoryInput}
					// multiline
					fullWidth
					rowsMax={1}
					className={classes.rtl}
					onChange={onCategoryInputChange(handleCategoryInput)}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="Add category icon"
									onClick={onAddCategory(categoryInput, categories, handleCategories)}
									color="primary"
								>
									<AddCircleIcon/>
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				<Grid container spacing={0} className={classes.rtl}>
					{categories.map(category => (
						<Grid item xs={2} key={category}>
							<CustomChip>{category}</CustomChip>
						</Grid>
					))}
				</Grid>
			</DialogContent>
			<DialogActions className={classes.rtl}>
				<Button onClick={handleClose(handleCategoryDialog)} color="primary" variant="contained">
					بستن
				</Button>
			</DialogActions>
		</Dialog>
	)
}


CategoryDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	isCategoryDialogOpen: PropTypes.bool.isRequired,
	handleCategoryDialog: PropTypes.func.isRequired,
}

export default withStayles(styles)(CategoryDialog)
