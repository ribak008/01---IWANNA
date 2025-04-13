import { registerRootComponent } from "expo";

import App from "./apps/App";
import MiPerfil from "./apps/Mi-perfil";
import Login from "./apps/Account/Login";
import Categorias from "./apps/(tabs)/categorias";
import DetalleCategorias from "./apps/Categorias/DetalleCategoria";
import Home from "./apps/(tabs)/home";
import layout from "./apps/_layout";
import Register from "./apps/Account/Register";
import Recover from "./apps/Account/Recover";
import Categoria from "./apps/Categorias/Categoria";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//registerRootComponent(layout);
// registerRootComponent(Login);
registerRootComponent(layout);
