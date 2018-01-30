const omega = () => {
  var channels = getRandomPool(999, 10);
  for (var i = 0; i < channels.length; i++) {
    var obj = {id: channels[i], subs: []};
    obj.subs = getRandomPool(Math.floor(Math.random() * 1000), 15);
    channels[i] = obj;
  }
  return channels;
};

const generatePool = (pool, length) => {
  var newPool = '';
  for (var i = 0; i < length; i++) {
    newPool += pool[Math.floor(Math.random() * pool.length)]
  }
  return newPool;
};

const getRandomPool = (num, length) => {
  let pool = createPool();
  let randomPool = [];
  for (var i = 0; i < num; i++) {
    let newPool = generatePool(pool, length);
    randomPool.push(newPool);
  }
  return randomPool;
};


const createPool = () => {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
};

module.exports = omega;
