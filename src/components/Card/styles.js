const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 12,
	},
	media: {
		objectFit: 'cover',
	},
	actions: {
		display: 'flex',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	fab: {
		margin: theme.spacing.unit,
	},
})

export default styles
