import React from "react";
import ReactDOM from "react-dom";
import { Fuser } from "../../types/api";
import { Modal } from "../modal/Modal";
import UserSearcher from "./UserSearcher";

interface IProp {
    id?: string;
    onSelect: (pd: Fuser) => void;
}

export const UserSelectModal: React.FC<IProp> = ({ id, onSelect }) => {
    if (typeof window === "undefined") return null;
    const target = document.getElementById("portal");
    return target
        ? ReactDOM.createPortal(
              <Modal
                  title="상품선택"
                  id={id || "ProductSearchModal"}
                  className="popup_bg"
                  inClassName="productSelectModal master_popup"
              >
                  <UserSearcher
                      onSelectUser={(user) => {
                          onSelect(user);
                      }}
                  />
              </Modal>,
              target
          )
        : null;
};
