//your code here

document.addEventListener("DOMContentLoaded", () => {
	const imageContainer = document.getElementById("imageContainer");
	const resetBtn = document.getElementById("reset");
	const verifyBtn = document.getElementById("verify");
	const para = document.getElementById("para");

	const img = ["img1", "img2", "img3", "img4", "img5"];

	let selectedImg = [];
	let repeatedImg = "";

	// shuffle function to randomize array
	function shuffle(array) {
		for(int i=arra.length-1; i>0; i--){
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}	

	// Renders the images inside the divs
	function randerImg() {
		// Clear selected state
		selectedImg = [];
		resetBtn.style.display = 'none';
		verifyBtn.style.display = 'none';
		para.innerHTML = "";

		// Randomly choose one image to repeat
		repeatedImg = img[Math.floor(Math.random() * img.length)];

		// Create the list of images with one repeated
		let allImgs = [...img, repeatedImg];
		allImgs = shuffle(allImgs);
		
		// Assign shuffled class names to divs
		let divs = imageContainer.children;
		allImgs.forEach((imgClass, idx) => {
			divs[idx].className = `${imgClass} img`;
			divs[idx].addEventListener("click", onImgClick);
		});		
	}

	// When an image div is clicked
	function onImgClick(event) {
		const imgElement = event.target;

			// Avoid selecting the same image twice
		if(selectedImg.includes(imgElement)){
			return;
		}

			// Mark the image as selected visually
		imgElement.classList.add("selected");
		selectedImg.push(imgElement);

			// Show reset button after a selection
		resetBtn.style.display = "inline-block";

			// When two images are selected
		if(selectedImg.length === 2){
				// Show verify button
			verifyBtn.style.display = "inline-block";
		}

			// Don't allow more than two selections
		if(selectedImg.length > 2){
			return;
		}
	}

	
	// Initialize the game by rendering the images
	randerImg();
});