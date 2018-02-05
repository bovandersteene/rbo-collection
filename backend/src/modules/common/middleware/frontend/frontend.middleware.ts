import { ExpressMiddleware, Middleware, NestMiddleware } from '@nestjs/common';

import * as path from 'path';
import { ROUTE_PREFIX } from '../../../../routes';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

const resolvePath = (file: string) => path.resolve(`../dist/${file}`);

@Middleware()
export class FrontendMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
      const { url } = req;
      if (url.indexOf(ROUTE_PREFIX) === 1) {
        // it starts with /api --> continue with execution
        next();
      } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
        // it has a file extension --> resolve the file
        res.sendFile(resolvePath(url));
      } else {
        // in all other cases, redirect to the index.html!
        res.sendFile(resolvePath('index.html'));
      }
    };
  }
}
