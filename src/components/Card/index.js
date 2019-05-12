import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Tag from '../Tag'
import styles from './styles'


function CustomCard(props) {
	const {src, title, date, description, category, tags, classes} = props
	const [expanded, handleExpandClick] = useState(false)

	return (
		<Card>
			<CardHeader
				action={
					<IconButton>
						<EditIcon/>
					</IconButton>
				}
				title={title}
				subheader={date}
			/>
			<CardMedia
				component="img"
				className={classes.media}
				alt={title}
				src={src}
				title={title}
			/>
			<CardContent>
				{(category &&
					<Typography gutterBottom variant="subtitle1" component="h2" color="textSecondary">{category}</Typography>
				)}
				<Typography component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions className={classes.actions} disableActionSpacing>
				<IconButton
					className={classnames(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={() => handleExpandClick(!expanded)}
					aria-expanded={expanded}
					aria-label="Show more"
				>
					<ExpandMoreIcon/>
				</IconButton>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					{tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						),
					)
					}
				</CardContent>
			</Collapse>
		</Card>
	)
}

CustomCard.propTypes = {
	classes: PropTypes.object.isRequired,
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	category: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
}

CustomCard.defaultProps = {
	category: '',
	tags: [],
}


export default withStyles(styles)(CustomCard)