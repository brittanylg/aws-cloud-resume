module.exports = function(api) {
  // Don't cache at all. Not recommended because it will be very slow.
  api.cache(false);

  // Return the value that will be cached.
  return {
    plugins: ['macros'],
  };
};