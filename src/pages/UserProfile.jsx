
import React from 'react';
import { useForm } from 'react-hook-form';
import { Accordion, Button, TextInput } from 'flowbite-react';


const Profile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const registerUser = (data) => {
        console.log(data);
    }
    return (

        <div className='' id='registration'>
            <form onSubmit={handleSubmit(registerUser)}>
                <Accordion>
                    <Accordion.Panel setOpen={true}>
                        <Accordion.Title>
                            Personal Details
                        </Accordion.Title>
                        <Accordion.Content>
                            <div className="grid grid-cols-2 gap-4">
                                <TextInput type="text" placeholder="First Name" name="first_name" {...register("first_name")} />
                                <TextInput type="text" placeholder="Last Name" name="last_name" {...register("last_name")}/>
                                <TextInput type="email" placeholder="Email" name='email' />
                                {/* <TextInput placeholder="Phone" value="" /> */}
                                {/* <TextInput placeholder='DOB' value="" /> */}
                                <Button type="submit">Register</Button>
                            </div>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Job details
                        </Accordion.Title>
                        <Accordion.Content>
                            <p>Panel 2</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Other Details
                        </Accordion.Title>
                        <Accordion.Content>
                            Panle 3
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </form>
        </div>
    )
}

export default Profile