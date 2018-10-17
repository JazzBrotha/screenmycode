import {
  ServerLoader,
  ServerSettings,
  GlobalAcceptMimesMiddleware,
} from '@tsed/common';
import Path = require('path');

@ServerSettings({
  rootDir: Path.resolve(__dirname), // optional. By default it's equal to process.cwd()
  acceptMimes: ['application/json'],
  httpPort: '127.0.0.1:8081',
  httpsPort: '127.0.0.2:8082',
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the middleware required by your application to works.
   * @returns {Server}
   */
  public $onMountingMiddlewares(): void | Promise<any> {
    const cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compress = require('compression'),
      methodOverride = require('method-override');

    this.use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        }),
      );

    return null;
  }

  public $onReady() {
    console.log('Server started...');
  }

  public $onServerInitError(err) {
    console.error(err);
  }
}

new Server().start();
