import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card'
import UploadImageDialog from '../../components/UploadImageDialog'
import tileData from './tileData'


const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 12,
	},
})


function FullWidthGrid(props) {
	const {isUploadImageDialogOpen, handleUploadImageDialog, classes} = props

	return (
		<div className={classes.root}>
			<Grid container spacing={16}>
				{tileData.map(image => (
					<Grid item xs={12} sm={6} md={4} key={image.title}>
						<Card {...image}/>
					</Grid>
				))}
			</Grid>

			<UploadImageDialog
				handleUploadImageDialog={handleUploadImageDialog}
				isUploadImageDialogOpen={isUploadImageDialogOpen}
			/>

		</div>
	)
}

FullWidthGrid.propTypes = {
	classes: PropTypes.object.isRequired,
	handleUploadImageDialog: PropTypes.func.isRequired,
	isUploadImageDialogOpen: PropTypes.bool.isRequired,
}


export default withStyles(styles)(FullWidthGrid)