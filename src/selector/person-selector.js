export default (persons,filteredText) => {
    return persons.filter(person => {
        const textMatch = person.name.toString().toLowerCase().includes(filteredText.toString().toLowerCase());
        
        return textMatch;
    }) 
}