import { gql } from "@apollo/client";



export const COUNT = gql`
    query count {
        Count {
        ok
        error
        data  {
            buyTotalCount
            salesTotalCount
            settleUnsolvedRequestCount
            productRegistCount
            salesOfThisMonth
            salesofLastMonth
            totalSalesCount
            settleAvaiableAmount
        }
    }
}
`