import React, { FC } from 'react';
import styles from './register.module.scss';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => (
  <div className={styles.Register} data-testid="Register">
    Register Component
  </div>
);

export default Register;
