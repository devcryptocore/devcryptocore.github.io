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
            <span class="langs" id="python" title="Click para ver habilidades en Python"></span>
            <span class="langs" id="javascript" title="Click para ver habilidades en JS"></span>
            <span class="langs" id="php" title="Click para ver habilidades en PHP"></span>
            <span class="langs" id="java" title="Click para ver habilidades en Java"></span>
            <span class="langs" id="angular" title="Click para ver habilidades en Angular"></span>
            <span class="langs" id="node" title="Click para ver habilidades en NodeJS"></span>
            <span class="langs" id="flask" title="Click para ver habilidades en Flask"></span>
            <span class="langs" id="django" title="Click para ver habilidades en DJango"></span>
        </div>
        <div class="graph-container">
            <div class="main-satat">
                <span class="mstatA">
                    <span class="sp-filter"></span>
                    <span class="mstatB">
                        <span class="sm-text" id="in-lang">Talénto</span>
                    </span>
                </span>
            </div>
            <div class="p-lang">
                <span class="stadisticA spA1">
                    <span class="stadisticB" id="txb1">Ingénio</span>
                </span>
                <span class="stadisticA spB1">
                    <span class="stadisticB" id="txb2">Solución</span>
                </span>
                <span class="stadisticA spC1">
                    <span class="stadisticB" id="txb3">Recursos</span>
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
            A continuación presento algunos de ellos:
        </p>
    </div>
`;
let projects = `
    <span class="arrow" id="leftarrow" onclick="back(this)"></span>
    <span class="arrow" id="rightarrow" onclick="next(this)"></span>
    <div class="project" id="p_0">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/sirvi.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">S.I.R.V.I</h2>
        <span class="stext">
            SIRVI, es un sistema dinámico e intuitivo que permite gestionar 
            y administrar de manera precisa las actividades comerciales
            y locales de un negocio o empresa.
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/devcryptocore/sirvi')">Conocer más</button>
    </div>
    <div class="project" id="p_1">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/EasyParking.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Easy Parking</h2>
        <span class="stext">
            Easy Parking es un sistema que organiza las operaciones de su negocio de parking; 
            simplificando la manera en que se lleva el control de trazabilidad diaria 
            de ingreso de vehículos.
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="python"></span>
            <span class="used-tech" id="flask"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/ferchosorio/EasyParking')">Conocer más</button>
    </div>
    <div class="project" id="p_2">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/chatmast.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Chatmast</h2>
        <span class="stext">
            Chatmast es un software de chat en tiempo real, este software cuenta con cifrado entre usuarios, 
            permite crear canales y comunidades de chat con perfiles anónimos y seguros. 
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="node"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/ferchosorio/chatmast')">Conocer más</button>
    </div>
    <div class="project" id="p_3">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/smartbar.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Smart-Bar</h2>
        <span class="stext">
            Este software, es una portente caja de herramientas que optimíza y
            aumenta la productividad de su restaurante o bar, gracias a las diversas utilidades que
            Smart-Bar posee.
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/devcryptocore/smart-bar')">Conocer más</button>
    </div>
    <div class="project" id="p_4">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/bingo.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Happy Bingo</h2>
        <span class="stext">
            Juego de bingo virtual, que facilita el proceso de generar cartones de juego
            y el desarrollo del juego en si, eligiendo números de manera aleatoria entre
            1 y 75, permitiendo también múltiples modos de juego.
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/devcryptocore/happy-bingo')">Conocer más</button>
    </div>
    <div class="project" id="p_5">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/gestempleados.svg) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">G-Empleados</h2>
        <span class="stext">
            G-Empleados es un software creado para la gestión de empleados,
            llevando procesos de identificación de empleados, control de horario, generación de carnet de acceso, 
            nómina e importantes características más.
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="mysql"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/devcryptocore/g-empleados')">Conocer más</button>
    </div>
    <div class="project" id="p_6">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/jager.webp) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">JAGER</h2>
        <span class="stext">
            JAGER es una herramienta de ciberseguridad que permite
            obtener la ubicación exacta de un dispositivo mediante la interacción
            de dispositivos mediante transacciones HTTP, empleando Ing.social.
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="python"></span>
            <span class="used-tech" id="bash"></span>
            <span class="used-tech" id="php"></span>
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/devcryptocore/jager')">Conocer más</button>
    </div>
    <div class="project" id="p_7">
        <span class="logotype" style="background:url(resources/assets/images/Proyectos/encrypt.svg) center / cover no-repeat,
        linear-gradient(45deg, #67b4eb88,#120782cf);"></span>
        <h2 class="sproj">Encryptor</h2>
        <span class="stext">
            Esta es una sencilla pero poderosa herramienta, cuya función es 
            es la ofuscación efectíva de código HTML y JS
            mediante librerías nativas de Javascript.
        </span>
        <div class="used-technologies-logo">
            <span class="used-tech" id="javascript"></span>
            <span class="used-tech" id="jquery"></span>
            <span class="used-tech" id="html"></span>
            <span class="used-tech" id="css"></span>
        </div>
        <button class="readmore" onclick="source('https://github.com/devcryptocore/encryptor')">Conocer más</button>
    </div>
`;
let contacters = `
    <div class="itext">
        <span class="big-font">TIENES UNA IDEA EN MENTE?</span>
        <span class="mid-font">Contáctame, puedo brindarte asesoría personalizada.</span>
        <span class="mid-font">Podría ser el inicio de un grán proyécto.</span>
    </div>
    <div class="impox">
        <div class="pox-cont">
            <img src="resources/assets/images/Proyectos/capture1.webp" class="cap1">
            <div class="pox">
                <span class="pox-text">Software inteligente y multipropósito</span>
            </div>
        </div>
        <div class="pox-cont">
            <img src="resources/assets/images/Proyectos/capture2.webp" class="cap2">
            <div class="pox ri">
                <span class="pox-text">Diseño profesional proyectado a la comodidad del usuario</span>
            </div>
        </div>
    </div>
`;
let my_social = `
    <div class="upper">
        <div class="social-cont">
            <div class="social-button" id="facebook" onclick="source('https://www.facebook.com/profile.php?id=100087665141542')">
                <span class="social-name">Facebook</span>
            </div>
            <div class="social-button" id="tiktok" onclick="source('https://www.tiktok.com/@devcryptocore?_t=8mTM9xCBLgz&_r=1')">
                <span class="social-name">TikTok</span>
            </div>
            <div class="social-button" id="instagram" onclick="source('https://www.instagram.com/devcryptocore?igsh=b2lrdHFjZTgxanFv')">
                <span class="social-name">Instagram</span>
            </div>
            <div class="social-button" id="telegram" onclick="source('https://t.me/+573106574835')">
                <span class="social-name">Telegram</span>
            </div>
            <div class="social-button" id="whatsapp" onclick="source('https://wa.me/+573106574835')">
                <span class="social-name">Whatsapp</span>
            </div>
            <div class="social-button" id="youtube" onclick="source('https://www.youtube.com/channel/UCd5n5V06sYUXmWnDTZo7UGQ')">
                <span class="social-name">Youtube</span>
            </div>
            <div class="social-button" id="github" onclick="source('https://github.com/devcryptocore')">
                <span class="social-name">Github</span>
            </div>
            <div class="social-button" id="linkedin" onclick="source('https://www.linkedin.com/in/fernando-javier-osorio-sanchez-b72290263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')">
                <span class="social-name">Linkedin</span>
            </div>
        </div>
    </div>
    <div class="downs">
        <div class="e-one">
            <span class="sm-text">Este sitio está construido con:</span>
            <div class="technologies">
                <span class="tech" style="background:url(resources/assets/images/svgs/javascriptc.svg) center / 30px no-repeat"></span>
                <span class="tech" style="background:url(resources/assets/images/svgs/jqueryc.svg) center / 30px no-repeat"></span>
                <span class="tech" style="background:url(resources/assets/images/svgs/htmlc.svg) center / 30px no-repeat"></span>
                <span class="tech" style="background:url(resources/assets/images/svgs/cssc.svg) center / 30px no-repeat"></span>
            </div>
        </div>
        <div class="footer">
            <span class="sm-text">Diseñado y construido por <b>Fernando Osorio</b></span>
            <span class="logotp"></span>
            <span class="sm-text">©︎ Cryptocore ${year}</span>
            <div class="technologies">
                <span class="tech" style="background:url(resources/assets/images/svgs/github.svg) center / 20px no-repeat" onclick="source('https://github.com/devcryptocore')"></span>
                <span class="tech" style="background:url(resources/assets/images/svgs/linkedin.svg) center / 20px no-repeat" onclick="source('https://www.linkedin.com/in/fernando-javier-osorio-sanchez-b72290263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')"></span>
                <span class="tech" style="background:url(resources/assets/images/svgs/telegram.svg) center / 20px no-repeat" onclick="source('https://t.me/+573106574835')"></span>
            </div>
        </div>
    </div>
`;
