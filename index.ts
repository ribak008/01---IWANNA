import { registerRootComponent } from 'expo';

import App from './apps/App';
import MiPerfil from './apps/Mi-perfil';
import Login from './apps/Login';
import Categorias from './apps/(tabs)/Categorias';
import DetalleCategorias from './apps/DetalleCategoria';
import DetalleCategoriaPosts from './components/detalleCategorias/DetalleCategoriasPost';
import DetalleCategoriaTrabajadores from './components/detalleCategorias/detalleCategoriasTrabajadores';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//registerRootComponent(MiPerfil);efef
registerRootComponent(DetalleCategorias);
