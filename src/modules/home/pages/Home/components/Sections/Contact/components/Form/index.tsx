'use client'

import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Formik } from 'formik'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import TextArea from '@/components/common/TextArea'
import TextInput from '@/components/common/TextInput'
import HomeController from '@/modules/home/controllers/homeController'
import springs, { crossFade } from '@/utils/motion/springs'
import { contactFormSchema } from './schema'

interface IContactFormStatus {
    type: 'success' | 'error'
    message: string
}

const LABEL_BACKGROUND = 'bg-elevation-1'

export default function ContantForm() {

    const reducedMotion = useReducedMotion()

    return(

        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: ''
                }}
                validationSchema={contactFormSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={async (v, { resetForm, setStatus }) => {
                    await HomeController.sendContact(v, resetForm, setStatus)
                }}
            >
                {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => {
                    const formStatus = status as IContactFormStatus | undefined

                    return(
                        <>
                            <form
                                noValidate
                                className={clsx('flex flex-col gap-6 w-full')}
                                onSubmit={event => {
                                    event.preventDefault()
                                    handleSubmit()
                                }}
                            >
                                <div className={clsx('flex flex-col gap-4 w-full')}>
                                    <div className={clsx('flex flex-col gap-4 w-full', 'md:flex-row')}>
                                        <TextInput
                                            name='name'
                                            label='Nome'
                                            autoComplete='name'
                                            value={values.name}
                                            errorText={errors.name}
                                            labelBackground={LABEL_BACKGROUND}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <TextInput
                                            name='email'
                                            label='Email'
                                            type='email'
                                            autoComplete='email'
                                            value={values.email}
                                            errorText={errors.email}
                                            labelBackground={LABEL_BACKGROUND}
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
                                        labelBackground={LABEL_BACKGROUND}
                                        containerClassName={clsx('flex-1')}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className={clsx('flex flex-col gap-3')}>
                                    {/* O resultado é confirmado de forma explícita, não
                                        deduzido do formulário ter esvaziado. */}
                                    <AnimatePresence initial={false}>
                                        {!!formStatus && (
                                            <motion.div
                                                role='status'
                                                aria-live='polite'
                                                className={clsx(
                                                    'flex items-center gap-2.5 px-4 py-3 rounded-2xl',
                                                    formStatus.type === 'success'
                                                        ? 'bg-successContainer text-onSuccessContainer'
                                                        : 'bg-errorContainer text-onErrorContainer'
                                                )}
                                                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                                                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                                                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                                                transition={reducedMotion ? crossFade : springs.ui}
                                            >
                                                <Icon
                                                    iconName={formStatus.type === 'success' ? 'check_circle' : 'error'}
                                                    iconSize={20}
                                                />

                                                <p className={clsx('text-footnote')}>
                                                    {formStatus.message}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <Button
                                        type='submit'
                                        buttonMode='contained'
                                        buttonSize='lg'
                                        iconName='send'
                                        label={isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </form>
                        </>
                    )
                }}
            </Formik>
        </>

    )

}
