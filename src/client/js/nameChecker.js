function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    const regx = /Picard|Janeway|Kirk|Archer|Georgiou|yu/i

    if(regx.test(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
