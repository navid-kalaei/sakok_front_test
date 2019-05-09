import React, {useState} from 'react'
import AppBar from './components/AppBar'
import Gallery from './views/Gallery'


function App() {
	const [isUploadImageDialogOpen, handleUploadImageDialog] = useState(false)

	return (
		<div className="App">
			<AppBar handleUploadImageDialog={handleUploadImageDialog}/>
			<Gallery
				isUploadImageDialogOpen={isUploadImageDialogOpen}
				handleUploadImageDialog={handleUploadImageDialog}
			/>
		</div>
	)
}

export default App
