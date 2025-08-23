const APP_STRINGS = {
  en: {
    title: "Llama",
    thinking: "Thinking...",
    writing: "Writing...",
    placeholder: "Write a message",
    system_error: "System error. Please try again.",
    system_prompt: "You are a useful AI assistant.",
    system_welcome: "Hello, how can I help you today?",
  },
  es: {
    title: "Llama",
    thinking: "Pensando...",
    writing: "Escribiendo...",
    placeholder: "Escribe un mensaje",
    system_error: "Error del sistema. Por favor intente de nuevo.",
    system_prompt: "T\u00FA eres un \u00FAtil asistente AI.",
    system_welcome: "Hola, \u00BFc\u00F3mo puedo ayudarte hoy?",
  },
}

const USER_LANG = window.navigator.language.substring(0, 2).toLowerCase()
const GET_APP_STRING =
  typeof APP_STRINGS[USER_LANG] === "undefined"
    ? APP_STRINGS["en"]
    : APP_STRINGS[USER_LANG]

const t = (stringName) => {
  return GET_APP_STRING[stringName] || ""
}
