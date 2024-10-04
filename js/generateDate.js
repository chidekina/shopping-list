export function generateDate() {
    return `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})}, ${new Date().toLocaleDateString} às ${new Date().toLocaleTimeString()}`
}