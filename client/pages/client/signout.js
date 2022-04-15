import Router from 'next/router';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import useRequest from '../../hooks/use-request';

export default () => {
    const { doRequest, errors } = useRequest({
        url: "/auth/signout",
        method: 'post',
        onSuccess: () => setTimeout(() => Router.push('/'), 1000)
    });

    const logOut = async (event) => {
        await doRequest()
    }
    useEffect(() => {
        setTimeout(() => {
            logOut()
        }, 1500)
    }, [])

    return (
        
        <div>
            Signing you out ... <br />
            You will be redirected to the main page 
            {errors}
        </div>
    )
}