const getOrders = state => state.grid.grids.every(grid=>grid.name ==='orders');
const getShippings = state => state.grids.every(grid=>grid.name ==='shippings');

export {getOrders,getShippings}