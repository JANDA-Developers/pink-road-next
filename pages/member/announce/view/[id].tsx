import { useRouter } from "next/router";
import React from "react";
import { BoardView } from "components/board/View";
import {
    useAnnounceDelete,
    useAnnounceFindById,
} from "../../../../hook/useAnnounce";
import PageLoading from "../../../Loading";
import Page404 from "../../../404";
import { nameOf } from "../../../../utils/enumToKr";
import { updateURLParameter } from "../../../../utils/getUpdateUrlParam";
import { getFromUrl } from "../../../../utils/url";

interface IProp {}

export const AnnounceDetail: React.FC<IProp> = () => {
    const router = useRouter();
    const announceId = router.query.id as string;

    const toList = () => {
        const page = getFromUrl("page");
        const to = updateURLParameter("/member/announce", "page", page);
        router.push(to);
    };

    const [announceDeleteMu] = useAnnounceDelete({
        onCompleted: ({ AnnounceDelete }) => {
            if (AnnounceDelete.ok) toList();
        },
    });
    const { prev, next, item: announce, error } = useAnnounceFindById(
        announceId
    );

    if (error) return <Page404 />;
    if (!announce) return <PageLoading />;

    const {
        title,
        thumb,
        createdAt,
        contents,
        subTitle,
        _id,
        author,
        isOpen,
    } = announce;

    const toDetail = () => {
        router.push(`/member/announce/write/${_id}`);
    };

    const handleDelete = () => {
        if (confirm("정말로 게시글을 삭제 하시겠습니까?"))
            announceDeleteMu({
                variables: {
                    id: _id,
                },
            });
    };

    return (
        <div>
            <BoardView
                isOpen={!!isOpen}
                authorId={author?._id || ""}
                onList={toList}
                thumb={thumb}
                content={contents}
                writer={nameOf(author)}
                title={title}
                subTitle={subTitle || ""}
                onDelete={handleDelete}
                onEdit={toDetail}
                createAt={createdAt}
                next={next}
                prev={prev}
            />
        </div>
    );
};

export default AnnounceDetail;
