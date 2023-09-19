// Detecta el tema del sistema operativo y aplica el tema oscuro si es necesario
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}