import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card'
import tileData from './tileData'
import BACKEND_API from '../../config/apis'


const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 12,
	},
})


class FullWidthGrid extends Component {

	state = {
		images: {},
	}

	componentDidMount() {
		axios.get(BACKEND_API.image).then(({data}) => {
			const fetchedData = data.reduce((images, currentImage) => {
				images[currentImage._id] = currentImage
				return images
			}, {})
			this.setState({images: fetchedData})
		})
	}

	render() {
		// eslint-disable-next-line
		const {handleImageDialog, classes} = this.props
		const {images} = this.state

		return (
			<div className={classes.root}>
				<Grid container spacing={16}>
					{tileData.map(image => (
						<Grid item xs={12} sm={6} md={4} key={image.title}>
							<Card {...image}/>
						</Grid>
					))}
					{Object.keys(images).map(imageId => (
						<Grid item xs={12} sm={6} md={4} key={imageId}>
							<Card
								src={`data:${images[imageId].image.mimetype};base64,${(new Buffer(images[imageId].image.data.data)).toString('base64')}`}
								title={images[imageId].title}
								date={images[imageId].createdAt}
								tags={images[imageId].tags}
								category={images[imageId].category.label}
							/>
						</Grid>
					))}
				</Grid>


			</div>
		)
	}
}

FullWidthGrid.propTypes = {
	classes: PropTypes.object.isRequired,
	handleImageDialog: PropTypes.func.isRequired,
}


export default withStyles(styles)(FullWidthGrid)