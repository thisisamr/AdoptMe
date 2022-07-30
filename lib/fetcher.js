export default function fetcher(url) {
  return fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-type": "Application/json",
    },
  }).then((res) => res.json());
}
