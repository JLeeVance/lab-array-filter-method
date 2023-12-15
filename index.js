//.filter() returns an array when invoked!
//we could assign it to a var and return that
//OR we can just return the filter call

function findMatching(array, string){
    return array.filter(name => name.toLowerCase() === string.toLowerCase())
}
//this function called .filter() on the array given, that will go through each index of the array
//we gave the var name of 'name' which is arbitrarily assigned (but we are accessing names, so yeah)
//The name parament "fills in" for the position on the array as we progress through
//we converted the name to lower case and compared it to our string parameter
//also changed it to lower case to account for the user error

function fuzzyMatch (array, string) {
    return array.filter(name => name.startsWith(string))
}
// This function took in an array and a string. We put a filter on the array (returns and array)
// we again named the parameter as 'name'. then we used the .startsWith method in order compare said 
// input elements 'name' - to return all names that start with the letter provided in the argument

function matchName (arrayOfDriverObjects, string) {
    return arrayOfDriverObjects.filter(driver => driver.name == string)
}
//This function took in an array containing objects!!
//we filtered through, assigning 'driver' to each object as the filter would be passing through
//we used driver.name to access the inner part of the object - the name - and 
//used a comparison operator to resolve to 'true' if the name within the object matched
//the string name provided


