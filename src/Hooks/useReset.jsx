import{useAuth} from '../Contexts/AuthContext.jsx';
import { useState } from 'react';
import { message } from 'antd';

const useReset = () =>{
    //const {login} = useAuth();
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);
    
    const resetUser = async (values) =>{
        if(values.password !== values.passwordConfirm){
            return setError("passwords are not the same");
        }
        
        console.log(values)

        const val ={
            email:values.email,
            newPassword: values.password
        }

        console.log(val);

        try{
            setError(null);
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/auth/reset',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(val),
            });
            
            const data = await res.json();

            if(res.status === 200){
                message.success(data.message);
                
               // login(data.token, data.user)
            }else if(res.status === 400){
                setError(data.message)
                message.error(data.message);

            }else{
                message.error('Password reset failed');
            }

        }catch(error){
            setError('Password reset failed')
            message.error('Password reset failed');
        }finally{
            setLoading(false);
        }

    }

    return {loading, error, resetUser};
};

export default useReset;