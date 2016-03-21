export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    console.log('enter remote action middleware');
    socket.emit('action', action);
  }
  return next(action);
}