export function authHeaders(token) {
  let header = {
    headers: {
      'x-api-key': token ? token : null,
    },
  };
  return header;
}
