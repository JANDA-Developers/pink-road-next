import React, { useEffect, useState } from 'react';
import { useProductList } from '../../hook/useProduct';
import { Fgroup, Fproduct, productList_ProductList_data } from '../../types/api';
import { BG } from '../../types/const';
import { yyyymmdd } from '../../utils/yyyymmdd';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { reorder } from '../../utils/reorder';
import { useMutable } from '../../hook/useUpdate';
import { ProductSelectModal } from '../ProductSelectModal';
import { openModal } from '../../utils/popUp';
import { cloneObject } from '../../utils/clone';
import { Change } from '../loadingList/LoadingList';

interface IProp {
    group: Fgroup
    onChangeTitle: (title: string) => void;
    onDelete: () => void;
    onSave: () => void;
}



// 카테고리 만큼 그룹이 추가되어야함
// 카테고리를 생성할떄 그룹이 생성되게 해야함?
// 카테고리 지워질떄 그룹도 지워지게 해야함 ?
//  그냥 카테고리 순으로 출력하지말고 정렬을 다르게 할 수 있음 좋겠음.

export const ProductGroup: React.FC<IProp> = ({ group: defaultGroup, onChangeTitle, onDelete: handleDelete, onSave: handleSave }) => {
    const [group, setGroup] = useMutable(defaultGroup);
    const { items: products, filter, setFilter, getLoading } = useProductList({
        initialFilter: {
            _id_in: defaultGroup.members
        }
    })

    const handleDrop = (result: DropResult) => {
        const ordered = reorder(group.members, result.source.index, result.destination?.index!);
        group.members = ordered;
        console.log("ordered");
        console.log(ordered);
        setGroup({ ...group })
    }

    const handleExtract = (index: number) => () => {
        group.members.splice(index, 1);
        setGroup({ ...group });
    }

    const handleAdd = () => {
        openModal("#ProductModal" + group._id)();
    }


    const handleProductSelect = (pd: Fproduct) => {
        group.members.push(pd._id);
        setGroup({ ...group });
    }


    //그룹 업데이트후 다시 프로덕트 목록 가져옴
    useEffect(() => {
        filter._id_in = group.members
        setFilter({
            ...filter
        })
    }, [
        group
    ])



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
                <Change change={!getLoading}>
                    <DragDropContext onDragEnd={handleDrop}>
                        <Droppable direction="horizontal" droppableId="droppable">
                            {(provided, snapshot) => (
                                <ul className="droppable" ref={provided.innerRef}  {...provided.droppableProps}>
                                    {cloneObject(products).sort((a, b) => group.members.indexOf(a._id) - group.members.indexOf(b._id)).map((pd, index) =>
                                        <Draggable draggableId={pd._id} index={index} key={pd._id}>
                                            {(provided: any) => (
                                                <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <div className="img" style={BG(pd.images?.[0]?.uri || "")}></div>
                                                    <div className="title">{pd.title}</div>
                                                    <div className="date">{yyyymmdd(pd.startDate)} ~ {yyyymmdd(pd.endDate)}</div>
                                                </li>
                                            )}
                                        </Draggable>
                                    )}
                                    {provided.placeholder}
                                    <li>
                                        <div onClick={handleAdd} className="add"><button><i className="flaticon-add"></i>추가</button></div>
                                    </li>
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Change>
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
        <ProductSelectModal id={"ProductModal" + group._id} onSelect={handleProductSelect} />
    </div>;
};
