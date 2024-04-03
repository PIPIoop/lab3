 
const hr = document.querySelector('.hr') 
const min = document.querySelector('.min') 
const sec = document.querySelector('.sec') 

 
setInterval(() => { 
	let day = new Date() 
	let hour = day.getHours() 
	let minutes = day.getMinutes() 
	let seconds = day.getSeconds() 
 	
 	if (seconds == 5){
 		const button = document.getElementById('fd')
 		button.textContent = `${hour}:${minutes}:${seconds}`
 	}


	let hrRotation = (30 * hour) + (0.5 * minutes); 
	let minRotation = 6 * minutes; 
	let secRotation = 6 * seconds; 

	hr.style.transform = 
		`translate(-50%,-100%) rotate(${hrRotation}deg)` 
	min.style.transform = 
		`translate(-50%,-100%) rotate(${minRotation}deg)` 
	sec.style.transform = 
		`translate(-50%,-85%) rotate(${secRotation}deg)`

});
