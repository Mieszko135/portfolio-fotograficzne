export function validate(values) {
    const errorMessages = {};

    if (!values.name) {
        errorMessages.name = "Pole musi zawierać imię"
    }

    if (!values.email) {
        errorMessages.email = "Pole musi zawierać adres e-mail"
    }

    if (!values.subject) {
        errorMessages.subject = "Pole musi zawierać temat"
    }

    if (!values.message) {
        errorMessages.message = "Pole musi zawierać treść"
    }

    return Object.keys(errorMessages).length > 0 ? errorMessages : null;
}