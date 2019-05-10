import React, {useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Dropzone from '../Dropzone'
import CategoriesMenu from '../CategoriesMenu'
import TagInput from '../TagInput'
import Tag from '../Tag'
import BACKEND_API from '../../config/apis'


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
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

const handleClose = (handleImageDialog) => () => (handleImageDialog(false))

const onTitleChange = (handleTitle) => (event) => (handleTitle(event.target.value))

const onDescriptionChange = (handleDescription) => (event) => (handleDescription(event.target.value))

const submissionConfig = {
	headers: {
		'content-type': 'multipart/form-data',
	},
}

// TODO: reset states
// TODO: set default category to none

const onSubmitImage = ({
	                       handleNewOrModifiedImage,
	                       handleImageDialog,
	                       image,
	                       title,
	                       description,
	                       selectedCategoryId,
	                       tags,
                       }) => () => {
	const form = new FormData()
	form.append('image', image)
	form.append('title', title)
	form.append('description', description)
	form.append('category', selectedCategoryId)
	tags.map(tag => form.append('tags', tag))

	handleImageDialog(false)
	axios.post(BACKEND_API.image, form, submissionConfig).then(({data}) => {})
}

const ImageDialog = (props) => {
	const {handleNewOrModifiedImage, isImageDialogOpen, handleImageDialog, classes} = props
	// TODO: handle tags
	// eslint-disable-next-line
	const [tags, handleTags] = useState(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9'])
	const [selectedCategoryId, handleSelectedCategoryId] = useState('none')
	const [description, handleDescription] = useState('')
	const [title, handleTitle] = useState('')
	const [image, handleImage] = useState(null)

	return (
		<Dialog
			open={isImageDialogOpen}
			onClose={handleClose(handleImageDialog)}
			aria-labelledby="form-dialog-title"
			maxWidth="sm"
			fullWidth
		>
			<DialogTitle id="form-dialog-title" className={classes.rtl}>مشخصات تصویر</DialogTitle>
			<DialogContent>
				<Dropzone handleImage={handleImage}/>
				<Typography variant="body1" className={classNames(classes.rtl, classes.description)}>تیتر:</Typography>
				<TextField
					autoFocus
					margin="dense"
					id="title"
					name="title"
					type="text"
					value={title}
					// multiline
					fullWidth
					rowsMax={1}
					className={classes.rtl}
					onChange={onTitleChange(handleTitle)}
				/>
				<Typography variant="body1" className={classNames(classes.rtl, classes.description)}>توضیحات:</Typography>
				<TextField
					autoFocus
					margin="dense"
					id="description"
					name="description"
					type="text"
					value={description}
					multiline
					fullWidth
					rowsMax={2}
					className={classes.rtl}
					onChange={onDescriptionChange(handleDescription)}
				/>
				<Grid container spacing={0} className={classes.rtl}>
					<Grid item xs={6}>
						<TagInput/>
					</Grid>
					<Grid item xs={6}>
						<CategoriesMenu handleSelectedCategoryId={handleSelectedCategoryId}/>
					</Grid>
					{tags.map(tag => (
						<Grid item key={tag}>
							<Tag>{tag}</Tag>
						</Grid>
					))}
				</Grid>


			</DialogContent>
			<DialogActions className={classes.rtl}>
				<Button onClick={handleClose(handleImageDialog)} color="secondary" variant="contained">
					لغو
				</Button>
				<Button
					onClick={onSubmitImage({
						handleNewOrModifiedImage,
						handleImageDialog,
						image,
						title,
						description,
						selectedCategoryId,
						tags,
					})}
					color="primary"
					variant="contained"
				>
					ارسال
				</Button>
			</DialogActions>
		</Dialog>
	)
}


ImageDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	handleImageDialog: PropTypes.func.isRequired,
	isImageDialogOpen: PropTypes.bool.isRequired,
}

export default withStyles(styles)(ImageDialog)
