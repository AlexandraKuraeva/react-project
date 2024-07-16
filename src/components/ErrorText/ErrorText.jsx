import React from 'react'

import styles from './ErrorText.module.css'

function ErrorText({ children }) {
	return <span className={styles.ErrorText}>{children}</span>
}

export default ErrorText
