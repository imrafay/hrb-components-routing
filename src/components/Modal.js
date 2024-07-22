import ReactDOM from 'react-dom';
function Modal({onClose,children,actionBar}){
    return (
        ReactDOM.createPortal(
            <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-400 opacity-70"></div>
            <div className="fixed inset-40 bg-white p-10">
               <div className="flex justify-between">
                    {children}
               </div>
               <div className="flex justify-end">
                    {actionBar}
               </div>
            </div>
        </div>,
            document.querySelector('.main-modal')
        )
    );
}

export default Modal;