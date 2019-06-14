import * as Koa from 'koa';
import { databaseInitializer } from './startdb';

const bootstrap = async () => {
    await databaseInitializer();

    const app = new Koa();

    app.use(async ctx => {
        ctx.body = "It works!\n";
    });

    app.listen(3000);
};

bootstrap();