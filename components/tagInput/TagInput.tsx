import React, { useRef } from "react";
import { IDiv } from "../../types/interface";
import classnames from 'classnames';

interface IProp extends IDiv {
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TagInput: React.FC<IProp> = ({
    tags,
    setTags,
    className,
    ...props
}) => {
    const classes = classnames("JDtagInput", className, {});
    //  위에서 받을거
    const ref = useRef<HTMLInputElement>(null);

    const handleDelete = (i: number) => {
        const ftags = tags.filter((_, inI) => inI !== i);
        setTags([...ftags]);
    };

    const handleAddition = (tag: string) => {
        setTags([...tags, tag]);
    };

    return (
        <div
            onClick={() => {
                ref.current?.focus();
            }}
            className={classes}
            {...props}
        >
            <div className="JDtagInput__tags">
                {tags.map((name, i) => (
                    <span className="JDtagInput__tag" key={`tag${i}`}>
                        {name}
                        <i
                            className="JDtagInput__close flaticon-multiply"
                            onClick={() => {
                                handleDelete(i);
                            }}></i>
                    </span>
                ))}
            </div>
            <input
                ref={ref}
                className="JDtagInput__input"
                placeholder="추가할 키워드를 입력해주세요."
                onKeyDown={e => {
                    const value = e.currentTarget.value;
                    if (e.key === "Enter") {
                        if (value) {
                            handleAddition(value);
                            if (ref.current) ref.current.value = "";
                        }
                    } else if (e.key == "Backspace") {
                        if (!value) {
                            handleDelete(tags.length - 1);
                        }
                    }
                }}
            />
        </div>
    );
};

export default TagInput;
