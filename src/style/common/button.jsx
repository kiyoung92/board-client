import { css } from "@emotion/react";

export const buttonStyle = {
    wrap: css({ 
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        bottom: '0px',
    }),
    contents: css({
        background: 'var(--button-background-color)',
        border: 'none',
        width: '100%',
        height: '50px',
        borderRadius: '10px',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bold'
    })
}