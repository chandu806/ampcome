import { Input, Stack } from "@chakra-ui/react";
import styles from "./user.module.css";


export const User = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
            </div>
            <p className={styles.welcomeToApp}>Welcome to App Name</p>
            <div className={styles.getAheadOf}>
                Get ahead of the curve. Join the next generation of health heroes.
            </div>
            <div className={styles.signinDiv}>
                <div className={styles.signInToYour}>Sign-in to your account</div>
                <div className={styles.userInput}>
                    <Input
                        className={styles.inputField}
                        placeholder="Username"
                        focusBorderColor="#1064d1"
                    />
                </div>
                <div className={styles.passwordInput}>
                    <Input
                        className={styles.inputField}
                        placeholder="Password"
                        focusBorderColor="#1064d1"
                    />
                </div>
                <Stack className={styles.wrapper}>
                    <select className={styles.selectUnit}>
                        <option value=""></option>
                    </select>
                </Stack>
                <div className={styles.emailId}>Select Unit Name</div>

                <div className={styles.cta}>
                    <div className={styles.ctaChild} />
                    <b className={styles.signIn}>Sign In</b>
                </div>
            </div>
            <div className={styles.frame}>
                <img className="coverImage" src="./Frame.png" alt="coverImage" />
            </div>
        </div>
    );
};


