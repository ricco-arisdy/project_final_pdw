import React from 'react';

function Index() {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    // Tambahkan logika lain yang diperlukan untuk logout, seperti menghapus token atau mengosongkan state
  };

  return (
    <div>
      <head></head>
      <body className="is-preload">
        <div id="header">
          <div className="top">
            <div id="logo">
              <span className="image avatar48">
                <img src="images/31.png" alt="" />
              </span>
              <h1 id="title">Planet E-Sport</h1>
              <p>Planet E-Sport Organization</p>
            </div>
            <nav id="nav">
              <ul>
                <li>
                  <a href="#top" id="top-link">
                    <span className="icon solid fa-home">Intro</span>
                  </a>
                </li>
                <li>
                  <a href="#about" id="about-link">
                    <span className="icon solid fa-user">About Me</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" id="portfolio-link">
                    <span className="icon solid fa-th">Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#genre" id="about-link">
                    <span className="icon solid fa-gamepad">Genre</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" id="contact-link">
                    <span className="icon solid fa-envelope">Register</span>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleLogout} id="logout-link">
                    <span className="icon solid fa-sign-out-alt">Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bottom">
            <ul className="icons">
              <li>
                <a className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a className="icon brands fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a className="icon brands fa-github">
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a className="icon brands fa-dribbble">
                  <span className="label">Dribbble</span>
                </a>
              </li>
              <li>
                <a className="icon solid fa-envelope">
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="main">
          <section id="top" className="one dark cover">
            <div className="container">
              <header>
                <h2 className="alt">Hi! Selamat Datang</h2>
                <p>
                  Daftarlah sekarang untuk turnamen esport! <br />
                  Tunjukkan keahlian Anda dan menangkan hadiah besar.
                </p>
              </header>
              <footer>
                <a href="#about" className="button scrolly">
                  Selengkapnya
                </a>
              </footer>
            </div>
          </section>
          <section id="about" className="three">
            <div className="container">
              <header>
                <h2>About Me</h2>
              </header>
              <video
                autoPlay
                className="featured"
                controls
                width="840"
                height="360"
              >
                <source src="video.mp4" type="video/mp4" />
              </video>
              <p>
                Halo! Sobat Gamers, kami sangat senang menyambut Anda di situs
                web turnamen esports kami. Kami fokus pada turnamen yang
                profesional, adil, dan menyenangkan. Dengan aturan yang jelas
                dan pengalaman bermain yang memuaskan, kami berusaha menjadi yang
                terbaik di industri ini. Bergabunglah dengan kami dan jadilah
                bagian dari komunitas esports yang berkembang. Apakah Anda
                seorang pemain berbakat, penggemar setia, atau mitra potensial,
                kami ingin memberikan pengalaman esports yang luar biasa bagi
                Anda. Terima kasih telah mengunjungi situs kami. Nikmati
                turnamen kami dan dukung perkembangan esports di masa depan.
                Jangan ragu untuk menghubungi kami jika Anda memiliki
                pertanyaan atau saran.
              </p>
              <p>Salam,</p>
              <p>[Planet E-Sport Organization]</p>
            </div>
          </section>
          <section id="portfolio" className="two">
            <div className="container">
              <header>
                <h2>Portfolio</h2>
              </header>
              <p>
                Kami dengan bangga mempersembahkan berbagai turnamen esport yang
                telah kami selenggarakan. Dari kompetisi-kompetisi yang
                bersemangat, kami telah menciptakan pengalaman yang menarik bagi
                para pemain dan penggemar esport. Lihatlah beberapa momen yang
                tak terlupakan dari turnamen-turnamen kami.
              </p>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a className="image fit">
                      <img
                        src="https://i0.wp.com/esportsnesia.com/wp-content/uploads/2020/07/Turnamen-Esports-Di-Indonesia-696x464.jpg"
                        alt=""
                      />
                    </a>
                    <header>
                      <h3>Dokumentasi 1</h3>
                    </header>
                  </article>
                  <article className="item">
                    <a className="image fit">
                      <img
                        src="https://cms.dailysocial.id/wp-content/uploads/2021/12/8e872887192700fcb9b390ea9e6a8b5c_ifel.jpg"
                        alt=""
                      />
                    </a>
                    <header>
                      <h3>Dokumentasi 2</h3>
                    </header>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a className="image fit">
                      <img
                        src="https://api.duniagames.co.id/api/content/upload/file/5951414001608115333.jpg"
                        alt=""
                      />
                    </a>
                    <header>
                      <h3>Dokumentasi 3</h3>
                    </header>
                  </article>
                  <article className="item">
                    <a className="image fit">
                      <img
                        src="https://foto.kontan.co.id/mBJiyJk2JsSynuSLwpJvHlbcQfI=/smart/2019/12/09/386445770p.jpg"
                        alt=""
                      />
                    </a>
                    <header>
                      <h3>Dokumentasi 4</h3>
                    </header>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a className="image fit">
                      <img
                        src="https://cdn.idntimes.com/content-images/community/2019/04/6-daftar-game-esport-nomor-1-populer-di-asia-tenggara-aetsncmnax-405d80d16ba8e5688450c35aced38c67_600x400.jpg"
                        alt=""
                      />
                    </a>
                    <header>
                      <h3>Dokumentasi 5</h3>
                    </header>
                  </article>
                  <article className="item">
                    <a className="image fit">
                      <img
                        src="https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2020/01/turnamen-esports-indonesia-1-1-640x360.jpg"
                        alt=""
                      />
                    </a>
                    <header>
                      <h3>Dokumentasi 6</h3>
                    </header>
                  </article>
                </div>
              </div>
            </div>
            <p>
              Kami dengan bangga mempersembahkan berbagai turnamen esport yang
              telah kami selenggarakan. Dari kompetisi-kompetisi yang
              bersemangat, kami telah menciptakan pengalaman yang menarik bagi
              para pemain dan penggemar esport. Lihatlah beberapa momen yang tak
              terlupakan dari turnamen-turnamen kami.
            </p>
          </section>
          <section id="genre" className="three">
            <div className="container">
              <header>
                <h2>Genre</h2>
              </header>
              <p>
                Di bawah ini adalah beberapa genre game yang kami sediakan untuk
                turnamen esports kami.
              </p>
              <div className="row">
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a>
                      <img src="images/pubgm.png" alt="PUBGM" />
                      <header>
                        <h3>PUBGM</h3>
                      </header>
                    </a>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a>
                      <img src="images/ml.png" alt="MLBB" />
                      <header>
                        <h3>MLBB</h3>
                      </header>
                    </a>
                  </article>
                </div>
                <div className="col-4 col-12-mobile">
                  <article className="item">
                    <a>
                      <img
                        src="https://a-static.besthdwallpaper.com/valorant-logo-wallpaper-2400x1350-55226_50.jpg"
                        alt="Valorant"
                      />
                      <header>
                        <h3>Valorant</h3>
                      </header>
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="four">
            <div className="container">
              <header>
                <h2>Registrasi</h2>
              </header>
              <p>
                Siapkan tim game Anda dan daftarkan diri sekarang juga! Isi
                formulir di bawah ini dengan informasi lengkap. Pastikan Anda
                mengisi semua bidang dengan cermat. Setelah selesai, tekan
                tombol "Send Message" dan kami akan menantikan kehadiran tim
                Anda di turnamen mendatang. Jangan lewatkan kesempatan untuk
                bermain dengan para pemain hebat lainnya dan jadilah juara di
                dunia game!
              </p>
              <form method="post" action="#">
                <div className="row">
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="player_name"
                      placeholder="Nama Tim"
                      required
                    />
                  </div>
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="team_name"
                      placeholder="Nama Kapten"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <h3>Daftar Anggota</h3>
                  </div>
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="captain_name"
                      placeholder="Player 1"
                      required
                    />
                  </div>
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="captain_name"
                      placeholder="Player 2"
                      required
                    />
                  </div>
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="email"
                      placeholder="Player 3"
                      required
                    />
                  </div>
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="email"
                      placeholder="Player 4"
                      required
                    />
                  </div>
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="email"
                      placeholder="Player 5"
                      required
                    />
                  </div>
                  <div className="col-6 col-12-mobile">
                    <input
                      type="text"
                      name="email"
                      placeholder="Player 6"
                      required
                    />
                  </div>
                  <div className="col-6 col-12-mobile">
                    <select name="game_genre" required>
                      <option value="">Pilih Genre</option>
                      <option value="RPG">Mobile Legends</option>
                      <option value="FPS">PUBG</option>
                      <option value="Adventure">Valorant</option>
                    </select>
                  </div>
                  <div className="col-6 col-12-mobile">
                    <label htmlFor="logo" className="file-label">
                      Logo
                      <input
                        type="file"
                        name="logo"
                        id="logo"
                        accept="image/*"
                        required
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      type="submit"
                      value="Send Message"
                      id="submitButton"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div id="footer">
          <ul className="copyright">
            <li>&copy; Planet E-Sport Organization.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </body>
    </div>
  );
}

export default Index;
