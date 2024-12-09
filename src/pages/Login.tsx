import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import Input from '../components/Input';
import Button from '../components/Button';
import Toast from '../components/Toast';
import { loginValidation } from '../utils/formValidation';
import { LoginFormValues } from '../types/formTypes';
import { Link } from 'react-router-dom';

const Login = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [initialEmail, setInitialEmail] = useState('');

  useEffect(() => {
    const existingEmail = localStorage.getItem('existingEmail');
    if (existingEmail) {
      setInitialEmail(existingEmail);
    }
  }, []);

  const handleRememberMe = (email: string, remember: boolean) => {
    if (remember) {
      localStorage.setItem('existingEmail', email);
    } else {
      localStorage.removeItem('existingEmail');
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center bg-gray-100 h-screen items-center">
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
              <h1 className="block text-2xl font-bold text-gray-800 text-center">Login</h1>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-neutral-400">
                Don't have an account?
                <Link to="/signup" className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500">
                  Sign up here
                </Link>
              </p>
              <Formik<LoginFormValues>
                initialValues={{
                  email: initialEmail || '',
                  password: '',
                  rememberMe: !!initialEmail,
                }}
                validationSchema={loginValidation}
                onSubmit={(values, { resetForm }) => {
                  console.log('Form Submitted:', values);
                  setToastMessage('Login Successful!');
                  handleRememberMe(values.email, values.rememberMe);
                  resetForm();
                }}
              >
                {({ values, setFieldValue }) => (
                  <Form className="grid gap-y-4 mt-5">
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />

                    <div className="mt-3 flex items-center">
                      <label className="text-sm text-gray-700 font-medium flex items-center">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={values.rememberMe}
                          className="mr-2 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                          onChange={(e) => setFieldValue('rememberMe', e.target.checked)}
                        />
                        Remember Me
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
