/*
  @see https://davidwalsh.name/pubsub-javascript
 */

let topics = {};

export default class PubSubService {
  subscribe = (topic, listener) => {
    // Create the topic's object if not yet created
    if(!topics[topic]) topics[topic] = { queue: [] };
    // Add the listener to queue
    const index = topics[topic].queue.push(listener) - 1;
    // Provide handle back for removal of topic
    return (function(topic, index) {
      return {
        remove: function() {
          delete topics[topic].queue[index];
        }
      }
    })(topic, index);
  };

  publish = (topic, info) => {
    // If the topic doesn't exist, or there's no listeners in queue, just leave
    if(!topics[topic] || !topics[topic].queue.length) return;

    // Cycle through topics queue, fire!
    const items = topics[topic].queue;
    for(let i = 0, len = items.length; i < len; i++) {
      if(typeof items[i] === 'function') items[i](info || {});
    }
  };
}