import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {useDropzone} from 'react-dropzone'
import withStyle from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	dropzone: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 20,
		borderWidth: 2,
		borderRadius: 2,
		borderColor: '#eeeeee',
		borderStyle: 'dashed',
		backgroundColor: '#fafafa',
		color: '#bdbdbd',
		outline: 'none',
		transition: 'border .24s ease-in-out;',
	},
	rtl: {
		direction: 'rtl',
	},
	margin: {
		marginTop: theme.spacing.unit * 2,
	}
})

function Accept(props) {
	const {classes, handleImage} = props

	const onDrop = useCallback(acceptedFiles => {
		// const reader = new FileReader()
		const acceptedFile = acceptedFiles[0]
		handleImage(acceptedFile)
		// reader.onabort = () => console.log('file reading was aborted')
		// reader.onerror = () => console.log('file reading has failed')
		// reader.onload = () => {
			// handleImage(reader.result)
			// handleImage(reader.result)
		// }

		// reader.readAsArrayBuffer(acceptedFile)
	}, [handleImage])

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
		accept: 'image/jpeg, image/png, image/jpg',
		onDrop,
	})

	const acceptedFile = acceptedFiles.length !==0 ? acceptedFiles[0] : null

	return (
		<section className={classes.root}>
			<div {...getRootProps({className: classes.dropzone})}>
				<input {...getInputProps()} />
				<p className={classes.rtl}>بکشید و رها کنید یا کلیک نمایید</p>
			</div>
			<aside>
				<Typography variant="body1" className={classNames(classes.rtl, classes.margin)}>فایل انتخاب شده:</Typography>
				{acceptedFile ? (
					<Typography variant="subtitle2" className={classNames(classes.rtl, classes.margin)}>
						{` بایت ${acceptedFile.path} - ${acceptedFile.size}`}
					</Typography>
				) : (
					<Typography variant="subtitle2" className={classNames(classes.rtl, classes.margin)}>هنوز فایلی انتخاب نشده است</Typography>
				)
				}
			</aside>
		</section>
	)
}


Accept.propTypes = {
	classes: PropTypes.object.isRequired,
	handleImage: PropTypes.func.isRequired,
}

export default withStyle(styles)(Accept)
