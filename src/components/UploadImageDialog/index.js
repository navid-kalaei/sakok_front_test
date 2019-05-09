import React, {useState} from 'react'
import PropTypes from 'prop-types'
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

const handleClose = (handleUploadImageDialog) => () => (handleUploadImageDialog(false))

const FormDialog = (props) => {
	const {isUploadImageDialogOpen, handleUploadImageDialog, classes} = props
	const [tags, handleTags] = useState(['tag1', 'tag2', 'tag3', 'tag1', 'tag2', 'tag3', 'tag1', 'tag2', 'tag3'])

	return (
		<Dialog
			open={isUploadImageDialogOpen}
			onClose={handleClose(handleUploadImageDialog)}
			aria-labelledby="form-dialog-title"
			maxWidth="sm"
			fullWidth
		>
			<DialogTitle id="form-dialog-title" className={classes.rtl}>بارگذاری تصویر </DialogTitle>
			<DialogContent>
				<Dropzone/>
				<Typography variant="body1" className={classNames(classes.rtl, classes.description)}>توضیحات:</Typography>
				<TextField
					autoFocus
					margin="dense"
					id="description"
					name="description"
					type="text"
					multiline
					fullWidth
					rowsMax={2}
					className={classes.rtl}
				/>
				<Grid container spacing={4} className={classes.rtl}>
					<Grid item xs={6}>
						<TagInput/>
					</Grid>
					<Grid item xs={6}>
						<CategoriesMenu/>
					</Grid>
					{tags.map(tag => (
						<Grid item key={tag} direction="row-reverse">
							<Tag>{tag}</Tag>
						</Grid>
					))}
				</Grid>


			</DialogContent>
			<DialogActions className={classes.rtl}>
				<Button onClick={handleClose(handleUploadImageDialog)} color="secondary" variant="contained">
					لغو
				</Button>
				<Button onClick={handleClose(handleUploadImageDialog)} color="primary" variant="contained">
					ارسال
				</Button>
			</DialogActions>
		</Dialog>
	)
}


FormDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	handleUploadImageDialog: PropTypes.func.isRequired,
	isUploadImageDialogOpen: PropTypes.bool.isRequired,
}

export default withStyles(styles)(FormDialog)
