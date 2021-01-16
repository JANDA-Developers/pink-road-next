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
            target
            type
            feePercent
            fee
            target
        }
    }
`

export const FEE_POLIY_FIND_ONE = gql`
    query feePolicyFindOne {
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

export const FEE_POLICY_UPDATE = gql`
    mutation feePolicyUpdate($params: FeePolicyUpdateInput!) {
        FeePolicyUpdate(params: $params) {
        ok
        error
        data {
            ...FfeePolicy
        }
    }
}
${F_FEEPOLICY}
`;
