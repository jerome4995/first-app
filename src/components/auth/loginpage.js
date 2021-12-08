import React, {useState} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import Swal from 'sweetalert2';



const Loginpage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false); 

    const onSubmit = () => {
        console.log(username, password, 'submit')
        if (username !== '' && password !== '') {
            if (username === 'admin' && password === '123') {
                window.location.replace('/orderlist')
                localStorage.setItem('login', true)
            }
            else {
                Swal.fire({
                    icon: 'warning',
                    text: 'Check Username & Password'
                })
            }

        } else {
            Swal.fire({
                icon: 'warning',
                text: 'Please Fillout All Required Field'
            })
        }

    }

    return (
        <>  
            

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                     Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left'                                   
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button color='teal' fluid size='large' onClick={onSubmit}>
                        Login
                    </Button>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>


            
            {/* <div class="page-login" style={{backgroundColor:"#ECF0F1",marginTop:"25px"}}>
                <div class="ui centered grid container">
                    <div class="nine wide column">
                    <div class="ui icon warning message">
                        <i class="lock icon"></i>
                        <div class="content">
                            <div class="header">
                            Login failed!
                            </div>
                            <p>You might have misspelled your username or password!</p>
                        </div>
                        </div>
                    <div class="ui fluid card">
                        <div class="content">
                       
                        <div class="field">
                            <label>User</label>
                            <input type="text"                                     
                                   placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input type="password"                                     
                                   placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button class="ui primary labeled icon button" type="submit" onClick={onSubmit}>
                            <i class="unlock alternate icon"></i>
                            Login
                        </button>
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div> */}


            {/* <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header style={{ color: '#E70647', textAlign: 'center' }} closeButton>
                    <Modal.Title > Admin Login </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ width: '80%', margin: 'auto' }}>
                        <Row style={{ padding: '15px' }}>
                            <InputGroup>
                                <InputGroup.Prepend >
                                    <InputGroup.Text style={{ backgroundColor: 'white' }}><i class="fa fa-user-o" style={{ color: '#E70647', fontSize: '1.2em', }} ></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </InputGroup>
                        </Row>
                        <Row style={{ padding: '15px' }}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text style={{ backgroundColor: 'white' }}><i class="fa fa-key" style={{ color: '#E70647', fontSize: '1.2em', }}></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </InputGroup>
                        </Row>
                        <Row className='d-flex justify-content-center' style={{ padding: '15px' }}>
                            <Button variant="danger" onClick={onSubmit}> Login </Button>
                        </Row>
                    </div>


                </Modal.Body>
            </Modal> */}
        </>
    )
}

export default Loginpage;
