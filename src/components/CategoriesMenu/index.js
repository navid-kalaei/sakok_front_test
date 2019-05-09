import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'


const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	rtl: {
		direction: 'rtl',
	}
})

const options = [
	'Show some love to Material-UI',
	'Show all notification content',
	'Hide sensitive notification content',
	'Hide all notification content',
]

class SimpleListMenu extends React.Component {
	state = {
		anchorEl: null,
		selectedIndex: 1,
	}

	handleClickListItem = event => {
		this.setState({anchorEl: event.currentTarget})
	}

	handleMenuItemClick = (event, index) => {
		this.setState({selectedIndex: index, anchorEl: null})
	}

	handleClose = () => {
		this.setState({anchorEl: null})
	}

	render() {
		const {classes} = this.props
		const {anchorEl} = this.state

		return (
			<div className={classes.root}>
				<List component="nav">
					<ListItem
						button
						aria-haspopup="true"
						aria-controls="lock-menu"
						aria-label="دسته‌بندی"
						onClick={this.handleClickListItem}
					>
						<ListItemText
							primary="دسته‌بندی"
							secondary={options[this.state.selectedIndex]}
						/>
					</ListItem>
				</List>
				<Menu
					id="lock-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
					className={classes.rtl}
				>
					{options.map((option, index) => (
						<MenuItem
							key={option}
							selected={index === this.state.selectedIndex}
							onClick={event => this.handleMenuItemClick(event, index)}
							className={classes.rtl}
						>
							{option}
						</MenuItem>
					))}
				</Menu>
			</div>
		)
	}
}

SimpleListMenu.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleListMenu)

