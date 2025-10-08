import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { login } from '../utils/network-data';
import { ThemeContext } from '../contexts/ThemeContext';
import { LocaleContext } from '../contexts/LocaleContext';

const LoginPage = ({ loginSuccess }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

  const onLogin = async (event) => {
    event.preventDefault();
    const { error, data } = await login({ email, password });
    if (!error) loginSuccess(data);
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
          {locale === 'id' ? 'Masuk' : 'Login'}
        </h1>

        <form
          onSubmit={onLogin}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 dark:text-gray-300"
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
              className="text-sm font-medium text-gray-600 dark:text-gray-300"
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

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white transition-all duration-300 bg-orange-500 rounded-md hover:bg-orange-600"
          >
            {locale === 'id' ? 'Masuk' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          {locale === 'id' ? 'Belum punya akun?' : "Don't have an account?"}
          <Link
            to="/register"
            className="ml-1 font-semibold text-orange-500 hover:underline"
          >
            {locale === 'id' ? 'Daftar' : 'Register'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
