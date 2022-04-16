import React, {useEffect, useState} from 'react';
import AceEditor from 'react-ace';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Result = (props) => {
    const {result} = props;
    const [body, setBody] = useState(result);
    useEffect(() => {
        setBody(result)
    }, [result])
    return (
        <div className='inputRegion'>
            <div className='editorMenu'>
                <div className='editorMenus'>
                    <h2>Redact Text</h2>
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
                style={{ border: "1px solid black", lineHeight: "16px" }}
                wrapEnabled
                value={body}
                onChange={(value) => { setBody(value); }}
                fontSize={14}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: false,
                    tabSize: 2,
                }} />
        </div>
    )
}

export default Result;