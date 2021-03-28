export default function ({ $axios, res }) {
  $axios.setHeader('Content-Type', false, ['post'])
  $axios.setHeader('Content-Type', 'application/json;charset=UTF-8')
  
  $axios.setHeader('X-Requested-With', 'Axios')
  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.onError((error) => {
      if(error.response && error.response.status){
        const code = parseInt(error.response.status)
        //redirect(`/error/${code}`)
      }

  })
  $axios.onResponse((response) => {
    const setCookies = response.headers['set-cookie'];
    if (setCookies) {
      res.setHeader('Set-Cookie', setCookies);
    }
  });
}