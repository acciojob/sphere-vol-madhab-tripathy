function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let vol = document.getElementById("volume");
	let ans = (4/3)*Math.PI*Math.pow(radius,3);
	vol.value = ans;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
