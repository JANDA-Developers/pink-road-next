import { gql } from "@apollo/client"

export const F_FEEPOLICY = gql`
    fragment FfeePolicy on FeePolicy  {
        _id
        createdAt
        updatedAt
        isDelete
        status
        niceCardPercent
        jandaCardPercent
        cardPercent
        bankPercent
        storePercent
        addtionalFees {
            feeName
            type
            feePercent
            fee
        }
    }
`

export const FEE_POLIY_FIND_ONE = gql`
    query feePilicyFindOne {
        FeePolicyFindOne {
        ok
        error
        data {
            ...FfeePolicy
        }
    }
}
${F_FEEPOLICY}
`;
