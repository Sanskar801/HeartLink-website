import React from 'react'
import CtaButton from './CtaButton'

const DialogBox = () => {
    return (
        <dialog>

            <h1>Join WaitList and Receive:</h1>

            <p>🔔 First to know about launch updates.</p>
            <p>💎 Free Premium features for your first month for lucky users.</p>
            <p>🎯 Priority matching with verified profiles.</p>
            <p>💌 Exclusive Valentine's Day matching events.</p>
            <p>🔔 Dating tips and launch updates.</p>

            <CtaButton buttonText={'Join Waitlist'} />

        </dialog>
    );
}

export default DialogBox