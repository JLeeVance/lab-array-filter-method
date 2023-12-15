function findMatching(array, string){
    return array.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch (array, string) {
    return array.filter(name => name.startsWith(string))
}
function matchName (arrayOfDriverObjects, string) {
    return arrayOfDriverObjects.filter(driver => driver.name == string)
}
