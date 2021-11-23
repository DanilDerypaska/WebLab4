function main() {

	//get elements from HTML
	const a = +document.getElementById('a').value
	const b = +document.getElementById('b').value
	const c = +document.getElementById('c').value

	//calculating the discriminant
	document.getElementById('output').innerHTML = findValueQuadraticEquation(a, b, c)
	document.querySelector('.inner').style.display = 'block'

}

function findValueQuadraticEquation(a, b, c) {

	if (a === 0) {
		return 'Помилка, а = 0 недопустиме значення!'
	}

	// discriminant
	const D = b * b - 4 * a * c;
	const coefficients = `Коеффіцієнти: a= ${a} , b= ${b} , c= ${c}`

	//the value of the roots of the discriminant
	let x1, x2;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return `${coefficients}<br>Корені рівняння: X1= ${x1} , X2= ${x2}<br>Дискримінант(D)= ${D}`
	}
	else if (D === 0) {
		x1 = -b / (2 * a);
		return `${coefficients}<br>Корені рівняння: X1= ${x1}<br>Дискримінант(D)= ${D}`
	}
	else if (D < 0)
		return `${coefficients}<br>Коренів немає!<br>Дискримінант(D)= ${D}`
}