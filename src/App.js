import React, {useState} from 'react'
import {Provider} from 'react-redux'
import AppBar from './components/AppBar'
import Gallery from './views/Gallery'
import ImageDialog from './components/ImageDialog'
import store from './config/store'


function App() {
	const [isImageDialogOpen, handleImageDialog] = useState(false)

	return (
		<Provider store={store}>
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
		</Provider>
	)
}

export default App
