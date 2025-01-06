
export interface infoproydto{
    title:string,
    subtitle: string,
    image: { alt: string, url: string},
    path: string,
    url: string,
    about_client: string,
    objetive: string,
    tools_tech: string,
    challenge: string,
    imageviews: Array<string>

}

export const infoProyectos: Array<infoproydto>= [
    {
        title: "Admin LocalFix",
        subtitle: "Aplicación Web",
        image: { alt: "LocalFix", url: "/localfix.png" },
        path: "localfix",
        url: 'https://admin.localfix.mx/login',
        about_client: "Personal - Servicio de reparacion de celulares.  Claves Acceso.  Usuario: invitado@email.mx .   Contraseña: Invitado",
        objetive: "Plataforma pensada para gestionar un taller de reparacion para dispositivos electronicos",
        tools_tech: "Postgresql - .Net - EF Core - Docker - Nginx - VPS - NextJS - Vercel",
        challenge: "La plataforma tiene un conjunto de caracteristicas interesantes. Al agregar una reparación se cuenta con un listado dinamico para registrar el tipo de dispositivo del que se esta tratando acorde a puntaje de mas frecuentes.. Se cuenta con gestion de estados para una mejor gestion, desde que el dispositivo es ingresado para la reparacion, cuando esta se ha concluido y finalmente entregado.. Contamos con la posibilidad de imprimir ticket con el detalle de la reparación incluyendo el diagnostico reparacion y fechas de interes recepcion y entrega.",
        imageviews: [ '/assets/plataformas/localfix/localfix1.png', '/assets/plataformas/localfix/localfix2.png', '/assets/plataformas/localfix/localfix3.png']
    },
    {
        title: "Control Productos",
        subtitle: "Aplicación Web",
        image: { alt: "LocalFix", url: "/pmmanager.png" },
        path: "pmmanager",
        url: 'https://managerpm.softwarp.net/login',
        about_client: "Personal - Servicio control inventario.  Claves Acceso.  Usuario: invitado@email.mx .   Contraseña: Invitado",
        objetive: "Plataforma pensada para gestionar flujo de inventario para productos peresederos con diferentes embalajes",
        tools_tech: "Postgresql - .Net - EF Core - Docker - Nginx - VPS - NextJS - Vercel",
        challenge: "La plataforma gestiona el flujo de inventario para productos peresederos. compra, venta y merma son las caracteristicas administradas.. configuracion de categorias y revision del inventario existente.",
        imageviews: [ '/assets/plataformas/pmmanager/pmmanager1.png', '/assets/plataformas/pmmanager/pmmanager2.png', '/assets/plataformas/pmmanager/pmmanager3.png']
    },
    {
        title: "Inscripción a cursos",
        subtitle: "Aplicación web",
        image: { alt: "LocalFix", url: "/atmosfera.png" },
        path: "inscripcion_curso",
        url: 'https://dev.softwarp.net/login',
        about_client: "Personal - plataforma de seguimiento de capacitaciones",
        objetive: "Plataforma pensada en el seguimiento para la capacitacion de perfiles traine",
        tools_tech: "Postgresql - NodeJs - ExpressJS - NextJS - Docker - Nginx - VPS - Vercel",
        challenge: "Se integran las funcionalidades para asociar Asesor-Curso-Alumnos aplicado a un evento en cierta fecha. Inscripción mediante un formulario personalizado que se crea para cada evento, este formulario es publico se puede encontrar la url generada en la sección eventos.",
        imageviews: [ '/assets/plataformas/atmosfera/atmosfera1.png', '/assets/plataformas/atmosfera/atmosfera2.png', '/assets/plataformas/atmosfera/atmosfera3.png']
    },
    {
        title: "Workline",
        subtitle: "Aplicación web",
        image: { alt: "LocalFix", url: "/workline.png" },
        path: "workline",
        url: 'https://dev.softwarp.net/login',
        about_client: "Workline - plataforma de seguimiento a servicios para una cafeteria",
        objetive: "Dar seguimiento a clientes para el conjunto de servicios que adquieren durante su visita presencial al establecimiento",
        tools_tech: "Postgresql - NodeJs - ExpressJS - NextJS - Docker - Nginx - VPS - Vercel",
        challenge: "Entre las funcionalidades mas destacadas tenemos: . Seguimiento de los diferentes tipos de ticket, tanto para pase diario con promociones incluidas o seguimiento individual de servicios utilizados.. Impresion de tickets con el detalle del consumo.. personalizacion de cupones de descuento detallados considerada esta mecanica como una de las mas importantes debido al inicio de campañas de marketing para captación de clientes.",
        imageviews: [ '/assets/plataformas/workline/workline1.png', '/assets/plataformas/workline/workline2.png', '/assets/plataformas/workline/workline3.png']

    },
    {
        title: "Bot NLP",
        subtitle: "Chat Web",
        image: { alt: "LocalFix", url: "/botnlp1.png" },
        path: "bot_nlp",
        url: 'https://frontbot.vercel.app/',
        about_client: "Personal",
        objetive: "Ejemplo bot preguntas - respuestas",
        tools_tech: "NodeJs - ExpressJS - SocketIO - NextJS - Vercel",
        challenge: "La mecanica principal consiste en manejar el protocolo wss mediante nextjs para interacción con el bot en el servicio backend",
        imageviews: [ '/assets/plataformas/botnlp/botnlp1.png', '/assets/plataformas/botnlp/botnlp2.png']

    },
    {
        title: "Componentes para NextJs ",
        subtitle: "Libreria UI",
        image: { alt: "LocalFix", url: "/uilibrary.png" },
        path: "ui_library",
        url: 'https://github.com/AvielAD/ui-components/pkgs/npm/componentspublish',
        about_client: "Personal",
        objetive: "Libreria componentes para dashboard",
        tools_tech: "NodeJs - ExpressJS - SocketIO - NextJS - Vercel",
        challenge: "Se cuenta con un grupo de elementos ui para Nextjs con tailwindcss, Banner, Card, Header, SideBar, Hooks Personalizados.",
        imageviews: [ '/assets/plataformas/uilibrary/ui1.png', '/assets/plataformas/uilibrary/ui2.png', '/assets/plataformas/uilibrary/ui3.png']

    },
    {
        title: "Landing Page Atmosfera",
        subtitle: "Web",
        image: { alt: "LocalFix", url: "/landingatmosfera.png" },
        path: "landing_atmosfera",
        url: 'https://dev.softwarp.net/',
        about_client: "Personal - Chat ",
        objetive: "Pagina Landing para la promocion del sitio web promocional para cursos presenciales",
        tools_tech: "NextJS - Vercel",
        challenge: "",
        imageviews: [ '/assets/plataformas/landinglocalfix/llocalfix1.png', '/assets/plataformas/landinglocalfix/llocalfix2.png', '/assets/plataformas/landinglocalfix/llocalfix3.png']

    },
    {
        title: "Landing Page LocalFix",
        subtitle: "Web",
        image: { alt: "LocalFix", url: "/llocalfix1.png" },
        path: "landing_localfix",
        url: 'https://localfix.mx',
        about_client: "",
        objetive: "Pagina Landing con la descripción de algunos servicios para la pagina de reparacion de equipo eletronico.",
        tools_tech: "NextJs - Vercel",
        challenge: "",
        imageviews: [ '/assets/plataformas/landinglocalfix/llocalfix1.png', '/assets/plataformas/landinglocalfix/llocalfix2.png', '/assets/plataformas/landinglocalfix/llocalfix3.png' ]

    }

]