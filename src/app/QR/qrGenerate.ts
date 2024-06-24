import QRCode from "qrcode";
import { FormDataAsoinco } from "../Interfaces";

export const QrGenerate = async (formData: FormDataAsoinco): Promise<string | null> => {
    const data = JSON.stringify(formData);
    try {
        const responseQR = await QRCode.toDataURL(data);
        return responseQR;
    } catch (err) {
        console.error("Error generating QR code:", err);
        return "";
    }
};
