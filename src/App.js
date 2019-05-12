import React, {useState} from 'react'
import {Provider} from 'react-redux'
import AppBar from './components/AppBar'
import Gallery from './views/Gallery'
import ImageDialog from './components/ImageDialog'
import CategoryDialog from './components/CategoryDialog'
import store from './config/store'


function App() {
	const [isImageDialogOpen, handleImageDialog] = useState(false)
	const [isCategoryDialogOpen, handleCategoryDialog] = useState(false)

	return (
		<Provider store={store}>
			<div className="App">
				<AppBar
					handleImageDialog={handleImageDialog}
					handleCategoryDialog={handleCategoryDialog}
				/>
				<Gallery
					handleImageDialog={handleImageDialog}
				/>
				<ImageDialog
					handleImageDialog={handleImageDialog}
					isImageDialogOpen={isImageDialogOpen}
				/>
				<CategoryDialog
					handleCategoryDialog={handleCategoryDialog}
					isCategoryDialogOpen={isCategoryDialogOpen}
				/>
			</div>
		</Provider>
	)
}

export default App
