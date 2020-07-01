import React from "react";
import { Formik } from 'formik';
import classes from '../userInfo/UserInfo.module.css';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import withLoading from "../../hoc/loading/withLoading";

const UserInfoComponent = (props: any) => {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className={classes.limiter}>
                <div className={classes.container}>
                    <div className={classes.wraplogin}>
                        <div className={classes.loginform}>
                            <span className={classes.loginformtitle}>Personal Information</span>
                            <Formik
                                enableReinitialize={true}
                                initialValues={props}
                                onSubmit={(values) => {
                                    console.log(values);
                                }}
                                validationSchema={Yup.object().shape({
                                    firstname: Yup.string()
                                        .required("required"),
                                    lastname: Yup.string()
                                        .required("required"),
                                    colony: Yup.string()
                                        .required("required"),
                                    town: Yup.string()
                                        .required("required"),
                                    password: Yup.string()
                                        .min(4, "Password is too short - should be 4 chars minimum.")
                                        .matches(/(?=.*[0-9])/, "Password must contain a number."),
                                    confirmPassword: Yup.string()
                                        .label('Confirm password')
                                        .test('passwords-match', 'Passwords should be same', function (value) {
                                            return this.parent.password === value;
                                        }),
                                    federal_entity: Yup.string()
                                        .required("required"),
                                    postal_code: Yup.string()
                                        .required("required"),
                                    country: Yup.string()
                                        .required("required"),
                                    address: Yup.string()
                                        .required("required"),
                                })}
                            >
                                {formikProps => {
                                    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = formikProps;
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <div className={classes.displayTable}>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>First Name</label>
                                                    <input
                                                        name="firstname"
                                                        type="text"
                                                        placeholder="Enter your firstname"
                                                        value={values.firstname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.firstName && touched.firstName) ? classes.error : ''].join(' ')} />

                                                    {errors.firstName && touched.firstName && (
                                                        <div className={classes.inputFeedback}>{errors.firstName}</div>
                                                    )}
                                                </div>

                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Last Name</label>
                                                    <input
                                                        name="lastname"
                                                        type="text"
                                                        placeholder="Enter your lastname"
                                                        value={values.lastname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.lastName && touched.lastName) ? classes.error : ''].join(' ')} />

                                                    {errors.lastName && touched.lastName && (
                                                        <div className={classes.inputFeedback}>{errors.lastName}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className={classes.displayTable}>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>District</label>
                                                    <input
                                                        name="colony"
                                                        type="text"
                                                        placeholder="Enter your district"
                                                        value={values.colony}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.district && touched.district) ? classes.error : ''].join(' ')} />

                                                    {errors.district && touched.district && (
                                                        <div className={classes.inputFeedback}>{errors.district}</div>
                                                    )}
                                                </div>

                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Town</label>
                                                    <input
                                                        name="town"
                                                        type="text"
                                                        placeholder="Enter your town"
                                                        value={values.town}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.town && touched.town) ? classes.error : ''].join(' ')} />

                                                    {errors.town && touched.town && (
                                                        <div className={classes.inputFeedback}>{errors.town}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className={classes.displayTable}>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Federal Entity</label>
                                                    <input
                                                        name="federal_entity"
                                                        type="text"
                                                        placeholder="Enter your federalentity"
                                                        value={values.federal_entity}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.federalEntity && touched.federalEntity) ? classes.error : ''].join(' ')} />

                                                    {errors.federalEntity && touched.federalEntity && (
                                                        <div className={classes.inputFeedback}>{errors.federalEntity}</div>
                                                    )}
                                                </div>

                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Zip Code</label>
                                                    <input
                                                        name="postal_code"
                                                        type="text"
                                                        placeholder="Enter your zipcode"
                                                        value={values.postal_code}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.zipcode && touched.zipcode) ? classes.error : ''].join(' ')} />

                                                    {errors.zipcode && touched.zipcode && (
                                                        <div className={classes.inputFeedback}>{errors.zipcode}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className={classes.displayTable}>
                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Country ID</label>
                                                    <input
                                                        name="country"
                                                        type="text"
                                                        placeholder="Enter your countryID"
                                                        value={values.country}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.countryID && touched.countryID) ? classes.error : ''].join(' ')} />

                                                    {errors.countryID && touched.countryID && (
                                                        <div className={classes.inputFeedback}>{errors.countryID}</div>
                                                    )}
                                                </div>

                                                <div className={classes.wrapinput}>
                                                    <label className={classes.labelBox}>Billing Address</label>
                                                    <input
                                                        name="address"
                                                        type="text"
                                                        placeholder="Enter your billing address"
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={[classes.inputBox, (errors.billingAddress && touched.billingAddress) ? classes.error : ''].join(' ')} />

                                                    {errors.billingAddress && touched.billingAddress && (
                                                        <div className={classes.inputFeedback}>{errors.billingAddress}</div>
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
                                                        value={values.password || ""}
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
                                                <button className={classes.buttonSave} type="submit"> Save </button>
                                                    <button className={classes.buttonCancel} onClick={() => {history.push("/")}} type="reset"> Cancel </button>
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

export default withLoading(UserInfoComponent);