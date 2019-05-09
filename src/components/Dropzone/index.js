import React from 'react'
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
	const {classes} = props

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
		accept: 'image/jpeg, image/png',
	})

	const acceptedFile = acceptedFiles.length !==0 ? acceptedFiles[0] : null

	return (
		<section className={classes.root}>
			<div {...getRootProps({className: classes.dropzone})}>
				<input {...getInputProps()} />
				<p className={classes.rtl}>بکشید و رها کنید یا کلیک نمایید</p>
				<em>(قابل پذیرش هستند *.jpeg و *.png تنها تصاویر)</em>
			</div>
			<aside>
				<Typography variant="body" className={classNames(classes.rtl, classes.margin)}>فایل انتخاب شده:</Typography>
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

export default withStyle(styles)(Accept)
