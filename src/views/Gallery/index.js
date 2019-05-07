import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'


const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 12,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		// textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	media: {
		objectFit: 'cover',
	},
})

const tileData = [
	{
		src: 'https://images.theconversation.com/files/200232/original/file-20171220-4957-hspudb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
		title: 'True happiness',
	},
	{
		src: 'http://www.actionforhappiness.org/media/604454/afh_poem_landscape_small_600x438.jpg',
		title: 'Action for happiness',
	},
	{
		src: 'https://static01.nyt.com/images/2018/05/08/well/physed-happiness/physed-happiness-articleLarge.jpg?quality=90&auto=webp',
		title: 'Little experience',
	},
	{
		src: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1655A/production/_92928419_thinkstockphotos-508347326.jpg',
		title: 'Mental health',
	},
	{
		src: 'https://blogs.iadb.org/ideas-matter/wp-content/uploads/sites/12/2017/04/happiness.png',
		title: 'Happy Latin America',
	},
	{
		src: 'https://thumbs-prod.si-cdn.com/8N51ekUYOY32Rf0Y_l6o3l2M9hU=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/ee/c4/eec4d460-749d-494f-834f-9d421c8eda45/istock-853461638.jpg',
		title: 'The art of happiness',
	},
]

function FullWidthGrid(props) {
	const {classes} = props

	return (
		<div className={classes.root}>
			<Grid container spacing={16}>
				{tileData.map(image => (
					<Grid item xs={12} sm={6} md={4} key={image.title}>
						<Card>
							<CardActionArea>
								<CardMedia
									component="img"
									alt={image.title}
									src={image.src}
									title={image.title}
								/>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

FullWidthGrid.propTypes = {
	classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(FullWidthGrid)