/* =========================================================
   CONTENIDO DEL PORTAFOLIO
   ---------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar
   textos, proyectos o enlaces. Los componentes de /components
   leen de aquí; no hace falta tocarlos.
   Las líneas "type ..." solo describen la forma de los datos.
   ========================================================= */

export type Fase = {
  fase: string;
  titulo: string;
  tech: string[];
  usuario: string;
  puntos: string[];
  repo: string;
};

export type Proyecto = {
  nombre: string;
  fecha: string;
  anio: number;
  tipo: string;
  categoria: string[];
  tech: string[];
  descripcion: string;
  repo: string;
};

export type Icono = "api" | "web" | "movil" | "db" | "game" | "desk" | "book";

export const PERFIL = {
  nombre: "Josue Kadosh",
  rol: "Desarrollador de software",
  ubicacion: "El Salvador",
  email: "josuekph22@gmail.com",
  github: "https://github.com/Josx22",
  usuarioGithub: "Josx22",
  // Frase principal del inicio
  tesis: "Construyo sistemas completos: de la tabla en SQL a la pantalla del teléfono.",
  resumen:
    "Trabajo en backend, web y móvil. Mi proyecto más completo, FitSmart, lo desarrollé por capas: base de datos en SQL Server, API REST en ASP.NET Core, panel web en Spring Boot y app Android en Kotlin.",
  // Qué tipo de trabajo buscas. Cámbialo cuando quieras.
  disponible: "Prácticas, primer empleo o proyectos freelance",
  // TU FOTO: pon la imagen en la carpeta public/ y escribe aquí su nombre
  // con "/" al inicio, por ejemplo "/josue.jpg". Si lo dejas vacío se muestra tu monograma.
  foto: "",
};

/* ---------------------------------------------------------
   CIFRAS (todas salen de tus repositorios; actualízalas si cambian)
   --------------------------------------------------------- */
export const CIFRAS: { numero: string; texto: string; destacado?: boolean }[] = [
  { numero: "13", texto: "Repositorios en GitHub" },
  { numero: "11", texto: "Proyectos publicados", destacado: true },
  { numero: "26", texto: "Endpoints en la API de FitSmart" },
  { numero: "6", texto: "Lenguajes: C#, Java, Kotlin, PHP, SQL y Python" },
];

/* ---------------------------------------------------------
   QUÉ HAGO (tarjetas de servicios)
   icono: "api", "web", "movil" o "db"
   --------------------------------------------------------- */
export const SERVICIOS: { icono: Icono; titulo: string; texto: string; tech: string }[] = [
  { icono: "api", titulo: "APIs REST", texto: "Endpoints con autenticación JWT, permisos por rol y documentación en Swagger.", tech: "ASP.NET Core · Spring Boot" },
  { icono: "web", titulo: "Aplicaciones web", texto: "Paneles administrativos con CRUD, formularios validados y manejo de sesiones.", tech: "Spring Boot · ASP.NET MVC · PHP" },
  { icono: "movil", titulo: "Apps Android", texto: "Pantallas en Jetpack Compose que consumen una API real con Retrofit.", tech: "Kotlin · Jetpack Compose" },
  { icono: "db", titulo: "Bases de datos", texto: "Modelado de tablas, triggers de auditoría, procedimientos almacenados y vistas.", tech: "SQL Server · MySQL" },
];

/* ---------------------------------------------------------
   PROYECTO DESTACADO: FitSmart (4 repositorios, uno por fase)
   --------------------------------------------------------- */
export const DESTACADO: { nombre: string; subtitulo: string; fecha: string; descripcion: string; fases: Fase[] } = {
  nombre: "FitSmart",
  subtitulo: "Sistema de gestión para gimnasios",
  fecha: "Ago – Sep 2026",
  descripcion:
    "Proyecto final construido en cuatro fases. Un mismo dominio (socios, planes de membresía, pagos y maquinaria) atendido por tres clientes distintos que comparten una sola API y una sola base de datos.",
  fases: [
    {
      fase: "Fase 1",
      titulo: "Base de datos",
      tech: ["SQL Server", "T-SQL"],
      usuario: "Datos del sistema",
      puntos: [
        "6 tablas: usuarios, planes, suscripciones, pagos, maquinaria y auditoría",
        "5 triggers para auditoría y registro de pagos",
        "Procedimiento almacenado que vence membresías",
        "4 vistas para estado de socios, historial e ingresos",
      ],
      repo: "https://github.com/Josx22/Proyecto-final-Fase-1-FitSmart",
    },
    {
      fase: "Fase 2",
      titulo: "API REST",
      tech: ["ASP.NET Core", "C#", "Entity Framework Core", "JWT"],
      usuario: "Consumida por la web y la app",
      puntos: [
        "7 controladores y 26 endpoints",
        "Login con JWT y contraseñas cifradas con BCrypt",
        "Permisos por rol: Administrador, Empleado y Socio",
        "Documentada con Swagger y probada con Postman",
      ],
      repo: "https://github.com/Josx22/Proyecto-final-Fase-2-FitSmart",
    },
    {
      fase: "Fase 3",
      titulo: "Panel web",
      tech: ["Spring Boot", "Java 21", "Thymeleaf"],
      usuario: "Administradores y empleados",
      puntos: [
        "CRUD de socios y de maquinaria",
        "Buscar socio por DUI, asignar plan y registrar pago",
        "Sesión con el token guardado del lado del servidor",
        "Eliminar solo disponible para el Administrador",
      ],
      repo: "https://github.com/Josx22/Proyecto-final-Fase-3-FitSmart",
    },
    {
      fase: "Fase 4",
      titulo: "App Android",
      tech: ["Kotlin", "Jetpack Compose", "Retrofit"],
      usuario: "Socios del gimnasio",
      puntos: [
        "5 pantallas con Navigation Compose",
        "Estado de membresía y compra de plan",
        "Catálogo de maquinaria e historial de pagos",
        "Manejo de carga y errores de conexión",
      ],
      repo: "https://github.com/Josx22/Proyecto-final-Fase-4-FitSmart",
    },
  ],
};

/* ---------------------------------------------------------
   ARCHIVO DE PROYECTOS
   - categoria: se usa para los filtros
   - tech: lista de tecnologías (se cuentan automáticamente
     en la sección "Con qué trabajo")
   - repo: enlace al repositorio (o a la carpeta dentro de él)
   --------------------------------------------------------- */
export const PROYECTOS: Proyecto[] = [
  {
    nombre: "Sistema de Control de Gimnasio",
    fecha: "Mar 2026",
    anio: 2026,
    tipo: "Sistema multiplataforma",
    categoria: ["C# / .NET", "Java"],
    tech: ["ASP.NET Core", "C#", "Entity Framework Core", "JWT", "ASP.NET MVC", "JavaFX", "Java Swing", "Java"],
    descripcion:
      "Cuatro módulos sobre un mismo dominio: una API en ASP.NET Core con JWT, un cliente web en ASP.NET MVC, una app de escritorio en JavaFX para empleados y otra en Java Swing para administración. Es el mismo dominio que después retomé en FitSmart.",
    repo: "https://github.com/Josx22/Sistema-de-Control-de-gimnasio",
  },
  {
    nombre: "Sistema de Gestión de Productos",
    fecha: "Jul 2026",
    anio: 2026,
    tipo: "Aplicación web",
    categoria: ["Java"],
    tech: ["Spring Boot", "Java", "Spring Data JPA", "Thymeleaf", "H2"],
    descripcion:
      "CRUD de productos para una bodega: listar, agregar, editar y ver detalle, con vistas en Thymeleaf y persistencia con Spring Data JPA. Evaluación del módulo 3.4.",
    repo: "https://github.com/Josx22/Sistema-de-Gestion-de-Productos",
  },
  {
    nombre: "DemoApi",
    fecha: "Ene 2026",
    anio: 2026,
    tipo: "API REST",
    categoria: ["C# / .NET", "PHP"],
    tech: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "PHP"],
    descripcion:
      "API de productos y usuarios en ASP.NET Core con Entity Framework Core y Swagger, más una versión equivalente escrita en PHP para comparar ambos enfoques.",
    repo: "https://github.com/Josx22/DemoApi",
  },
  {
    nombre: "Tarjeta de presentación en Compose",
    fecha: "Jul 2026",
    anio: 2026,
    tipo: "App Android",
    categoria: ["Kotlin"],
    tech: ["Kotlin", "Jetpack Compose"],
    descripcion:
      "Primera app Android con Jetpack Compose: una tarjeta de presentación con foto, datos de contacto y tema propio. Evaluación del módulo 3.5.",
    repo: "https://github.com/Josx22/EvaluacionModulo3.5",
  },
  {
    nombre: "Guías de práctica",
    fecha: "Ene – Feb 2026",
    anio: 2026,
    tipo: "Colección de ejercicios",
    categoria: ["Java", "C# / .NET"],
    tech: ["Java", "JavaFX", "Java Swing", "ASP.NET MVC", "C#"],
    descripcion:
      "Diez guías del módulo: programación orientada a objetos, interfaces con Swing, manejo de ficheros, formularios en JavaFX, una tienda en ASP.NET y una app que consume la API pública de la NASA (foto astronómica del día).",
    repo: "https://github.com/Josx22/Guias",
  },
  {
    nombre: "The Legacy of the Dungeon",
    fecha: "2025",
    anio: 2025,
    tipo: "Videojuego 2D",
    categoria: ["Python"],
    tech: ["Python", "Pygame", "Tiled"],
    descripcion:
      "Juego de exploración en Pygame con 4 niveles diseñados en Tiled, cámara que sigue al personaje, colisiones con el escenario, objetos recogibles, menú de pausa y música por nivel.",
    repo: "https://github.com/Josx22/Proyectos/tree/main/JuegoPython",
  },
  {
    nombre: "Taller Mecánico K2H",
    fecha: "2025",
    anio: 2025,
    tipo: "Aplicación web",
    categoria: ["PHP"],
    tech: ["PHP", "MySQL", "JavaScript", "HTML y CSS"],
    descripcion:
      "Sistema web con tres roles: el cliente solicita mantenimientos preventivos o correctivos y compra productos con carrito; el gerente administra productos y técnicos; el técnico ve sus trabajos.",
    repo: "https://github.com/Josx22/Proyectos/tree/main/TallerMecanicok2h",
  },
  {
    nombre: "Ecas Internacional",
    fecha: "2025",
    anio: 2025,
    tipo: "Sitio web",
    categoria: ["PHP"],
    tech: ["PHP", "MySQL", "JavaScript", "HTML y CSS"],
    descripcion:
      "Sitio para una empresa de servicios con formulario de solicitud y un panel de administrador para listar, buscar y marcar solicitudes como revisadas.",
    repo: "https://github.com/Josx22/Proyectos/tree/main/Ecas",
  },
  {
    nombre: "Arrupe News",
    fecha: "2025",
    anio: 2025,
    tipo: "Sitio web",
    categoria: ["Web"],
    tech: ["HTML y CSS", "JavaScript"],
    descripcion:
      "Sitio de noticias estudiantil con secciones de artículos, entrevistas, torneos, estudio y entretenimiento, cada una con su propia hoja de estilos.",
    repo: "https://github.com/Josx22/Proyectos/tree/main/ArrupeNews",
  },
  {
    nombre: "Registro en matriz 3×3",
    fecha: "2025",
    anio: 2025,
    tipo: "App de escritorio",
    categoria: ["C# / .NET"],
    tech: ["C#", "Windows Forms"],
    descripcion:
      "Aplicación de Windows Forms que guarda registros en una matriz de 3×3 y valida la entrada (solo letras o solo números según el campo).",
    repo: "https://github.com/Josx22/Proyectos/tree/main/TraficoUrbano",
  },
];

/* ---------------------------------------------------------
   HABILIDADES
   Solo lo que aparece en tus proyectos. El número de
   proyectos que usa cada una se calcula solo.
   --------------------------------------------------------- */
export const HABILIDADES = [
  { grupo: "Backend", items: ["ASP.NET Core", "C#", "Spring Boot", "Java", "PHP", "Entity Framework Core", "JWT"] },
  { grupo: "Bases de datos", items: ["SQL Server", "T-SQL", "MySQL", "Spring Data JPA", "H2"] },
  { grupo: "Web", items: ["HTML y CSS", "JavaScript", "Thymeleaf", "ASP.NET MVC"] },
  { grupo: "Móvil y escritorio", items: ["Kotlin", "Jetpack Compose", "Retrofit", "JavaFX", "Java Swing", "Windows Forms"] },
  { grupo: "Otros", items: ["Python", "Pygame", "Git y GitHub", "Postman", "Swagger"] },
];

/* ---------------------------------------------------------
   TRAYECTORIA (fechas tomadas de tus repositorios)
   --------------------------------------------------------- */
export const TRAYECTORIA = [
  { fecha: "2025", titulo: "Primeros proyectos", detalle: "Sitios en HTML, CSS y PHP con MySQL, un juego en Pygame y apps en Windows Forms." },
  { fecha: "Ene – Mar 2026", titulo: "APIs y aplicaciones en Java y .NET", detalle: "Guías del módulo, DemoApi y el primer sistema de gimnasio con API, web y escritorio." },
  { fecha: "Jul 2026", titulo: "Spring Boot y Android", detalle: "Gestión de productos con Spring Boot y primera app con Jetpack Compose." },
  { fecha: "Ago – Sep 2026", titulo: "FitSmart", detalle: "Proyecto final de punta a punta: base de datos, API, panel web y app Android." },
];
