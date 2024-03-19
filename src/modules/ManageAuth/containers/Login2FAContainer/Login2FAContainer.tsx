import { useSteps } from '@vgl/hooks'
import { PhoneVerification, Setup2FA, useLogin } from '@vgl/modules'

const Login2FAContainer = () => {
  const { activeStep, onNext } = useSteps()
  const {
    methods,
    onSubmit,
    handlePhoneChange,
    onSendOtp,
    onOTPChange,
    onOTPVerify,
    onResendOtp,
    loginValues,
  } = useLogin({
    onNext,
  })

  switch (activeStep) {
    case 0:
      return (
        <Setup2FA
          methods={methods}
          onSubmit={onSubmit}
          onSendOtp={onSendOtp}
          handlePhoneChange={handlePhoneChange}
        />
      )

    case 1:
      return (
        <PhoneVerification
          phoneNumber="1234"
          methods={methods}
          onSubmit={onSubmit}
          onVerify={onOTPVerify}
          loginValues={loginValues}
          onResendOtp={onResendOtp}
          onOTPChange={onOTPChange}
        />
      )
  }
}

export default Login2FAContainer
