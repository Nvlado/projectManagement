import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({children}, ref){

const dialog = useRef()

useImperativeHandle(ref, ()=>{
    return {
        open(){
            dialog.current.showModal()
        }
    }
})

    return (
        <dialog className="dialog" ref={dialog}>
            <form method="dialog">
                {children}
                <p className="button"><button>Press</button></p>
            </form>
        </dialog>
    )
})

export default Modal;