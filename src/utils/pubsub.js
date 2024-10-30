export default (() => {
  const events = {};

  const subscribe = (eventName, fn) => {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  };

  const unsubscribe = (eventName, fn) => {
    if (events[eventName]) {
      events[eventName] = events[eventName].filter((f) => f !== fn);
    }
  };

  const publish = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach((f) => {
        f(data);
      });
    }
  };

  return { subscribe, unsubscribe, publish };
})();
