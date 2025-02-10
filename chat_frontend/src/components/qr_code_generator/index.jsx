import { useState } from "react";
import { QRCode } from "react-qr-code";

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState(null);
    const [text, setText] = useState("Type your text here: ");


    return (
        <div>
            <h1>QR Code Generator</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your text here: " />
            <button onClick={() => setQrCode(text)}>Generate QR Code</button>
            <QRCode id='qr_code_value' value={qrCode} />
        </div>
    );
}
