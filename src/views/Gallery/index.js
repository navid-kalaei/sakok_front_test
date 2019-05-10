import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {withStyles} from '@material-ui/core/styles'
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
		images: [],
	}

	componentDidMount() {
		axios.get(BACKEND_API.image).then(({data}) => (this.setState({images: data})))
	}


	addImageToGallery = (id) => (axios.get(`${BACKEND_API.image}/${id}`).then(({data}) => {
				const newImages = this.state.images
				newImages.push(data)
				this.setState({images: newImages})
			},
		)
	)

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
					{images.map(image => (
						<Grid item xs={12} sm={6} md={4} key={image._id}>
							<Card
								src={`data:${image.image.mimetype};base64,${(new Buffer(image.image.data.data)).toString('base64')}`}
								title={image.title}
								date={image.createdAt}
								tags={image.tags}
								category={image.category.label}
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