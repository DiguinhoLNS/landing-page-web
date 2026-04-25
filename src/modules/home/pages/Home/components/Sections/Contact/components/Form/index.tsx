'use client'

import clsx from 'clsx'
import { Formik } from 'formik'
import Button from '@/components/common/Button'
import TextArea from '@/components/common/TextArea'
import TextInput from '@/components/common/TextInput'
import HomeController from '@/modules/home/controllers/homeController'
import { contactFormSchema } from './schema'

export default function ContantForm() {

    return(

        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: ''
                }}
                validationSchema={contactFormSchema}
                validateOnChange
                onSubmit={v => {
                    HomeController.sendContact(v)
                }}
            >
                {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
                    <>
                        <div className={clsx('flex flex-col gap-6 w-full')}>
                            <div className={clsx('flex flex-col gap-4 w-full')}>
                                <div className={clsx('flex flex-col gap-4 w-full', 'md:flex-row')}>
                                    <TextInput
                                        name='name'
                                        label='Nome'
                                        value={values.name}
                                        errorText={errors.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                    <TextInput
                                        name='email'
                                        label='Email'
                                        type='email'
                                        value={values.email}
                                        errorText={errors.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <TextArea
                                    name='message'
                                    label='Mensagem'
                                    rows={6}
                                    value={values.message}
                                    errorText={errors.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    containerClassName={clsx('flex-1')}
                                />
                            </div>

                            <div className={clsx('')}>
                                <Button
                                    buttonMode='contained'
                                    iconName='send'
                                    label='Enviar mensagem'
                                    onClick={() => handleSubmit()}
                                />
                            </div>
                        </div>
                    </>
                )}
            </Formik>
        </>

    )

}
