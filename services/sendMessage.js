var Kavenegar = require('kavenegar')
var knApi = Kavenegar.KavenegarApi({
  apikey: process.env.KAVENEGAR_APIKEY,
})

export const sendSMSKavenegar = (receptor, token, template, cb) => {
  knApi.VerifyLookup(
    {
      receptor: receptor,
      token: token,
      template: template,
    },
    function (response, status) {
      if (status === 200) {
        cb({ success: true, message: response })
      } else {
        cb({ success: false, message: 'failed' })
      }
    }
  )
}
