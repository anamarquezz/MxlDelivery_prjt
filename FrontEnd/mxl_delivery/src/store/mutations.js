export default {
  set_dialog(state, values) {
    switch (values.is) {
      case "error":
        state.sdialog.colorbarra = "red lighten-1";
        state.sdialog.textcolorbarra = "white--text";
        state.sdialog.iconbarra = "fas fa-exclamation-triangle";
        break;
      case "pregunta":
      case "informacion":
        state.sdialog.colorbarra = "gren lighten-1";
        state.sdialog.textcolorbarra = "white--text";
        state.sdialog.iconbarra = "fas fa-info-circle";
        break;
    }
    state.sdialog.titulobarra = values.titulobarra;
    state.sdialog.mensaje = values.mensaje;
    state.sdialog.show = values.show;
  },
  MENU_SET(state,value){
    state.menu=value.menus;
  },
  set_seleccionadoGrid(state,value){
    state.seleccionadoGrid = value;
  }
};
