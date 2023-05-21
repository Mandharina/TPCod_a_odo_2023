/*class Club{
    constructor(año,nombre,descripción){
        this.año = año
        this,nombre = nombre
        this.descripción = descripción

    }
}*/
const clubes = [
    {
        fundacion: '1873',
        nombre: 'Buenos Aires Rowing Club',
        descripcion: 'Ubicado en Mitre 226, frente al Río Tigre. Fundado el 16 de diciembre de 1873 e instalado en Tigre desde principios de siglo, cuenta con un predio de 8.000 m2, mientras que su edificio de estilo Tudor, del año 1916, es de 3.000 m2. En sus galpones para botes, contienen más de 200 embarcaciones para la práctica del    remo o del canotaje. Acumulando más de 1.000 triunfos en regatas de alta competencia.',
        foto: 'images/bsasrowingclub.jpg'
    },
    {
        fundacion: '1876',
        nombre: 'Club de Regatas La Marina',
        descripcion: 'Ubicado sobre el Río Luján, frente a Paseo Victorica y Colón. Fundado el 18 de julio de 1876,esta legendaria y prestigiosa institución del remo argentino posee más de 1.700 regatas ganadas. En 2014 el edificio, obra del arquitecto Bernardo Fontán, fue declarado Monumento Histórico Nacional.',
        foto: 'images/crlm.jpg'
    },
    {
        fundacion: '1888',
        nombre: 'Tigre Boat Club',
        descripcion: 'Ubicado en Lavalle 235, a orillas del Río Luján. Fundado en Buenos Aires el 17 de julio de 1888, el edificio principal perteneció a la familia Doldz, que la había construido en 1870 y que en 1910 fue comprada por el club. Actualmente cuenta con todo lo necesario para la práctica del remo incluidos unos 70 botes de paseo y competición.',
        foto: 'images/tbc.jpg'
    },
    {
        fundacion: '1906',
        nombre: 'Rowing Club Argentino',
        descripcion: 'Ubicado en Lavalle 235, a orillas del Río Luján. El club fue fundado por descendientes de británicos, escoceses y belgas que decidieron unir la cultura criolla con las de otros lugares de Europa. El 6 de mayo de 1906 fue inaugurado el primer local social de dos plantas. El 11 de noviembre de 1908, el Rowing Club Argentino debutó en regatas oficiales.',
        foto: 'images/rowingclubargentino.jpg'
    },
    {
        fundacion: '1910',
        nombre: 'Club Canotieri Italiani',
        descripcion: 'Ubicado en Mitre 74, a orillas del Río Tigre. Característico por su estilo veneciano, precursor en la difusión del remo como deporte en la República Argentina. Desde su fundación es un centro de práctica deportiva para toda la familia. Se fundó el 1 de enero de 1910. En 1952 los remeros del club, Eduardo Guerrero y Tranquilo Capozzo conquistaron la primera medalla dorada olímpica en Helsinki para el remo argentino.',
        foto: 'images/canottieri.jpg'
    },
    {
        fundacion: '1912',
        nombre: 'Club de Remeros Escandinavos',
        descripcion: 'Ubicado en Túpac Amaru 1046, sobre la desembocadura del Río Reconquista sobre el río Luján. El Club de Remeros Escandinavos fue fundado por noruegos, suecos, finlandeses y daneses el 26 de octubre de 1912. Su primera sede fue en un pequeño Club House sobre Paseo Victorica, en los ‘60 se mudo a una sede ubicada en la desembocadura del río de Las Conchas y el río Luján. Finalmente, en 2007 trasladan su sede a la otra orilla del río Luján.',
        foto: 'images/clubderemerosescand.jpg'
    },
    {
        fundacion: '1913',
        nombre: 'Club de Regatas Hispano-Argentino',
        descripcion: 'Ubicado en Paseo Victorica 50, a orillas del Río Luján. Fundado el 10 de abril de 1913, con la idea de crear una entidad formada por españoles y argentinos para fomentar la práctica del remo. Fue la primera institución deportiva que ganó una Regata Femenina, en 1926',
        foto: 'images/clubhispanoarg.jpg'
    },    
    {
        fundacion: '1913',
        nombre: 'Club Suizo de Buenos Aires',
        descripcion: 'Ubicado en Lavalle 115, sobre el Río Tigre. El club fue fundado el 17 de mayo de 1913 por una comunidad de ciudadanos suizos residentes en la Argentina. Durante los años 1925 y 1926 se construyeron la rampa y el galpón de botes, y comenzó la edificación de las canchas de tenis.',
        foto: 'images/Club-Suizo.jpg'
    },
    {
        fundacion: '1920',
        nombre: "Club de Regatas L'Aviron",
        descripcion: 'Ubicado en Ayacucho 971, a orillas del Río Tigre. Fundado el 13 de octubre de 1920 por integrantes de la colectividad francesa, belga y suiza. En 1923 consiguieron el terreno donde se construyó el edificio actual, obra del arquitecto Feliciano Durand.',
        foto: 'images/Club-Laviron.jpg'
    },
    {
        fundacion: '1932',
        nombre: 'Club de Regatas América',
        descripcion: 'Ubicado en Lavalle 167, sobre el Río Tigre. Fundado el 30 de julio de 1920. Posee 3 escuelas: remo para adultos, para jóvenes y niños, y remo travesía. El edificio actual fue modificado e inaugurado en 1932. Su actividad principal es la práctica del remo de paseo. Posee 3 escuelas: remo para adultos, para jóvenes y niños, y remo travesía.',
        foto: 'images/regatasamerica.jpg'
    },
    
]


//render html
var card = "";
clubes.forEach(element => {
    card += ("<div class='child'><div class='content'><img class=img src=" + element.foto + "><h4>" + element.fundacion + "</h4><h3>" + element.nombre + "</h3></p>" + element.descripcion + "</p></div></div>")
})
timeline.innerHTML = card

