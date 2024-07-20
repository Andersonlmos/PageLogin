import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';        
import { useState } from 'react';
import { useForm } from 'react-hook-form';
                 
const Login = () => {
    
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const { register, handleSubmit } = useForm ();

    function logar(dados){
        console.log(dados);
    }
    
    return ( 
        <>
        <div className ='bg-primary-0 h-screen flex align-items-center justify-content-center px-3' >
            <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 surface-500 p-3 border-round-md'>
            <h3 className='text-center text-4xl text-blue-900'>Seja Bem-vindo</h3>
                <label htmlFor="email" className='block uppercase font-bold text-sm mb-1 text-center'>Email</label>
                <InputText
                    id='email'
                    type='email'
                    placeholder='email@example.com.br'
                    className='mb-4 w-full'
                   {...register('email', {required: true})}
                /> 
                <label htmlFor='password' className='block uppercase font-bold text-sm mb-1 text-center'>Senha</label>
                <div className='mb-4'>
                    <IconField>
                        <InputIcon 
                        className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                        onClick={() => setMostrarSenha(!mostrarSenha)}/>
                        <InputText
                            id='senha'
                            type={ mostrarSenha ? 'text' : 'password'}  placeholder='********' 
                            className='w-full' 
                            {...register('senha', {required: true})}
                            />
                    </IconField>
                </div>
                <Button 
                label="Entrar"
                type='submit' className='w-full bg-surface-600' />
            </form>
        </div>
        </>
     );
}
 
export default Login;