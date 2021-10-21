function ourFetch(url, params) {
  return new Promise((resolve, reject) => {
    console.log(url, params);

    let method = 'GET';
    if (params.method) method = params.method;

    let body = [];
    if (params.body) body = params.body;

    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(xhr.status);
    xhr.ontimeout = () => { console.log('503 Service Unavailable'); };
    xhr.send(body);
  });
}

module.export = ourFetch;
