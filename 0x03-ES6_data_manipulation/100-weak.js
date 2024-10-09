export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is a valid object with required properties
  if (typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  // Initialize the count for the endpoint if not already set
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Update the count
  const count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);

  // Check if the count exceeds or equals 5 and throw an error if it does
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
