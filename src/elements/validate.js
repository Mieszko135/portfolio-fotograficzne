export function validate(values) {
    const errorMessages = {};
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!values.name) {
        errorMessages.name = "Pole musi zawierać imię"
    }

    if (!values.email || !values.email.match(pattern)) {
        errorMessages.email = "Pole musi zawierać poprawny adres e-mail"
    }

    if (!values.subject) {
        errorMessages.subject = "Pole musi zawierać temat"
    }

    if (!values.message) {
        errorMessages.message = "Pole musi zawierać treść"
    }

    return Object.keys(errorMessages).length > 0 ? errorMessages : null;
}

export function validateNick(values) {
    const errorMessages = {};

    if (!values.nick) {
        errorMessages.nick = "Podaj nick"
    }

    return Object.keys(errorMessages).length > 0 ? errorMessages : null;
}