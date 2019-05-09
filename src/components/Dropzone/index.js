import React from 'react'
import {useDropzone} from 'react-dropzone'
import withStyle from '@material-ui/core/styles/withStyles'


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
	}
})

function Accept(props) {
	const {classes} = props

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
		accept: 'image/jpeg, image/png',
	})

	return (
		<section className={classes.root}>
			<div {...getRootProps({className: classes.dropzone})}>
				<input {...getInputProps()} />
				<p className={classes.rtl}>بکشید و رها کنید یا کلیک نمایید</p>
				<em>(قابل پذیرش هستند *.jpeg و *.png تنها تصاویر)</em>
			</div>
			<aside>
				<h4 className={classes.rtl}>فایل انتخاب شده</h4>
				{acceptedFiles.length !==0 && (
					<p className={classes.rtl}>
						{` بایت ${acceptedFiles[0].path} - ${acceptedFiles[0].size}`}
					</p>
				)
				}
			</aside>
		</section>
	)
}

export default withStyle(styles)(Accept)
