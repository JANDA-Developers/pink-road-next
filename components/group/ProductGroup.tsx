import React from 'react';
import { useProductList } from '../../hook/useProduct';
import { Fgroup } from '../../types/api';
import { BG } from '../../types/const';
import { yyyymmdd } from '../../utils/yyyymmdd';

interface IProp {
    group: Fgroup
    onExtract: (index: number) => void;
    onAdd: (group: Fgroup) => void;
    onChangeTitle: (title: string) => void;
    onDelete: () => void;
    onSave: () => void;
}

export const ProductGroup: React.FC<IProp> = ({ onExtract, group, onAdd, onChangeTitle, onDelete: handleDelete, onSave: handleSave }) => {
    const { items: products } = useProductList({
        initialFilter: {
            _id_in: group.members
        }
    })

    const handleAdd = () => {
        onAdd(group);
    }

    const handleExtract = (index: number) => {
        onExtract(index);
    }

    return <div className="block_box">
        <div className="head">
            <h5>{group.label}</h5>
        </div>
        <div className="body">
            <div className="body-title">
                <div className="th">타이틀</div>
                <div className="td"><input onChange={(e) => {
                    const val = e.currentTarget.value;
                    onChangeTitle(val);
                }} value={group.label} type="text" className="w50" placeholder="문화·예술여행" /></div>
            </div>
            <div className="body-list">
                <ul>
                    {products.map(pd =>
                        <li key={pd._id}>
                            <div className="img" style={BG(pd.images?.[0]?.uri || "")}></div>
                            <div className="title">{pd.title}</div>
                            <div className="date">{yyyymmdd(pd.startDate)} ~ {yyyymmdd(pd.endDate)}</div>
                        </li>
                    )}
                    <li>
                        <div onClick={handleAdd} className="add"><button><i className="flaticon-add"></i>추가</button></div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="fin">
            <div className="float_left">
            </div>
            <div className="float_right">
                <button onClick={handleDelete} type="submit" className="btn medium">삭제하기</button>
                <button onClick={handleSave} type="submit" className="btn medium">저장하기</button>
            </div>
        </div>
    </div>;
};
