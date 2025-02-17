import { DerivApiProps, useDerivApi } from './use-deriv-api'

const useDerivWS = () => {
    const deriv_api = useDerivApi()
    const { send }: DerivApiProps = deriv_api

    return { send }
}

export default useDerivWS
