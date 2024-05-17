let encabezado = `I'M A SOFTWARE DEVELOPER`;
let subtitle = `BRINDO SERVICIOS INFORMÁTICOS Y TECNOLÓGICOS PROFESIONALES, FLEXIBLES, DINÁMICOS Y SEGUROS,
 PROYECTADOS AL DESARROLLO TECNOLÓGICO DE MIS CLIENTES.`;
 let opciones = `
    <span class="option active-option" id="option_0"><b id="ic_option_0"></b>Inicio</span>
    <span class="option" id="option_1"><b id="ic_option_1"></b>Perfil</span>
    <span class="option" id="option_2"><b id="ic_option_2"></b>Proyectos</span>
    <span class="option" id="option_3"><b id="ic_option_3"></b>Contacto</span>
    <span class="option" id="option_4"><b id="ic_option_4"></b>Social</span>
 `;
 let my_profile = `
    <h2 class="midp-font">Soy Fernando Osorio</h2>
    <div class="sm-text">
        <p>
            Con más de cuatro años de experiencia en el desarrollo de software,
            mi pasión por la informática ha sido el motor que ha impulsado mi carrera profesional.
            Me considero un entusiasta de la tecnología, siempre en busca de las últimas tendencias y avances en programación,
            ciberseguridad y computación.
        </p>
        <p>
            Mi trayectoria como desarrollador me ha permitido trabajar en una amplia gama de proyectos, 
            desde aplicaciones web hasta sistemas complejos de backend, 
            lo que ha enriquecido mi conjunto de habilidades y conocimientos técnicos. 
            La innovación y la resolución de problemas son aspectos que disfruto profundamente, 
            y me esfuerzo por aplicarlos en cada línea de código que escribo.
        </p>
        <p>
            Mantenerme actualizado no es solo una necesidad profesional, 
            sino también un interés personal. Dedico tiempo a estudiar y experimentar con nuevos lenguajes de programación, 
            frameworks y herramientas de seguridad. La ciberseguridad es un campo que me apasiona especialmente, 
            ya que considero que es fundamental para el desarrollo de software seguro y confiable.
        </p>
    </div>
`;
let myskillstitle = `
    <h2 class="midp-font">HABILIDADES PROFESIONALES</h2>
    <div class="prof-profile sm-text">
        <p>
            Seguridad informática y ciberseguridad; 
            Python, Java, Javascript, PHP, MySQL, PostgreSQL, MongoDB;
            CSS, Bootstrap, HTML5, JQuery, Git y GitHub, Angular, NodeJS, Flask, Django,
            capacidad de trabajo en equipo y metodologías SCRUM.
        </p>
    </div>
    <div class="skill">
        <div class="logo-lang">
            <span class="langs" id="python"></span>
            <span class="langs" id="javascript"></span>
            <span class="langs" id="php"></span>
            <span class="langs" id="java"></span>
            <span class="langs" id="angular"></span>
            <span class="langs" id="node"></span>
            <span class="langs" id="flask"></span>
            <span class="langs" id="django"></span>
        </div>
        <div class="graph-container">
            <div class="main-satat">
                <span class="mstatA">
                    <span class="sp-filter"></span>
                    <span class="mstatB">
                        <span class="sm-text" id="in-lang"></span>
                    </span>
                </span>
            </div>
            <div class="p-lang">
                <span class="stadisticA spA1">
                    <span class="stadisticB">Manejo</span>
                </span>
                <span class="stadisticA spB1">
                    <span class="stadisticB">Exp.</span>
                </span>
                <span class="stadisticA spC1">
                    <span class="stadisticB">Recursos</span>
                </span>
            </div>
        </div>
    </div>
`;
let intro_projects =  `
    <div class="prof-profile sm-text">
        <p>
            En mi trayectoria como programador, me he propuesto a construir una variedad de proyectos,
            los cuales han implicado la aplicación y el aprendizaje de distintas habilidades en torno
            al desarrollo de software. Estos proyectos me han permitido comprender y perfeccionar los
            métodos utilizados para conseguir estructurar y construir a cabalidad dichos proyectos.
            A continuaciín presento algunos de ellos:
        </p>
    </div>
`;
let projects = `
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/sirvi.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">S.I.R.V.I</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            El Sistema Inteligente de Registro para Ventas e Inventario, SIRVI, es un sistema dinámico e
            intuitivo que permite gestionar y administrar de manera precisa las actividades comerciales
            y locales de un negocio o empresa, incluye sistema POS, gestión de sucursales, gestión de clientes
            y muchas funciones mas.
        </span>
        <button class="readmore">Conocer más</button>
    </div>
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/EasyParking.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Easy Parking</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="python"></span>
            <span class="used-tech" id="flask"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            Easy Parking es un sistema que gestiona y organiza las operaciones de su negocio de parking; 
            simplificando la manera en que se lleva el control de plazas disponibles, 
            acciones de facturación, trazabilidad diaria de ingreso de vehículos y estructura 
            financiera con sistema de ingresos y egresos.
        </span>
        <button class="readmore">Conocer más</button>
    </div>
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/chatmast.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Chatmaster</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="node"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            Chatmaster es un software de chat abierto y directo en tiempo real,
            este software cuenta con cifrado entre usuarios, el cual consta de
            mensajes encriptados con una key que solo el remitente y el receptor
            poseen, además permite crear canales y comunidades de chat con perfiles anónimos
            y seguros. 
        </span>
        <button class="readmore">Conocer más</button>
    </div>
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/smartbar.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Smart-Bar</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            Chatmaster es un software de chat abierto y directo en tiempo real,
            este software cuenta con cifrado entre usuarios, el cual consta de
            mensajes encriptados con una key que solo el remitente y el receptor
            poseen, además permite crear canales y comunidades de chat con perfiles anónimos
            y seguros. 
        </span>
        <button class="readmore">Conocer más</button>
    </div>
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/bingo.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Happy Bingo</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            Este software es el típico juego de bingo, con la particularidad de que
            su entorno es netamente virtual, tantopara el proceso de generar cartones de juego
            como para el desarrollo del mismo en si, eligiendo números de manera aleatoria entre
            1 y 75, permitiendo también múltiples modos de juego.
        </span>
        <button class="readmore">Conocer más</button>
    </div>
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/gestempleados.svg) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">G-Empleados</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            G-Empleados es un software completo que sirve para la gestión de empleados,
            el sistema incluye entre su gran variedad de funciones, sus respectivos procesos
            de identificación de empleados, control de horario, generación de carnet de acceso,
            lector de códigos QR, calculadora de nómina y muchas características más. 
        </span>
        <button class="readmore">Conocer más</button>
    </div>
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/jager.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">JAGER</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="python"></span>
            <span class="used-tech" id="bash"></span>
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            JAGER es una herramienta diseñada para ciberseguridad, la cual permite
            obtener la ubicación exacta de un dispositivo mediante la interacción
            de dispositivos mediante transacciones HTTP.
            Este software permite obtener los datos de ubicación de un dispositivo
            mediante ingeniería social en tiempo real.
        </span>
        <button class="readmore">Conocer más</button>
    </div>
    <div class="project">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/encrypt.svg) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Encryptor</h2>
        <div class="used-technologies-logo">
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <span class="stext">
            Esta es una sencilla pero poderosa herramienta, cuya función es 
            encriptar y proteger el código HTML y Javascrip que se le asigne,
            su funcionamiento se basa en la ofuscación efectíva de código
            mediante librerías nativas de Javascript.
        </span>
        <button class="readmore">Conocer más</button>
    </div>
`;
