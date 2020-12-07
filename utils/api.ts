import { DocumentNode } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";


export const getRefetch = (doc: DocumentNode) => getOperationName(doc) || "";