import { useState } from 'react';
import { Formik, Form } from 'formik';
import Input from '../components/Input';
import Button from '../components/Button';
import Toast from '../components/Toast';
import { checkPasswordStrength, PasswordCheck } from '../utils/checkStrength';
import { signUpValidation } from '../utils/formValidation';
import { SignupFormValues } from '../types/formTypes';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [toastMessage, setToastMessage] = useState('');

  return (
    <>
      <div className="flex flex-col justify-center bg-gray-100 h-screen md:h-full items-center p-16">
        {toastMessage && (
            <Toast
              message={toastMessage}
              onClose={() => setToastMessage('')}
              duration={3000}
            />
          )}
        <div className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <h1 className="block text-2xl font-bold text-gray-800 text-center">Sign Up</h1>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-neutral-400">
            Already have an account? 
            <Link to="/login" className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500">
              Log in here
            </Link>
          </p>
          <Formik<SignupFormValues>
            initialValues={{
              fullName: '',
              email: '',
              password: '',
            }}
            validationSchema={signUpValidation}
            onSubmit={(values, { resetForm }) => {
              console.log('Form Submitted:', values);
              setToastMessage('Sign Up Successful!');
              resetForm();
            }}
          >
            {({ values }) => {
              const checkPass: PasswordCheck = checkPasswordStrength(values.password);

              return (
                <Form className="grid gap-y-4 mt-5">
                  <Input
                    label="Full Name"
                    name="fullName"
                    type="text"
                    placeholder="Eg. John Doe"
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Eg. john@example.com"
                  />
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                  />

                  <div className="mt-3">
                    <p className="text-sm text-gray-700 font-medium">Password must contain:</p>
                    <ul className="mt-2 space-y-1">
                      <li className={`text-sm ${checkPass.hasMinLength ? 'text-green-600' : 'text-red-600'}`}>
                        {checkPass.hasMinLength ? '✔' : '✘'} At least 8 characters length
                      </li>
                      <li className={`text-sm ${checkPass.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                        {checkPass.hasNumber ? '✔' : '✘'} At least 1 number (0-9)
                      </li>
                      <li className={`text-sm ${checkPass.hasLowercase ? 'text-green-600' : 'text-red-600'}`}>
                        {checkPass.hasLowercase ? '✔' : '✘'} At least 1 lowercase letter (a-z)
                      </li>
                      <li className={`text-sm ${checkPass.hasUppercase ? 'text-green-600' : 'text-red-600'}`}>
                        {checkPass.hasUppercase ? '✔' : '✘'} At least 1 uppercase letter (A-Z)
                      </li>
                      <li className={`text-sm ${checkPass.hasSpecialChar ? 'text-green-600' : 'text-red-600'}`}>
                        {checkPass.hasSpecialChar ? '✔' : '✘'} At least 1 special symbol (@$?&!%*)
                      </li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Sign Up
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
