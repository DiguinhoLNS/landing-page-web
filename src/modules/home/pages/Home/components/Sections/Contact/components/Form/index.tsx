'use client'

import clsx from 'clsx'
import { Formik } from 'formik'
import Button from '@/components/common/Button'
import TextArea from '@/components/common/TextArea'
import TextInput from '@/components/common/TextInput'
import HomeController from '@/modules/home/controllers/homeController'
import { contactFormSchema } from './schema'

interface IContactFormStatus {
    type: 'success' | 'error'
    message: string
}

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
                onSubmit={async (v, { resetForm, setStatus }) => {
                    setStatus(undefined)

                    try {
                        await HomeController.sendContact(v)
                        resetForm()
                        setStatus({ type: 'success', message: 'Mensagem enviada com sucesso.' })
                    }
                    catch(error) {
                        setStatus({
                            type: 'error',
                            message: error instanceof Error
                                ? error.message
                                : 'Nao foi possivel enviar a mensagem agora.'
                        })
                    }
                }}
            >
                {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => {
                    const formStatus = status as IContactFormStatus | undefined

                    return(
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

                                <div className={clsx('flex flex-col gap-2')}>
                                    {formStatus && (
                                        <p
                                            className={clsx(
                                                'text-sm text-center',
                                                formStatus.type === 'success' ? 'text-primary' : 'text-error'
                                            )}
                                        >
                                            {formStatus.message}
                                        </p>
                                    )}

                                    <Button
                                        buttonMode='contained'
                                        iconName='send'
                                        label={isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                                        disabled={isSubmitting}
                                        onClick={() => handleSubmit()}
                                    />

                                </div>
                            </div>
                        </>
                    )
                }}
            </Formik>
        </>

    )

}
