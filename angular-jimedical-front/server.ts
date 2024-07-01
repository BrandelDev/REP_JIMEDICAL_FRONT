(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');
import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';
import { environment } from './src/environments/environment';

// La aplicación Express se exporta para ser utilizada por Firebase Functions
export function app(): express.Express {
  const server = express();

  // Definir la ubicación del directorio según el entorno
  const websiteFileLocation = environment.production ? 'dist/angular-jimedical-front/browser' : 'browser';
  const distFolder = join(process.cwd(), websiteFileLocation);
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';

  // Nuestro motor express-engine Universal
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Ejemplo de endpoints de la API REST de Express
  // server.get('/api/**', (req, res) => { });
  // Servir archivos estáticos desde /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // Todas las rutas regulares usan el motor Universal
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

// Webpack reemplazará 'require' con '__webpack_require__'
// '__non_webpack_require__' es un proxy para 'require' de Node
// El siguiente código asegura que el servidor se ejecute solo cuando no se está requiriendo el paquete.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  // En producción, el servidor se ejecuta a través de Firebase Functions
  if (!environment.production) {
    // run(); // Descomentar esto si quieres ejecutar el servidor localmente en desarrollo
  }
}

export * from './src/main.server';