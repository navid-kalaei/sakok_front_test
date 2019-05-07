import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '../../components/Card'


const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 12,
	},
})

const tileData = [
	{
		src: 'https://images.theconversation.com/files/200232/original/file-20171220-4957-hspudb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
		title: 'زندگی زیباست',
		date: '۱۵ اسفند ۱۳۹۶',
		description: 'زندگی خیلی زیباست',
		category: 'شادابی',
		tags: ['باحالی', 'انرژی'],
	},
	{
		src: 'http://www.actionforhappiness.org/media/604454/afh_poem_landscape_small_600x438.jpg',
		title: 'شاد زندگی کنیم',
		date: '۱۵ اسفند ۱۳۹۶',
		description: 'بیا با هم شاد زندگی کنیم',
		tags: ['شادی', 'سرزندگی'],
	},
	{
		src: 'https://static01.nyt.com/images/2018/05/08/well/physed-happiness/physed-happiness-articleLarge.jpg?quality=90&auto=webp',
		title: 'تجربه‌ی شادی',
		date: '۱۵ اسفند ۱۳۹۶',
		description: 'با من بهترین تجربه‌ی شاد بودن را به خاطر بسپار',
	},
	{
		src: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1655A/production/_92928419_thinkstockphotos-508347326.jpg',
		title: 'ذهن شاد',
		date: '۱۵ اسفند ۱۳۹۶',
		description: 'ذهنت را شاد نگه دار تا زندگی‌ای شاد داشته باشی',
	},
	{
		src: 'https://blogs.iadb.org/ideas-matter/wp-content/uploads/sites/12/2017/04/happiness.png',
		title: 'دنیا شاد است',
		date: '۱۵ اسفند ۱۳۹۶',
		description: 'دنیا شاد است پس بیا شاد باشیم',
	},
	{
		src: 'https://thumbs-prod.si-cdn.com/8N51ekUYOY32Rf0Y_l6o3l2M9hU=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/ee/c4/eec4d460-749d-494f-834f-9d421c8eda45/istock-853461638.jpg',
		title: 'شادی یک هنر است',
		date: '۱۵ اسفند ۱۳۹۶',
		description: 'شادی یک هنر است هنرمند دنیای خودت باش',
	},
]

function FullWidthGrid(props) {
	const {classes} = props

	return (
		<div className={classes.root}>
			<Grid container spacing={16}>
				{tileData.map(image => (
					<Grid item xs={12} sm={6} md={4} key={image.title}>
						<Card {...image}/>
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