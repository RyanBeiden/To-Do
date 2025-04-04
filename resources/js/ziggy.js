const Ziggy = {
  url: 'http:\/\/localhost',
  port: null,
  defaults: {},
  routes: {
    login: { uri: '\/', methods: ['GET', 'HEAD'] },
    authenticate: { uri: 'login', methods: ['POST'] },
    dashboard: { uri: 'dashboard', methods: ['GET', 'HEAD'] },
    'store.task': { uri: 'tasks', methods: ['POST'] },
    'update.task': {
      uri: 'tasks\/{task}',
      methods: ['PUT'],
      parameters: ['task'],
      bindings: { task: 'id' },
    },
    'delete.task': {
      uri: 'tasks\/{task}',
      methods: ['DELETE'],
      parameters: ['task'],
    },
    'storage.local': {
      uri: 'storage\/{path}',
      methods: ['GET', 'HEAD'],
      wheres: { path: '.*' },
      parameters: ['path'],
    },
  },
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
