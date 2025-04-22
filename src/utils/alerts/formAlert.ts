import Swal from 'sweetalert2';

export const formAlert = ( language: 'es' | 'en') => {
  Swal.fire({
    title: language === 'es' ?"Tu mensaje ha sido enviado con éxito!" :"Your message has been sent successfully!",
    text: language === 'es' ?"Pronto nos pondremos en contacto contigo." :"We will contact you soon.",
    icon: 'success',
    showConfirmButton: false,
    background: '#ffffff',
    color: '#1f2937',
    position: 'center',
    toast: true,
    timer: 4000,
    timerProgressBar: true,
    customClass: {
      popup: 'rounded-lg shadow-md border border-gray-200',
      title: 'text-sm font-medium',
      timerProgressBar: 'bg-blue-500 h-1',
    },
  });
};

export const formAlertError = ( language: 'es' | 'en', error: string = "" ) => {
  Swal.fire({
    title: language === 'es' ?"Error!!!" :"Error!!!",
    text: language === 'es' ?error :error,
    icon: 'success',
    showConfirmButton: false,
    background: '#ffffff',
    color: '#1f2937',
    position: 'center',
    toast: true,
    timer: 4000,
    timerProgressBar: true,
    customClass: {
      popup: 'rounded-lg shadow-md border border-gray-200',
      title: 'text-sm font-medium',
      timerProgressBar: 'bg-blue-500 h-1',
    },
  });
};