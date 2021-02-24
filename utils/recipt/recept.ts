import { ITableInfo } from '../../components/recipt/components/TableRender';
import CardRecipt from '../../components/recipt/CreditCardReceipt';
import { openForPrint } from './openForPrint';

export const printRecipt = (tables: ITableInfo[]) => {
  const markUp = CardRecipt({
    tables,
  });

  openForPrint(markUp);
};
