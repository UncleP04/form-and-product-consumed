
const handleError = (event) => {
    const element = event.target;
    if (element.id === "firstName") {
        if (!element.value) {
            return { firstName: "Can't be Empty.." }
        }
        if (element.value.length < 4 || element.value.length > 16) {
            return { firstName: "this should be between 4 - 16 characters" }
        } else {
            return { firstName: "" }
        }
    }

    //   LASTNAME VALIDATION
    if (element.id === "lastName") {
        if (!element.value) {
            return { lastName: "Can't be Empty.." }
        }
        if (element.value.length < 6 || element.value.length > 10) {
            return { lastName: "this should be 3 - 16 characters" }
        } else {
            return { lastName: "" }
        }
    }

    //   EMAIL VALIDATION
    if (element.id === "email") {

        if (!element.value) {
            return { email: "Can't be Empty.." }
        }
        if (element.value.includes('@gmail.com' || '@yahoo.com')) {
            return { email: "" }
        } else {
            return { email: "Should include @gmail.com or '@yahoo.com" }
        }
    }
}

export default handleError;