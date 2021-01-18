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
export const COUNT_MANAGER = gql`
    query countManager {
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
                totalTourCount
                totalExpCount
                totalProdCount
                buyerCount
                todayBookingCount
                busiPartnerBCountMaster
                busiPartnerCountMaster
                totalBookingCountMaster
                readyBookingCountMaster
                determiendProductCountMaster
                totalProductCountMaster
                totalCancelCompleteCount
                cancelBookingCountMaster
                compeltedBookingCountMaster
                cancelProductCountMaster
                undeterMinedProductCountMaster
                cancelRequestCountMaster
                createRequestCountMaster
                cancelReturnPrice
                settlementRequestCountMaster
                compeltedProductCountMaster
                tourBookingCountMaster
                expBookingCountMaster
                foreginMemeberCount
                koreanMemberCount
                totalIndiMemeberCount
                busiPartnerCountMaster
                confimedBusiPartnerCount
                unConfimedBusiPartnerCount
                unConfimedPartnerCount
                confimedPartnerCount
                totalSettlementCount
                settlementReadyCountMater
                settlementCompleteCountMaster
                totalPartnerMemberCount
                answeredQuestionCount
                openProductCountMaster
                unAnsweredQuestionCount   
                countOfTourBooking
                countOfExpBooking
            }
        }
    }
`
