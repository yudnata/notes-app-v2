import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';
import { ThemeContext } from '../contexts/ThemeContext';
import { LocaleContext } from '../contexts/LocaleContext';

const RegisterPage = () => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(
        locale === 'id'
          ? 'Kata sandi dan konfirmasi tidak cocok'
          : 'Password and confirm password must match'
      );
      return;
    }
    const { error } = await register({ name, email, password });
    if (!error) navigate('/login');
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen transition-colors duration-500 ${
        theme === 'light' ? 'bg-slate-50' : 'bg-gray-800'
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl transition-colors duration-500 ${
          theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100'
        }`}
      >
        <h1 className="mb-6 text-3xl font-bold text-center text-orange-500">
          {locale === 'id' ? 'Daftar' : 'Register'}
        </h1>

        <form
          onSubmit={onRegister}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-600 dark:text-gray-500"
            >
              {locale === 'id' ? 'Nama' : 'Name'}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={onNameChange}
              required
              className={`w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                theme === 'light'
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-gray-700 text-gray-200 border-gray-600'
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 dark:text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={onEmailChange}
              required
              className={`w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                theme === 'light'
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-gray-700 text-gray-200 border-gray-600'
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600 dark:text-gray-500"
            >
              {locale === 'id' ? 'Kata Sandi' : 'Password'}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              required
              className={`w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                theme === 'light'
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-gray-700 text-gray-200 border-gray-600'
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-600 dark:text-gray-500"
            >
              {locale === 'id' ? 'Konfirmasi Kata Sandi' : 'Confirm Password'}
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              required
              className={`w-full px-3 py-2 mt-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                theme === 'light'
                  ? 'bg-white text-gray-800 border-gray-300'
                  : 'bg-gray-700 text-gray-200 border-gray-600'
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white transition-all duration-300 bg-orange-500 rounded-md hover:bg-orange-600"
          >
            {locale === 'id' ? 'Daftar' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-500">
          {locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'}
          <Link
            to="/login"
            className="ml-1 font-semibold text-orange-500 hover:underline"
          >
            {locale === 'id' ? 'Masuk' : 'Login'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
