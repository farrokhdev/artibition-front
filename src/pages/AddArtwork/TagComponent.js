

import React, { useState, useRef } from 'react';
import 'antd/dist/antd.css';
import { Tag, Input, Tooltip } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import { t } from 'i18next';

const TagComponent = () => {

    const [state, setState] = useState({
        tags: [],
        inputVisible: false,
        inputValue: "",
        editInputIndex: -1,
        editInputValue: ""
    });
    const handleClose = (removedTag) => {
        const tags = state.tags.filter((tag) => tag !== removedTag);
        setState((state) => ({ ...state, tags })); // <-- shallow copy previous state

    };

    const showInput = () => {
        setState((state) => ({ ...state, inputVisible: true })); // <-- shallow copy previous state
    };

    const handleInputChange = (e) => {
        setState((state) => ({ ...state, inputValue: e.target.value })); // <-- shallow copy previous state
    };

    const handleInputConfirm = () => {
        const { inputValue } = state;
        let { tags } = state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        setState((state) => ({
            ...state, // <-- shallow copy previous state
            tags,
            inputVisible: false,
            inputValue: ""
        }));
    };

    const handleEditInputChange = (e) => {
        setState((state) => ({ ...state, editInputValue: e.target.value })); // <-- shallow copy previous state
    };

    const handleEditInputConfirm = () => {
        setState(({ tags, editInputIndex, editInputValue, ...state }) => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;

            return {
                ...state, // <-- shallow copy previous state
                tags: newTags,
                editInputIndex: -1,
                editInputValue: ""
            };
        });
    };


    const inputRef = useRef('')
    const saveInputRef = input => {
        inputRef.current = input;
    };
    const editInput = useRef('')
    const saveEditInputRef = input => {
        editInput.current = input;
    };
    const { tags, inputVisible, inputValue, editInputIndex, editInputValue } =
        state;

    return (
        <>

            {inputVisible && (
                <Input
                    ref={saveInputRef}
                    type="text"
                    size="small"
                    className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                    // className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}

            
            {!inputVisible && (
                <Tag className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2" onClick={showInput}>
                    <PlusOutlined />{t("content-panel-add-artwork.art_info.tag_en")}
                </Tag>
            )}


            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={saveEditInputRef}
                            key={tag}
                            size="small"
                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                            // className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 20;

                const tagElem = (
                    <Tag
                        className="edit-tag px-3 font-weight-bold  en-lang"
                        key={tag}
                        closable={index !== 0}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            onDoubleClick={e => {
                                if (index !== 0) {
                                    setState(
                                        { editInputIndex: index, editInputValue: tag },
                                        () => {
                                            editInput.focus();
                                        });
                                    e.preventDefault();
                                }
                            }}
                        >
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
        </>
    )
};


export default TagComponent