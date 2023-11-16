export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_f3caa01c.mjs').then(n => n.i);

export { page };
