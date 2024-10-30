export default (() => {
  const events = {};

  const subscribe = (eventName, fn) => {
    //console.log(`PUBSUB: someone just subscribed to know about ${eventName}`);
    //add an event with a name as new or to existing list
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  };

  const unsubscribe = (eventName, fn) => {
    //console.log(`PUBSUB: someone just UNsubscribed from ${eventName}`);
    //remove an event function by name
    if (events[eventName]) {
      events[eventName] = events[eventName].filter((f) => f !== fn);
    }
  };

  const publish = (eventName, data) => {
    //console.log(`PUBSUB: Making an broadcast about ${eventName} with ${data}`);
    //emit|publish|announce the event to anyone who is subscribed
    if (events[eventName]) {
      events[eventName].forEach((f) => {
        f(data);
      });
    }
  };

  return { subscribe, unsubscribe, publish };
})();
