import React, {useState} from 'react'
import AppBar from './components/AppBar'
import Gallery from './views/Gallery'
import ImageDialog from './components/ImageDialog'


function App() {
	const [isImageDialogOpen, handleImageDialog] = useState(false)

	return (
		<div className="App">
			<AppBar handleImageDialog={handleImageDialog}/>
			<Gallery
				handleImageDialog={handleImageDialog}
			/>
			<ImageDialog
				handleImageDialog={handleImageDialog}
				isImageDialogOpen={isImageDialogOpen}
			/>
		</div>
	)
}

export default App
