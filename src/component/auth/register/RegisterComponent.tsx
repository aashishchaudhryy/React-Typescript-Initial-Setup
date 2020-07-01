import React from "react";
import { Formik } from 'formik';
import classes from '../register/Register.module.css';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';


const RegisterComponent = (props: any) => {

    const history = useHistory()
    return (
        <React.Fragment>
            <div className={classes.limiter}>
                <div className={classes.container}>
                    <div className={classes.wraplogin}>
                        <div className={classes.loginform}>
                            <span className={classes.loginformtitle}>Create New Account</span>
                            <Formik
                                initialValues={{ userName: "", password: "", confirmPassword: "", email: "", isProduction:true }}
                                onSubmit={(values) => {
                                    props.register(values);
                                }}
                                validationSchema={Yup.object().shape({
                                    userName: Yup.string()
                                        .required("required"),
                                    password: Yup.string()
                                        .required("please enter your password")
                                        .min(4, "Password is too short - should be 4 chars minimum.")
                                        .matches(/(?=.*[0-9])/, "Password must contain a number."),
                                    confirmPassword: Yup.string()
                                        .required()
                                        .label('Confirm password')
                                        .test('passwords-match', 'Passwords should be same', function (value) {
                                            return this.parent.password === value;
                                        }),
                                    email: Yup.string()
                                        .email()
                                        .required("please enter your email")
                                })}
                            >
                                {formikProps => {
                                    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = formikProps;
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <div className={classes.displayTable}>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>UserName</label>
                                                    <input
                                                        name="userName"
                                                        type="text"
                                                        placeholder="Enter your username"
                                                        value={values.userName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.userName && touched.userName) ? classes.error : ''].join(' ')} />

                                                    {errors.userName && touched.userName && (
                                                        <div className={classes.inputFeedback}>{errors.userName}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className={classes.displayTable}>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Email</label>
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.email && touched.email) ? classes.error : ''].join(' ')} />

                                                    {errors.email && touched.email && (
                                                        <div className={classes.inputFeedback}>{errors.email}</div>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className={classes.displayTable}>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Password</label>
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        placeholder="Enter your password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.password && touched.password) ? classes.error : ''].join(' ')}
                                                    />
                                                    {errors.password && touched.password && (
                                                        <div className={classes.inputFeedback}>{errors.password}</div>
                                                    )}
                                                </div>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Confirm Password</label>
                                                    <input
                                                        name="confirmPassword"
                                                        type="password"
                                                        placeholder="Confirm password"
                                                        value={values.confirmPassword}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.confirmPassword && touched.confirmPassword) ? classes.error : ''].join(' ')}
                                                    />
                                                    {errors.confirmPassword && touched.confirmPassword && (
                                                        <div className={classes.inputFeedback}>{errors.confirmPassword}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={classes.displayTable} style={{marginTop:"3%"}}>
                                                <button className={classes.buttonSave} type="submit">
                                                    Sign up </button>
                                                    <button className={classes.buttonCancel} onClick={() => {history.push("/")}} type="reset">
                                                    Cancel </button>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisterComponent;