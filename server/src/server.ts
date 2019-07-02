import * as Koa from 'koa';
import { databaseInitializer } from './startdb';
import { routes } from './routes';

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();

    app
    .use(routes.routes())
    .use(routes.allowedMethods());

    app.listen(3000);
};

bootstrap();