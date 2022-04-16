import React, { useState } from 'react';
import './InputStyles.css';
import AceEditor from 'react-ace';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Input = (props) => {
    const [body, setBody] = useState('');
    const { handleSetOptions, options } = props;
    return (
        <div className='inputRegion'>
            <div className='editorMenu'>
                <div className='editorMenus'>
                    <h2>Input</h2>
                    <div className='menuActions'>
                        <div className='menuAction'>
                            <FileDownloadOutlinedIcon />
                        </div>
                        <div onClick={() => {
                            navigator.clipboard.writeText(body);
                            toast.success("Copied to clipboard");
                        }} className='menuAction'>
                            <ContentCopyOutlinedIcon />
                        </div>
                        <div onClick={() => {
                            setBody('');
                            toast.success("Cleared");
                        }} className='menuAction'>
                            <DeleteOutlineOutlinedIcon />
                        </div>
                    </div>
                </div>
            </div>
            <AceEditor
                wrapEnabled
                value={body}
                onChange={(value) => { setBody(value); handleSetOptions({ ...options, body: value }) }}
                fontSize={14}
                style={{ border: "1px solid black", lineHeight: "16px" }}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: false,
                    tabSize: 2,
                }} />
            <ToastContainer />
        </div >
    )
}

export default Input;