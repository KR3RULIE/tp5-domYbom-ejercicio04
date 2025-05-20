const reloj = () => {
  const fecha = new Date();
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const fechaActual = document.querySelector(".fs-3");
  fechaActual.textContent = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  const hora = document.querySelector(".fs-4");
  hora.textContent = `${String(fecha.getHours()).padStart(2, "0")}:${String(
    fecha.getMinutes()
  ).padStart(2, "0")}:${String(fecha.getSeconds()).padStart(2, "0")}`;
};

setInterval(reloj, 1000);
