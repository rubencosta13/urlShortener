import buildClient from "../api/build-client";
import { Form, Button } from 'react-bootstrap';
import Router from 'next/router';
import { useState } from 'react';
import useRequest from '../hooks/use-request';

const HomeScreen = (props) => {
    if (props.currentUser) {
        const [queryUrl, setQueryUrl] = useState('')
        const [endUrl, setEndUrl] = useState('')
        const [success, setSuccess] = useState("")
        const { doRequest, errors } = useRequest({
            url: "/shrt/",
            method: 'post',
            body: {
                email: props.currentUser.email,
                urlId: queryUrl,
                endUrl: endUrl
            },
            onSuccess: () => setSuccess("Link registered")
        });

        const onSubmit = async (event) => {
            event.preventDefault();
            await doRequest()
        }
        return (
            <div className="container">
                <h1>Register new link</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Link query</Form.Label>
                        <Form.Control type="text" placeholder="Ex: https://shortner.dev/shrt/something" onChange={e => setQueryUrl(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Destination Url</Form.Label>
                        <Form.Control type="text" placeholder="Ex: https://shortner.dev/" onChange={e => setEndUrl(e.target.value)}/>
                    </Form.Group>
                    <div>{success}</div>
                    {errors}
                    <Button variant="primary" onClick={onSubmit}>
                        Sign In
                    </Button>
                </Form>
            </div>
        )
    }
    return <h1>Login to register a new URL</h1>
}

HomeScreen.getInitialProps = async (context) => {
    const client = buildClient(context);
    const { data } = await client.get('/auth/currentuser');
    return data;
}


export default HomeScreen