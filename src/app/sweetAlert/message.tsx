import Swal from 'sweetalert2';
import { FormDataAsoinco } from '../Interfaces';
import { sendData } from '../fetch/sendData';
import { QrGenerate } from '../QR/qrGenerate';
import swal from 'sweetalert';
export const fireAlert = (data: FormDataAsoinco) => {
    Swal.fire({
        title: '¿Los Datos estan correctos?',
        html: `Nombre: ${data.nombre}<br>Apellido: ${data.apellido}<br>Rut: ${data.rut}
        <br>Genero: ${data.genero}<br>Fecha de nacimiento: ${data.fecha_nac}<br>Region: ${data.region}
        <br>Comuna: ${data.comuna}<br>Correo: ${data.correo}<br>Celular: ${data.celular}
        <br>Compañia: ${data.compania}<br>Intereses: ${data.intereses.map((inter) => (`${inter}`))}
        `,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si, enviar y generar QR',
        cancelButtonText: 'No',
        icon: 'question',
        scrollbarPadding: false
    }
    ).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const qrCodeDataUrl = await QrGenerate(data);
            console.log(qrCodeDataUrl)
            if (qrCodeDataUrl != null) {
                downloadQR(qrCodeDataUrl, 'Qr_asoinco')
                Swal.fire
                    (
                        {
                            title: "!Estas preinscrito!",

                            imageUrl: qrCodeDataUrl,
                            html: `
                            <a href="#" autofocus>Toma una captura o haz click, aqui en caso de que no hayas decargado tu QR. Recuerda lo necesitas para ingresar</a>,
                           
                        `,
                            imageAlt: "QRCode"
                        }
                    )
                // sendData(data)
                //     .then((q) => {
                //         console.log(res)
                //         Swal.fire('Datos enviados', '', 'success');
                //     })
            }
        }
    }).then(() => {

    })
}
function downloadQR(uri: string, name: string) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
export const fireAlertWrong = (data: FormData) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 8000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'error',
        html: "error"
        // html: ` ${data.nombre == "" ? "" : "<br>" + data.name} ${data.surname == "" ? "" : data.surname} ${data.phone == "" ? "" : data.phone} ${data.mail == "" ? "" : data.mail} ${data.message == "" ? "" : "<br>" + data.message} `,
    })
}