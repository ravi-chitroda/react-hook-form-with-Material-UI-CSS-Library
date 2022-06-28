import JoditEditor from 'jodit-react'
import React, { useRef } from 'react'

const RichTextEditor = (setValue) => {
    const editor = useRef(null)

    const handleReset = () =>{
        setValue("")
    }
  return (
    <div>
   <JoditEditor ref={editor} onChange={content => setValue(content)} />
   <button type='submit'>Submit</button>
   <button type='Reset' onClick={handleReset}>Reset</button>
   </div>
  )
}

export default RichTextEditor
