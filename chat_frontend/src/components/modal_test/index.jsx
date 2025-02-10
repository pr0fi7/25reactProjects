

export default function Modal({show, onClose, body, header, footer}) {
    return (
        <div className="modal" style={{display: show ? 'block': 'none'}}>
            <div className="header">
                {header ? header : <p>This is the header of the modal</p>}
            </div>

            <div className="body">
                {body ? body : <p>This is the body of the modal</p>}
            </div>
            <div className="footer">
                {footer ? footer : <p>This is the footer of the modal</p>}
            </div>
        </div>
    )
}