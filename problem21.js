
// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 

function getString(originalName){
    // let shorName = originalName.slice(0,2); // way one
    let shortName = originalName.substring(0, 2); // way two
    if(originalName === null || originalName === undefined || shortName === 'Py'){
        return originalName;
    }
    else {
        return "Py"+originalName;
    }

}

console.log(getString("Python"));
console.log(getString("thon"));