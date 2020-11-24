<template>
  <div class="about">
    <h1 id="titulo" class="mx-auto">Registro de trabajo</h1>
    <p>Primero que todo estoy agradecido por la portunidad.
      Disculpen la tardanza no quiero excusarme pero no he
      podido concentrarme rapido, estos dias he tenido que
      cuidar a mi abuela que se enfermo de covid, eso me
      consumio bastante tiempo. No he dormido un dia para
      poder terminar todo, primero me familiarice con Vue
      para luego desarrollar, mas que todo lei libros y vi
      el curso de Platzi de Vue. La libreria de css que use
      fue la de bootstrapp y bootstap vue, en general
      me gusto trabajar con Vue, lastima que no pude usar
      Vuex pero vi que es parecido a Redux, dedicandole tiempo
      con calma me familiarizo rapido. Estoy muy apenado por la
      tardanza. Habian mas detalles y funciones que me hubiesen
      gustado hacer con mas tiempo las hubiese hecho.
    </p>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col" lang="es">¿Completado?<br>(SI/NO)</th>
      <th scope="col">Comentarios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>SI</td>
      <td><p>Este item no fue tan complicado al
              hacerlo con Vue-clime gusto mucho
              como es la configuracion para crear
              proyectos de Vue, es algo distinto a
              React.
              </p>></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SI</td>
      <td><p>
         Lo mas complicado de esta tarea fue
         trabajarlo distinto que en React, dentro
         de todo hay muchas semejanzas y para
         conectar con una API es el mismo codigo
         que en React, solo que la comunicacion en Vue
         entre componentes es muy distinta, tuve
        que adaptarme a la relacion de comunicacion
        entre componentes padre e hijos.
        </p></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>SI</td>
      <td>
        Editado:Al final lo realice. En el console log
        se puede ver todo con detalles. A veces marca
        errores de network y a veces no,
        pero es mas por el servidor de la api que otra
        cosa.
      </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Si</td>
      <td>Al principio no entendi bien esta API,
        una vez que la lei con calma, todo se
        facilito, para comprobar que se hizo la
        conexion correcta con la API, hay unos
        logs de consola que demuestran que se
        hizo de manera exitosa con el mismo
        objeto que provee la API
      </td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Si</td>
      <td>Ya tengo experiencia trabajando
        con git y github, fue una de las
        tareas mas sencillas. Aunque me confie un poco,
        y cometi un error, por suerto tenia un backup
        sino hubiese perdido todo</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Si</td>
      <td>Fue muchisimo mas dificil de lo que
        esperaba tuve que hacerlo despues de poder
        dormir y con calma se me hizo mas sencillo
      </td>
    </tr>
  </tbody>
</table>
  <main-nav-bar/>
  </div>
</template>
<script>

export default {
  name: 'Diario',
  components: {

  },
};
</script>

<style scoped>
  #titulo{
    background-color: lightgrey;
  }
</style>
