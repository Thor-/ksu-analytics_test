import { configure, getLogger, shutdown } from 'log4js';

const env = (process.env.NODE_ENV || '').toUpperCase();
if (!env) {
  throw new Error('NODE_ENV variable is required');
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json');

const layout = {
  type: 'pattern',
  pattern: '[%d] [%p] [%x{env}] [%x{service}] %c - %m%n',
  tokens: {
    env,
    service: pkg.name
  }
};

configure({
  appenders: {
    file: {
      type: 'dateFile',
      filename: 'logs/all.log',
      layout
    },
    console: { type: 'stdout' },    
  },
  categories: {
    default: { appenders: ['file', 'console'], level: 'DEBUG' },
    errors: {
      appenders: ['file', 'console'],
      level: 'ERROR'
    }
  }
});

// tslint:disable-next-line: no-any
function exitHandler(err: any): void {
  if (err) {
    console.error(err);
  }

  shutdown(e => {
    process.exit(e ? 1 : 0);
  });
}

process.on('SIGINT', exitHandler);

export const logger = getLogger();
export const errorLogger = getLogger('error');
