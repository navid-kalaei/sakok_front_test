import React, {useState} from 'react'
import AppBar from './components/AppBar'
import Gallery from './views/Gallery'
import ImageDialog from './components/ImageDialog'


function App() {
	const [isImageDialogOpen, handleImageDialog] = useState(false)
	const [newOrModifiedImage, handleNewOrModifiedImage] = useState({})

	return (
		<div className="App">
			<AppBar handleImageDialog={handleImageDialog}/>
			<Gallery
				handleImageDialog={handleImageDialog}
				newOrModifiedImage={newOrModifiedImage}
			/>
			<ImageDialog
				handleImageDialog={handleImageDialog}
				isImageDialogOpen={isImageDialogOpen}
				handleNewOrModifiedImage={handleNewOrModifiedImage}
			/>
		</div>
	)
}

export default App
