import React, {Component} from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchImages} from '../../actions/images'


const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 12,
	},
})


class FullWidthGrid extends Component {

	componentDidMount() {
		this.props.fetchImages()
	}

	render() {
		// eslint-disable-next-line
		const {images, handleImageDialog, classes} = this.props
		return (
			<div className={classes.root}>
				<Grid container spacing={16}>
					{/*{tileData.map(image => (*/}
						{/*<Grid item xs={12} sm={6} md={4} key={image.title}>*/}
							{/*<Card {...image}/>*/}
						{/*</Grid>*/}
					{/*))}*/}
					{images && Object.keys(images).map(imageId => (
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
	images: PropTypes.object,
}

const mapStateToProps = ({images}) => ({images})

const mapDispatchToProps = (dispatch) => (
	bindActionCreators(
		{
			fetchImages,
		},
		dispatch,
	)
)


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FullWidthGrid))