
export const getUserInfo = (params) => {
  console.log('params', params)
  fetch('./user.json', {
    method: 'GET',
  });
  if (params === '0') {
    return '{"data": 0}'
  } else {
    return '{"data": 1}'
  }
};

export const search = () => {
  return fetch(`http://api.dotfashion.cn:8115/mock/435/payOrder/selectPayOrderPage`
    , {
    method: 'GET',
  }).then(
    response => response.json()
  );

};
