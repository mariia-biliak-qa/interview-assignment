function rotateLeft(temparray, positions) {
    if (!temparray.length) {
        return temparray; // Return an empty array if input array is empty
    }
    
    const number = temparray.length;
    positions = positions % number; // Handle positions greater than array length
    if (positions < 0) {
        throw new Error("Negative positions are not allowed"); // Handle negative positions
    }
    
    return temparray.slice(positions).concat(temparray.slice(0, positions));
}

function main() {
    const length = parseInt(prompt("Enter the length of the array:"));
    
    if (isNaN(length) || length <= 0) {
        console.error("Invalid array length. Please enter a positive number.");
        return;
    }
    
    const inputArray = [];
    for (let i = 0; i < length; i++) {
        const num = parseInt(prompt(`Enter number ${i + 1}:`));
        if (!isNaN(num)) {
            inputArray.push(num);
        } else {
            console.error(`Invalid input for number ${i + 1}. Please enter a number.`);
            return;
        }
    }
    
    const positionsToRotate = parseInt(prompt("Enter the number of positions to rotate:"));
    
    if (isNaN(positionsToRotate)) {
        console.error("Invalid input for positions to rotate. Please enter a number.");
        return;
    }
    
    try {
        const result = rotateLeft(inputArray, positionsToRotate);
        console.log("Rotated array:", result); // print to the console
        window.alert("Rotated array:" + result); // print to the window
    } catch (error) {
        console.error(error.message);
    }
}

main();
