import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosSend } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

export const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Preencha todos os campos.');
      return;
    }

    emailjs
      .send(
        'service_m98dcku', // Substitua pelo Service ID do EmailJS
        'template_pwv9y9d', // Substitua pelo Template ID
        formData,
        'luhnT1f0mt82DUN66' // Substitua pelo User ID (chave pública)
      )
      .then(
        () => {
          setStatus('E-mail enviado com sucesso!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Erro ao enviar:', error);
          setStatus('Erro ao enviar o e-mail.');
        }
      );
  };

  return (
    <div className='flex relative justify-center h-full'>
      <div className='p-8 h-full md:flex gap-20 space-y-20 items-center mt-20'>
        <div className='md:w-40'></div>
        <div>
          <div className='mb-6 flex flex-col items-center mt-20 gap-5'>
            <p className='text-xs font-medium text-gray-600 text-center'>
              Entre em contato conosco para dúvidas ou sugestões. Responderemos o mais rápido
              possível.
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-4'>Entre em Contato</h2>
            {status && <p className='mb-4 text-green-600'>{status}</p>}
            <form onSubmit={handleSubmit} className='space-y-4 flex flex-col items-center w-full'>
              <input
                type='text'
                name='name'
                placeholder='Nome'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='E-mail'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
                required
              />
              <textarea
                name='message'
                placeholder='Mensagem'
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
                rows={4}
                required
              />
              <button
                type='submit'
                className='bg-black rounded-md text-white px-4 py-2 shadow text-xs flex items-center gap-2'
              >
                <IoIosSend />
                <p>Enviar</p>
              </button>
            </form>
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <p className='text-white bg-black w-fit text-2xl'>Vamos conversar?</p>
          <a
            href='mailto:email@exemplo.com?subject=Desenvolver%20pagina%20web&body=Gostaria%20de%20conversar%20sobre%20a%20criação%20de%20uma%20pagina%20web.'
            className='text-black hover:underline flex gap-2 items-center md:text-xl'
          >
            <p>drckbr@gmail.com</p>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};
