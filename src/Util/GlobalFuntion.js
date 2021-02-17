export function authHeaders(token) {
  let header = {
    headers: {
      'x-api-key': token ? token : null,
    },
  };
  return header;
}

export const browserLog = (message, color, data) => {
  console.log(`%c${message}`, `color: ${color ? color : '#1687a7'}; font-weight: bolder; font-size: 13px; font-style: italic;`, data || '');
};
