import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
// import InputLabel from '@material-ui/core/InputLabel'
import Dropzone from '../Dropzone'
import CategoriesMenu from '../CategoriesMenu'


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	rtl: {
		direction: 'rtl',
	},
})

const handleClose = (handleUploadImageDialog) => () => (handleUploadImageDialog(false))

const FormDialog = (props) => {
	const {isUploadImageDialogOpen, handleUploadImageDialog, classes} = props

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
				{/*<DialogContentText className={classes.rtl}>*/}
				{/*To subscribe to this website, please enter your email address here. We will send*/}
				{/*updates occasionally.*/}
				{/*</DialogContentText>*/}
				<Dropzone/>
				<TextField
					autoFocus
					margin="dense"
					id="description"
					name="description"
					// label="Email Address"
					type="text"
					multiline
					fullWidth
					rowsMax={2}
					className={classes.rtl}
				/>
				<CategoriesMenu/>
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
