// Classifying the triangle
document.getElementById('triangle-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const sideA = parseFloat(document.getElementById('side-a').value);
    const sideB = parseFloat(document.getElementById('side-b').value);
    const sideC = parseFloat(document.getElementById('side-c').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Please enter valid positive numbers for all sides.");
        return;
    }

    let triangleType = '';

    if (sideA === sideB && sideB === sideC) {
        triangleType = 'Equilateral Triangle';
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        triangleType = 'Isosceles Triangle';
    } else {
        triangleType = 'Scalene Triangle';
    }

    document.getElementById('triangle-type').textContent = `The triangle is: ${triangleType}`;
});

// Calculating triangle angles using Law of Cosines
document.getElementById('angle-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById('side1').value);
    const b = parseFloat(document.getElementById('side2').value);
    const c = parseFloat(document.getElementById('side3').value);

    // Check for valid inputs
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert("Please enter valid positive numbers for all sides.");
        return;
    }

    // Ensure the sides form a valid triangle (triangle inequality theorem)
    if (a + b <= c || b + c <= a || c + a <= b) {
        alert("The entered sides do not form a valid triangle.");
        return;
    }

    // Law of Cosines to calculate the angles
    const angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * (180 / Math.PI);
    const angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * (180 / Math.PI);
    const angleC = 180 - angleA - angleB;

    document.getElementById('angle-results').textContent = `Angle A: ${angleA.toFixed(2)}°, Angle B: ${angleB.toFixed(2)}°, Angle C: ${angleC.toFixed(2)}°`;
});