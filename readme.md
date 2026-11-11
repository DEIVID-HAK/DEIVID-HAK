<div align="center">

  <img src="assets/hero-manifest.svg?v=1" width="100%" alt="David Vélez — desarrollador full stack. Backend, APIs y datos." />

  <br>

  <p>
    <sub>
      <a href="#perfil">01 · perfil</a>
      &nbsp;·&nbsp;
      <a href="#proyectos">02 · proyectos</a>
      &nbsp;·&nbsp;
      <a href="#stack">03 · stack</a>
      &nbsp;·&nbsp;
      <a href="#trayectoria">04 · trayectoria</a>
      &nbsp;·&nbsp;
      <a href="#actividad">05 · actividad</a>
      &nbsp;·&nbsp;
      <a href="#contacto">06 · contacto</a>
    </sub>
  </p>

</div>

---

<a id="perfil"></a>

### `01` · Perfil

Desarrollador **full stack** con enfoque en backend. Me interesa la parte del software que sostiene todo lo demás: el modelo de datos, el contrato de una API y la validación que evita que un error llegue a producción.

Estudio **Análisis y Desarrollo de Software (ADSO) en el SENA**, en Medellín, y curso el sexto semestre. He construido proyectos que van de un e-commerce textil con pagos y roles hasta una plataforma geoespacial con PostGIS y WebSockets. En todos repetí el mismo recorrido: entender el problema, modelar los datos, construir la API, conectar la interfaz y dejar el entorno reproducible.

Busco mi **primera oportunidad profesional** —prácticas o rol junior— en un equipo donde pueda hacerme cargo de funcionalidades completas y crecer con revisión de código real.

| Área | Qué resuelvo | Con qué |
| :--- | :--- | :--- |
| **Backend y APIs** | Servicios REST con contratos claros, validación, autenticación y manejo consistente de errores. | `Java 21` · `Node.js` · `Express` · `Python` · `FastAPI` · `Django` |
| **Datos** | Esquemas relacionales, consultas, integridad referencial y datos geoespaciales. | `PostgreSQL` · `PostGIS` · `MySQL` · `SQLite` · `MongoDB` · `Redis` |
| **Frontend** | Interfaces que consumen la API sin duplicar la lógica de negocio. | `React` · `Vite` · `Tailwind CSS` · `JavaScript` |
| **Entrega** | Entornos reproducibles, integración continua y documentación que se puede seguir. | `Docker` · `GitHub Actions` · `Git` · `Linux` · `Nginx` |

<br>

> **Cómo trabajo:** primero el contrato, después la pantalla. Si el esquema está mal, la interfaz solo esconde el problema. Y si no se puede levantar con un comando, todavía no está terminado.

**Cuatro reglas que aplico en cada entrega**

1. **Entender antes de escribir.** Requisitos, límites y casos raros. Si no puedo explicar el problema, no puedo diseñar la solución.
2. **Modelar los datos primero.** Entidades, relaciones y restricciones. La base de datos también es parte del diseño.
3. **Probar lo que duele.** Permisos, concurrencia, montos y fechas límite antes que el camino feliz.
4. **Dejar rastro.** README, contrato de API y decisiones técnicas. El código sin contexto se vuelve deuda.

<br>

<img src="assets/pipeline.svg?v=1" width="100%" alt="Flujo de trabajo: entender, modelar, construir, verificar y desplegar." />

---

<a id="proyectos"></a>

### `02` · Proyectos

Cuatro sistemas, cuatro problemas distintos. Cada tarjeta abre el repositorio con el código, la documentación y las instrucciones para ejecutarlo.

<div align="center">

  <p>
    <a href="https://github.com/DAVIDVLEZ-DEVELOPER/PROYECTO-SENA-TIENDA-TEXTIL"><img src="assets/bento-tienda-textil.svg?v=1" width="49%" alt="D&amp;D Textil — e-commerce textil con inventario y pagos" /></a>&nbsp;<a href="https://github.com/DAVIDVLEZ-DEVELOPER/PPTMaps"><img src="assets/bento-pptmaps.svg?v=1" width="49%" alt="PPTMaps — inteligencia geoespacial para Medellín" /></a>
  </p>
  <p>
    <a href="https://github.com/DAVIDVLEZ-DEVELOPER/architect-td"><img src="assets/bento-architect-td.svg?v=1" width="49%" alt="Architect TD — juego y laboratorio de arquitectura y DevOps" /></a>&nbsp;<a href="https://github.com/DAVIDVLEZ-DEVELOPER/agendalili"><img src="assets/bento-agenda-sdd.svg?v=1" width="49%" alt="Agenda SDD — tareas y compromisos con reglas deterministas" /></a>
  </p>

</div>

<details>
  <summary><b>Fichas técnicas: qué problema resolvió cada proyecto</b></summary>
  <br>

  | Proyecto | Problema | Decisión técnica | Qué quedó verificable |
  | :--- | :--- | :--- | :--- |
  | **[D&D Textil](https://github.com/DAVIDVLEZ-DEVELOPER/PROYECTO-SENA-TIENDA-TEXTIL)** | Venta de telas por metro con inventario, tres roles y pagos en línea. | React + Vite en el cliente; backend en **Java 21** sobre `HttpServer` y JDBC; **PostgreSQL 17** con 25 tablas y 20 llaves foráneas; Docker Compose para los tres servicios. | Pago con **Wompi** y firma `HMAC-SHA256`, SSO con Google y Microsoft, 46 pruebas automatizadas y contrato **OpenAPI v3**. |
  | **[PPTMaps](https://github.com/DAVIDVLEZ-DEVELOPER/PPTMaps)** | Movilidad urbana dispersa en varias fuentes, sin filtros espaciales ni alertas en tiempo real. | **FastAPI** async con SQLAlchemy 2.0; PostgreSQL 16 + **PostGIS**; **Redis** y **Celery** para caché y tareas; React 19 + Leaflet en el mapa. | 702.540 incidentes históricos cargados, alertas por **WebSockets**, agrupamiento **DBSCAN** y 15 estaciones de calidad del aire. |
  | **[Architect TD](https://github.com/DAVIDVLEZ-DEVELOPER/architect-td)** | Explicar arquitectura, resiliencia y DevOps sin diapositivas. | Juego en **HTML5 Canvas** con Tailwind; 10 módulos de infraestructura; imagen **multi-stage** sobre Nginx; audio procedural con Web Audio API. | 5 niveles, telemetría de **RPS / P99 / SLA** en vivo, incidentes SRE con análisis de causa raíz y despliegue con Docker. |
  | **[Agenda SDD](https://github.com/DAVIDVLEZ-DEVELOPER/agendalili)** | Tareas y compromisos con reglas de negocio que no se pueden saltar. | **SDD v1.0.0**; Node.js 22 con `node:sqlite`; contratos en **TypeScript**; capas de dominio, repositorio y servicio; UI glassmorphism. | Reglas **RN-01 a RN-05**, detección determinista de solapamientos horarios y suite de verificación con 10/10 comprobaciones. |

</details>

---

<a id="stack"></a>

### `03` · Stack

<img src="assets/stack-matrix.svg?v=1" width="100%" alt="Mapa de capacidades: backend, datos, frontend y entrega." />

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Java_21-1E0710?style=flat-square&logo=openjdk&logoColor=FFE7ED&labelColor=120409" alt="Java 21"/>
  <img src="https://img.shields.io/badge/Node.js-1E0710?style=flat-square&logo=nodedotjs&logoColor=5FA04E&labelColor=120409" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Python-1E0710?style=flat-square&logo=python&logoColor=3776AB&labelColor=120409" alt="Python"/>
  <img src="https://img.shields.io/badge/PostgreSQL-1E0710?style=flat-square&logo=postgresql&logoColor=4169E1&labelColor=120409" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/React-1E0710?style=flat-square&logo=react&logoColor=61DAFB&labelColor=120409" alt="React"/>
  <img src="https://img.shields.io/badge/Docker-1E0710?style=flat-square&logo=docker&logoColor=2496ED&labelColor=120409" alt="Docker"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-1E0710?style=flat-square&logo=githubactions&logoColor=2088FF&labelColor=120409" alt="GitHub Actions"/>
  <img src="https://img.shields.io/badge/Linux-1E0710?style=flat-square&logo=linux&logoColor=FCC624&labelColor=120409" alt="Linux"/>
</p>

<p align="center"><sub>Si tuviera que resumirlo: Java y Node para servicios, PostgreSQL para datos, React para interfaces y Docker para entregar.</sub></p>

---

<a id="trayectoria"></a>

### `04` · Trayectoria

<img src="assets/trayectoria.svg?v=1" width="100%" alt="Trayectoria: bases en SENA, construcción de proyectos, entrega y siguiente paso." />

<br>

**Ahora mismo**

- Curso el **6.º semestre de ADSO** en el SENA, Medellín.
- Profundizo en pruebas automatizadas, integración continua y modelado de datos.
- Estoy construyendo **Los Artesanales**, un catálogo con menú dinámico y gestión de pedidos para un negocio de comida.
- Busco **prácticas o rol junior** en Medellín, remoto o híbrido.

---

<a id="actividad"></a>

### `05` · Actividad

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=DAVIDVLEZ-DEVELOPER&show_icons=true&hide_rank=true&title_color=B01E45&icon_color=E0608A&text_color=F6C6D2&label_color=B01E45&bg_color=120409&border_color=5A1230&ring_color=B01E45&v=6" alt="Estadísticas de GitHub"/>
  <img height="165" src="https://streak-stats.demolab.com?user=DAVIDVLEZ-DEVELOPER&background=120409&border=5A1230&stroke=5A1230&ring=B01E45&fire=E0608A&currStreakNum=E0608A&currStreakLabel=E0608A&sideNums=F6C6D2&sideLabels=F6C6D2&dates=B58D9B&excludeDaysLabel=B58D9B" alt="Racha de contribuciones"/>
</p>

<p align="center">
  <img height="150" src="https://github-readme-stats.vercel.app/api/top-langs/?username=DAVIDVLEZ-DEVELOPER&layout=compact&langs_count=6&bg_color=120409&title_color=B01E45&text_color=F6C6D2&label_color=B01E45&icon_color=E0608A&border_color=5A1230&v=6" alt="Lenguajes más usados"/>
  <img height="150" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=DAVIDVLEZ-DEVELOPER&theme=github_dark" alt="Resumen del perfil"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/DAVIDVLEZ-DEVELOPER/DAVIDVLEZ-DEVELOPER/output/github-snake.svg?v=5" width="92%" alt="Gráfico de contribuciones"/>
</p>

---

<a id="contacto"></a>

### `06` · Contacto

<img src="assets/contacto-terminal.svg?v=1" width="100%" alt="Contacto: correo, GitHub, YouTube, ubicación y estado." />

<br>

<p align="center">
  <a href="mailto:daviidvp228@gmail.com"><img src="https://img.shields.io/badge/Email-daviidvp228%40gmail.com-1E0710?style=for-the-badge&logo=gmail&logoColor=EA4335&labelColor=120409" alt="Email"/></a>
  <a href="https://github.com/DAVIDVLEZ-DEVELOPER"><img src="https://img.shields.io/badge/GitHub-DAVIDVLEZ--DEVELOPER-1E0710?style=for-the-badge&logo=github&logoColor=F6C6D2&labelColor=120409" alt="GitHub"/></a>
  <a href="https://www.youtube.com/@DEIIVIDVLEZ"><img src="https://img.shields.io/badge/YouTube-DEIIVIDVLEZ-1E0710?style=for-the-badge&logo=youtube&logoColor=FF0000&labelColor=120409" alt="YouTube"/></a>
</p>

<br>

<img src="assets/footer-signature.svg?v=1" width="100%" alt="David Vélez — Medellín, Colombia. Disponible para prácticas y roles junior." />

<details>
  <summary><b>English summary</b></summary>
  <br>

  Full-stack developer based in **Medellín, Colombia**. I am an **ADSO technologist at SENA** (6th semester) focused on backend engineering: data modeling, REST APIs and the interfaces that consume them.

  My work includes **D&D Textil** (textile e-commerce with Java 21, PostgreSQL and Wompi payments), **PPTMaps** (geospatial intelligence with FastAPI, PostGIS and WebSockets), **Architect TD** (a Dockerized architecture and DevOps lab) and **Agenda SDD** (deterministic business rules on SQLite).

  I am looking for **internships or junior full-stack roles**. Reach me at **daviidvp228@gmail.com**.

</details>
