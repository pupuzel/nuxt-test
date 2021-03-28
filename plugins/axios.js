export default function ({ $axios, res }) {
  $axios.setHeader('content-type', 'application/json')
  $axios.setHeader('X-Requested-With', 'Axios')
  $axios.onError((error) => {
      if(error.response && error.response.status){
        const code = parseInt(error.response.status)
        redirect(`/error/${code}`)
      }

  })
  $axios.onResponse((response) => {
    const setCookies = response.headers['set-cookie'];
    if (setCookies) {
      res.setHeader('Set-Cookie', setCookies);
    }
  });
}