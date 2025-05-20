# 🕒 Reloj Digital Web

Este proyecto muestra un **reloj digital en tiempo real** utilizando HTML, CSS (opcional) y JavaScript.

## 📋 Descripción

La aplicación web muestra un reloj que actualiza la hora automáticamente cada segundo, en el siguiente formato:

Por ejemplo: `09:15:03`

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- [Bootstrap 5](https://getbootstrap.com/)

## 💻 Cómo usar

1. Clona o descarga este repositorio.

```bash
git clone https://github.com/KR3RULIE/tp5-domYbom-ejercicio04
```

2. Abre el archivo `index.html` en tu navegador.
3. Verás el reloj digital funcionando en tiempo real.

## 🧠 Lógica del reloj

- Se obtiene la hora actual con `new Date()`.
- Se extraen las horas, minutos y segundos.
- Se usa `String(...).padStart(2, '0')` para asegurar que cada número tenga 2 dígitos.
- La hora se actualiza automáticamente cada segundo con `setInterval`.

## 👨‍💻 Autor

**Marcos Joel Tebis**  
Proyecto personal de práctica con ejercicios básicos en JavaScript.  
¡Gracias por visitar este repositorio y feliz código!

---

¡Sigue practicando y mejorando tus habilidades en JavaScript! 💪
