import React from 'react';

function Login() {
  const handleLogin = () => {
    // Tambahkan logika login yang sesuai di sini
    localStorage.setItem('isLoggedIn', true);
    // Setelah berhasil login, lakukan pengalihan ke halaman utama (index.jsx) atau halaman yang diinginkan
  };

  return (
    <div>
      <head></head>
      <body className="is-preload">
        <div className="container">
          <div className="login-form">
            <h2 className="login-title">Selamat Datang</h2>
            <form id="loginForm">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Masukkan username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan password"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit">Login</button>
              </div>
            </form>
            <div className="register">
              <p>
                Belum memiliki akun? <a href="registration.html">Daftar</a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
