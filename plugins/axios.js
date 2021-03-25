export default function({ $axios, redirect }){
    $axios.setHeader('content-type', 'application/json')
    $axios.onError((error) => {
        if(error.response && error.response.status){
          const code = parseInt(error.response.status)
          redirect(`/error/${code}`)
        }

    })
}