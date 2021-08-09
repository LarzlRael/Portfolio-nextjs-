import React from 'react'
import { useIntl, FormattedMessage } from 'react-intl';

export const FormContact = () => {

    const intl = useIntl();

    return (
        <div className="contact" id="contact">
            <h2>
                <FormattedMessage
                    id="app.contact"
                />
            </h2>
            <form action="">
                <div className="flex">
                    <input type="text" placeholder={intl.formatMessage({ id: 'app.name' })} />
                    <input type="email" placeholder={intl.formatMessage({ id: 'app.email' })} />
                </div>
                <textarea
                    className="area"
                    placeholder={intl.formatMessage({ id: 'app.message' })}>
                </textarea>
                <div className="button-container">
                    <button><FormattedMessage
                        id="app.send"
                    /></button>
                </div>
            </form>
        </div>
    )
}
